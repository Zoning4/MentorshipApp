import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_in/signin_screen.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_up/signup_screen.dart';
import 'package:iuc_seas_mentorship/presentation/intro/start_intro.dart';
import 'package:iuc_seas_mentorship/presentation/splash/splash_screen.dart';
import 'package:iuc_seas_mentorship/presentation/mentee/mentee_dashboard.dart';
import 'package:iuc_seas_mentorship/presentation/mentor/mentor_dashboard.dart';
import 'package:iuc_seas_mentorship/presentation/admin/admin_dashboard.dart';
import 'package:iuc_seas_mentorship/routes/routing_string.dart';

class Routing {
  Route<dynamic> generateRoute(RouteSettings settings) {
    switch (settings.name) {
      // Intro
      case IntroScreenroute:
        return MaterialPageRoute(
          builder: (context) => const StartIntro(),
        );

      // Auth
      case SignUpScreenroute:
        return MaterialPageRoute(
          builder: (context) => const SignupScreen(),
        );

      case SignInScreenroute:
        return MaterialPageRoute(
          builder: (context) => const SigninScreen(),
        );

      // Dashboards
      case HomePageScreenroute:
        return MaterialPageRoute(
          builder: (context) => const MenteeDashboard(),
        );

      case menteeDashboardScreenroute:
        return MaterialPageRoute(
          builder: (context) => const MenteeDashboard(),
        );

      case mentorDashboardScreenroute:
        return MaterialPageRoute(
          builder: (context) => const MentorDashboard(),
        );

      case adminDashboardScreenroute:
        return MaterialPageRoute(
          builder: (context) => const AdminDashboard(),
        );

      // Default / Splash
      default:
        return MaterialPageRoute(
          builder: (context) => const SplashScreen(),
        );
    }
  }
}
