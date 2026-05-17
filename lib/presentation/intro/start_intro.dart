import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_in/signin_screen.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_up/signup_screen.dart';

class StartIntro extends StatelessWidget {
  const StartIntro({super.key});

  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle(const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.light,
    ));
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(gradient: AppColors.primaryGradient),
        child: SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 28),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Spacer(flex: 2),
                Container(
                  width: 80, height: 80,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.15),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.school, color: Colors.white, size: 44),
                ),
                const SizedBox(height: 28),
                const Text('Welcome to\nIUC/SEAS\nMentorship.',
                    style: TextStyle(color: Colors.white, fontSize: 38,
                        fontWeight: FontWeight.w800, height: 1.15)),
                const SizedBox(height: 16),
                const Text(
                  'Your academic growth and collaboration platform — schedule sessions and stay on top of school activities all in one place.',
                  style: TextStyle(color: Colors.white70, fontSize: 15, height: 1.5),
                ),
                const Spacer(flex: 3),
                const Spacer(),
                // Get Started
                SizedBox(
                  width: double.infinity,
                  height: 54,
                  child: ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.white,
                      foregroundColor: AppColors.primaryColor,
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14)),
                      elevation: 0,
                    ),
                    onPressed: () => Navigator.push(context,
                        MaterialPageRoute(builder: (_) => const SignupScreen())),
                    child: const Text('Get Started',
                        style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700)),
                  ),
                ),
                const SizedBox(height: 14),
                Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  const Text('Already have an account? ',
                      style: TextStyle(color: Colors.white70, fontSize: 14)),
                  GestureDetector(
                    onTap: () => Navigator.push(context,
                        MaterialPageRoute(builder: (_) => const SigninScreen())),
                    child: const Text('Sign In',
                        style: TextStyle(color: Colors.white,
                            fontSize: 14, fontWeight: FontWeight.w700,
                            decoration: TextDecoration.underline,
                            decorationColor: Colors.white)),
                  ),
                ]),
                const SizedBox(height: 28),
              ],
            ),
          ),
        ),
      ),
    );
  }

}
