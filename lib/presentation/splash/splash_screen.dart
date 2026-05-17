import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:iuc_seas_mentorship/animations/default_anim.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/intro/start_intro.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});
  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(seconds: 3), () {
      DefaultAnim(context, const StartIntro());
    });
  }

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
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Spacer(flex: 3),
                Container(
                  width: 100, height: 100,
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.15),
                    shape: BoxShape.circle,
                  ),
                  child: const Icon(Icons.school, color: Colors.white, size: 56),
                ),
                const SizedBox(height: 24),
                const Text('IUC / SEAS',
                    style: TextStyle(color: Colors.white, fontSize: 36,
                        fontWeight: FontWeight.w800, letterSpacing: 2)),
                const SizedBox(height: 6),
                const Text('Mentorship App',
                    style: TextStyle(color: Colors.white70, fontSize: 18,
                        fontWeight: FontWeight.w300, letterSpacing: 1.5)),
                const Spacer(flex: 2),
                const CircularProgressIndicator(color: Colors.white),
                const Spacer(),
                const Text('University Institute of the Coast · Douala',
                    style: TextStyle(color: Colors.white54, fontSize: 12)),
                const SizedBox(height: 24),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
