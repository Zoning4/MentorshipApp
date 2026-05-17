import 'package:amplify_auth_cognito/amplify_auth_cognito.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:amplify_api/amplify_api.dart';
import 'package:amplify_storage_s3/amplify_storage_s3.dart';

class AmplifyService {
  static final AmplifyService _instance = AmplifyService._internal();
  factory AmplifyService() => _instance;
  AmplifyService._internal();

  Future<void> configureAmplify() async {
    try {
      if (!Amplify.isConfigured) {
        await Amplify.addPlugins([
          AmplifyAuthCognito(),
          AmplifyAPI(),
          AmplifyStorageS3(),
        ]);
        
        // After running 'npx ampx sandbox', you will have 'amplify_outputs.dart'
        // import 'amplify_outputs.dart';
        // await Amplify.configure(amplifyConfig);
        
        safePrint('Amplify plugins added. Waiting for configuration file.');
      }
    } on Exception catch (e) {
      safePrint('Error configuring Amplify: $e');
    }
  }

  // Auth Methods
  Future<bool> signIn(String email, String password) async {
    try {
      final result = await Amplify.Auth.signIn(
        username: email,
        password: password,
      );
      return result.isSignedIn;
    } on AuthException catch (e) {
      safePrint('Auth Error: ${e.message}');
      return false;
    }
  }

  Future<void> signOut() async {
    await Amplify.Auth.signOut();
  }

  // API Methods
  Future<void> createUser(Map<String, dynamic> userData) async {
    // This would use the generated models from Amplify
    // final user = User(fullName: userData['name'], ...);
    // final request = ModelMutations.create(user);
    // await Amplify.API.mutate(request: request).response;
  }

  Future<void> sendMessage(String pairingId, String content, String type) async {
    // Template for sending real-time messages via AppSync
  }

  // Storage Methods
  Future<String?> uploadFile(String path, String name) async {
    try {
      final result = await Amplify.Storage.uploadFile(
        localFile: AWSFile.fromPath(path),
        key: 'uploads/$name',
      ).result;
      return result.uploadedItem.key;
    } on StorageException catch (e) {
      safePrint('Storage Error: ${e.message}');
      return null;
    }
  }
}
