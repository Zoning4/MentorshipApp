import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_auth_cognito/amplify_auth_cognito.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:amplify_storage_s3/amplify_storage_s3.dart';
import 'package:flutter/foundation.dart';
import 'dart:io';
import '../amplifyconfiguration.dart';

class AmplifyService {
  static final AmplifyService _instance = AmplifyService._internal();
  factory AmplifyService() => _instance;
  AmplifyService._internal();

  Future<void> configureAmplify() async {
    if (Amplify.isConfigured) return;
    try {
      await Amplify.addPlugins([
        AmplifyAuthCognito(),
        AmplifyAPI(),
        AmplifyStorageS3(),
      ]);
      await Amplify.configure(amplifyconfig);
      debugPrint('AmplifyService: Configured successfully.');
    } catch (e) {
      debugPrint('AmplifyService: Configuration error — $e');
    }
  }

  Future<String?> signUp({
    required String email,
    required String password,
    required String fullName,
    required String level,
    required String department,
  }) async {
    try {
      await Amplify.Auth.signUp(
        username: email,
        password: password,
        options: SignUpOptions(userAttributes: {
          AuthUserAttributeKey.email: email,
          AuthUserAttributeKey.name: fullName,
        }),
      );
      return null;
    } on UsernameExistsException {
      return 'An account with this email already exists.';
    } on InvalidPasswordException catch (e) {
      return e.message;
    } on AuthException catch (e) {
      return e.message;
    }
  }

  Future<String?> confirmSignUp({
    required String email,
    required String confirmationCode,
  }) async {
    try {
      await Amplify.Auth.confirmSignUp(
        username: email,
        confirmationCode: confirmationCode,
      );
      return null;
    } on CodeMismatchException {
      return 'Invalid confirmation code. Please try again.';
    } on ExpiredCodeException {
      return 'Code has expired. Please request a new one.';
    } on AuthException catch (e) {
      return e.message;
    }
  }

  Future<String?> resendConfirmationCode(String email) async {
    try {
      await Amplify.Auth.resendSignUpCode(username: email);
      return null;
    } on AuthException catch (e) {
      return e.message;
    }
  }

  Future<String?> signIn(String email, String password) async {
    try {
      final result = await Amplify.Auth.signIn(
        username: email,
        password: password,
      );
      if (result.nextStep.signInStep == AuthSignInStep.confirmSignUp) {
        return 'CONFIRM_SIGN_UP';
      }
      return null;
    } on UserNotConfirmedException {
      return 'CONFIRM_SIGN_UP';
    } on AuthNotAuthorizedException {
      return 'Incorrect email or password.';
    } on AuthException catch (e) {
      if (e.message.contains('UserNotFoundException')) {
        return 'No account found with this email.';
      }
      return e.message;
    }
  }

  Future<void> signOut() async {
    try {
      await Amplify.Auth.signOut();
    } on AuthException catch (e) {
      debugPrint('SignOut error: ${e.message}');
    }
  }

  Future<AuthUser?> getCurrentUser() async {
    try {
      return await Amplify.Auth.getCurrentUser();
    } on AuthException {
      return null;
    }
  }

  Future<String?> getCurrentUserEmail() async {
    try {
      final attrs = await Amplify.Auth.fetchUserAttributes();
      return attrs
          .firstWhere((a) => a.userAttributeKey == AuthUserAttributeKey.email)
          .value;
    } catch (_) {
      return null;
    }
  }

  Future<String?> getCurrentUserRole() async {
    try {
      final session = await Amplify.Auth.fetchAuthSession();
      final cognitoSession = session as CognitoAuthSession;
      final idToken = cognitoSession.userPoolTokensResult.value.idToken;
      final groups = idToken.claims.customClaims['cognito:groups'];
      if (groups is List && groups.isNotEmpty) return groups.first as String;
      final email = await getCurrentUserEmail() ?? '';
      if (email.contains('admin')) return 'Admin';
      if (email.contains('mentor')) return 'mentor';
      return 'mentee';
    } catch (e) {
      debugPrint('Role fetch error: $e');
      return 'mentee';
    }
  }

  Future<String?> resetPassword(String email) async {
    try {
      await Amplify.Auth.resetPassword(username: email);
      return null;
    } on AuthException catch (e) {
      return e.message;
    }
  }

  Future<String?> createUserProfile({
    required String email,
    required String fullName,
    required String role,
    String? department,
  }) async {
    const graphQLDocument = '''
      mutation CreateUserProfile(\$input: CreateUserProfileInput!) {
        createUserProfile(input: \$input) {
          id email fullName role
        }
      }
    ''';
    try {
      final request = GraphQLRequest<String>(
        document: graphQLDocument,
        variables: {
          'input': {
            'email': email,
            'fullName': fullName,
            'role': role,
            'department': department ?? '',
          }
        },
      );
      final response = await Amplify.API.mutate(request: request).response;
      if (response.errors.isNotEmpty) return response.errors.first.message;
      return null;
    } on ApiException catch (e) {
      return e.message;
    }
  }

  Future<String?> sendMessage({
    required String pairingId,
    required String senderEmail,
    required String content,
  }) async {
    const graphQLDocument = '''
      mutation CreateMessage(\$input: CreateMessageInput!) {
        createMessage(input: \$input) {
          id pairingId senderEmail content sentAt
        }
      }
    ''';
    try {
      final request = GraphQLRequest<String>(
        document: graphQLDocument,
        variables: {
          'input': {
            'pairingId': pairingId,
            'senderEmail': senderEmail,
            'content': content,
            'sentAt': DateTime.now().toUtc().toIso8601String(),
          }
        },
      );
      final response = await Amplify.API.mutate(request: request).response;
      if (response.errors.isNotEmpty) return response.errors.first.message;
      return null;
    } on ApiException catch (e) {
      return e.message;
    }
  }

  Future<String?> uploadProfilePicture(File file, String userId) async {
    try {
      final key = 'profile-pictures/$userId.jpg';
      final result = await Amplify.Storage.uploadFile(
        localFile: AWSFile.fromPath(file.path),
        path: StoragePath.fromString(key),
      ).result;
      debugPrint('Uploaded: ${result.uploadedItem.path}');
      return key;
    } on StorageException catch (e) {
      debugPrint('Upload error: ${e.message}');
      return null;
    }
  }

  Future<String?> getProfilePictureUrl(String key) async {
    try {
      final result = await Amplify.Storage.getUrl(
        path: StoragePath.fromString(key),
      ).result;
      return result.url.toString();
    } on StorageException catch (e) {
      debugPrint('GetUrl error: ${e.message}');
      return null;
    }
  }
}
