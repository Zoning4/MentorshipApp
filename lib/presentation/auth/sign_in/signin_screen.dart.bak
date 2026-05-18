import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_up/signup_screen.dart';
import 'package:iuc_seas_mentorship/presentation/auth/widgets/auth_text_field.dart';
import 'package:iuc_seas_mentorship/presentation/mentee/mentee_dashboard.dart';
import 'package:iuc_seas_mentorship/presentation/mentor/mentor_dashboard.dart';
import 'package:iuc_seas_mentorship/presentation/admin/admin_dashboard.dart';
import 'package:iuc_seas_mentorship/services/amplify_service.dart';

class SigninScreen extends StatefulWidget {
  const SigninScreen({super.key});
  @override
  State<SigninScreen> createState() => _SigninScreenState();
}

class _SigninScreenState extends State<SigninScreen> {
  final _emailCtrl = TextEditingController();
  final _passCtrl  = TextEditingController();
  bool _isLoading   = false;
  int _adminTapCount = 0;

  void _signIn() async {
    final email = _emailCtrl.text.trim();
    final pass  = _passCtrl.text.trim();

    if (email.isEmpty || pass.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please enter your credentials')));
      return;
    }

    setState(() => _isLoading = true);

    final isSignedIn = await AmplifyService().signIn(email, pass);

    if (!mounted) return;
    setState(() => _isLoading = false);

    if (isSignedIn) {
      if (email.toLowerCase().contains('admin')) {
        Navigator.pushReplacement(context,
            MaterialPageRoute(builder: (_) => const AdminDashboard()));
      } else if (email.toLowerCase().contains('mentor')) {
        Navigator.pushReplacement(context,
            MaterialPageRoute(builder: (_) => const MentorDashboard()));
      } else {
        Navigator.pushReplacement(context,
            MaterialPageRoute(builder: (_) => const MenteeDashboard()));
      }
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Sign in failed. Please check your credentials.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ));
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(children: [
          // Header
          Container(
            width: double.infinity,
            decoration: const BoxDecoration(gradient: AppColors.primaryGradient),
            padding: const EdgeInsets.fromLTRB(24, 56, 24, 32),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              GestureDetector(
                onTap: () {
                  setState(() => _adminTapCount++);
                  if (_adminTapCount >= 7) {
                    Navigator.pushReplacement(context,
                        MaterialPageRoute(builder: (_) => const AdminDashboard()));
                  }
                },
                child: const Icon(Icons.school, color: Colors.white, size: 36),
              ),
              const SizedBox(height: 10),
              const Text('Welcome Back!',
                  style: TextStyle(color: Colors.white, fontSize: 28,
                      fontWeight: FontWeight.w800)),
              const SizedBox(height: 4),
              const Text('Sign in to your IUC/SEAS Mentorship account',
                  style: TextStyle(color: Colors.white70, fontSize: 14)),
            ]),
          ),
          const SizedBox(height: 48),

          AuthTextField(controller: _emailCtrl, hintText: 'IUC Email Address',
              obscureText: false,
              icon: const Icon(Icons.email_outlined, color: AppColors.greySHADE500)),
          const SizedBox(height: 12),
          AuthTextField(controller: _passCtrl, hintText: 'Password',
              obscureText: true,
              icon: const Icon(Icons.lock_outline, color: AppColors.greySHADE500)),
          const SizedBox(height: 8),

          Align(
            alignment: Alignment.centerRight,
            child: Padding(
              padding: const EdgeInsets.only(right: 24),
              child: TextButton(
                onPressed: () {},
                child: const Text('Forgot Password?',
                    style: TextStyle(color: AppColors.primaryColor,
                        fontWeight: FontWeight.w600)),
              ),
            ),
          ),
          const SizedBox(height: 16),

          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: SizedBox(
              width: double.infinity, height: 52,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [AppColors.primaryColor, AppColors.accentColor],
                    begin: Alignment.centerLeft,
                    end: Alignment.centerRight,
                  ),
                  borderRadius: BorderRadius.circular(30),
                ),
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.transparent,
                    shadowColor: Colors.transparent,
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(30)),
                  ),
                  onPressed: _isLoading ? null : _signIn,
                  child: _isLoading 
                    ? const SizedBox(
                        width: 20, height: 20,
                        child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2),
                      )
                    : const Text('Sign In',
                        style: TextStyle(fontSize: 16,
                            fontWeight: FontWeight.w700, color: Colors.white)),
                ),
              ),
            ),
          ),
          const SizedBox(height: 20),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            const Text("Don't have an account? ", style: TextStyle(fontSize: 14)),
            GestureDetector(
              onTap: () => Navigator.push(context,
                  MaterialPageRoute(builder: (_) => const SignupScreen())),
              child: const Text('Register',
                  style: TextStyle(color: AppColors.primaryColor,
                      fontSize: 14, fontWeight: FontWeight.w700)),
            ),
          ]),
          const SizedBox(height: 32),
        ]),
      ),
    );
  }
}
