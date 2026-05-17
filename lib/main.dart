// IUC/SEAS Mentorship App
// Serverless BaaS for Mobile Application Development
// Authors: Vokeng Walefack & Tsamekong Lewis

import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/presentation/splash/splash_screen.dart';
import 'package:iuc_seas_mentorship/services/amplify_service.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await AmplifyService().configureAmplify();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'IUC/SEAS Mentorship',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF1A4B8C)),
        useMaterial3: true,
        fontFamily: 'Roboto',
      ),
      home: const SplashScreen(),
    );
  }
}
