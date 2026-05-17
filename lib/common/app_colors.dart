import 'package:flutter/material.dart';

class AppColors {
  static const Color primaryColor = Color(0xFF1A4B8C);
  static const Color accentColor  = Color(0xFF0D9488);
  static const LinearGradient primaryGradient = LinearGradient(
    colors: [Color(0xFF1A4B8C), Color(0xFF0D9488)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
  static const Color white        = Colors.white;
  static const Color cream        = Color(0xFFEBEBEB);
  static const Color text_black   = Color(0xFF000000);
  static const Color text_grey    = Color(0xFF9E9E9E);
  static const Color transparent  = Colors.transparent;
  static const Color greySHADE500 = Color(0xFF9E9E9E);
  static const Color greySHADE800 = Color(0xFF424242);
  static const Color oange        = Color(0xFF1A4B8C); // compat alias
  static const Color menteeColor  = Color(0xFF0D9488); // teal  – mentee
  static const Color mentorColor  = Color(0xFF1A4B8C); // navy  – mentor
  static const Color adminColor   = Color(0xFF7B1FA2); // purple – admin
}
