import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/auth/sign_in/signin_screen.dart';
import 'package:iuc_seas_mentorship/presentation/auth/widgets/auth_text_field.dart';

class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});
  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen> {
  final _nameCtrl  = TextEditingController();
  final _emailCtrl = TextEditingController();
  final _passCtrl  = TextEditingController();
  String _level      = '1';
  String _department = 'B.Tech';
  bool   _isLoading  = false;

  void _register() async {
    final name = _nameCtrl.text.trim();
    final email = _emailCtrl.text.trim();
    final pass = _passCtrl.text.trim();

    if (name.isEmpty || email.isEmpty || pass.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Please fill all fields')),
      );
      return;
    }

    setState(() => _isLoading = true);
    // Simulated delay — replace with real Amplify/Firebase auth call once backend is live
    await Future.delayed(const Duration(seconds: 1));

    if (!mounted) return;
    setState(() => _isLoading = false);

    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Registration successful! Please sign in.')));
    Navigator.pushReplacement(context,
        MaterialPageRoute(builder: (_) => const SigninScreen()));
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
            padding: const EdgeInsets.fromLTRB(24, 56, 24, 28),
            child: const Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Icon(Icons.school, color: Colors.white, size: 36),
              SizedBox(height: 10),
              Text('Create Account',
                  style: TextStyle(color: Colors.white, fontSize: 28,
                      fontWeight: FontWeight.w800)),
              SizedBox(height: 4),
              Text('Join the IUC/SEAS Mentorship platform',
                  style: TextStyle(color: Colors.white70, fontSize: 14)),
            ]),
          ),
          const SizedBox(height: 24),
          const SizedBox(height: 8),

          AuthTextField(controller: _nameCtrl, hintText: 'Full Name',
              obscureText: false,
              icon: const Icon(Icons.person_outline, color: AppColors.greySHADE500)),
          const SizedBox(height: 12),
          AuthTextField(controller: _emailCtrl, hintText: 'IUC Email Address',
              obscureText: false,
              icon: const Icon(Icons.email_outlined, color: AppColors.greySHADE500)),
          const SizedBox(height: 12),
          AuthTextField(controller: _passCtrl, hintText: 'Password',
              obscureText: true,
              icon: const Icon(Icons.lock_outline, color: AppColors.greySHADE500)),
          const SizedBox(height: 16),

          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: DropdownButtonFormField<String>(
              value: _level,
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.layers_outlined,
                    color: AppColors.greySHADE500),
                labelText: 'Level',
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(30)),
                enabledBorder: OutlineInputBorder(
                  borderSide: const BorderSide(color: AppColors.greySHADE500, width: 2),
                  borderRadius: BorderRadius.circular(30),
                ),
              ),
              items: ['1', '2', '3'].map((l) => DropdownMenuItem(value: l, child: Text('Level $l'))).toList(),
              onChanged: (v) => setState(() => _level = v!),
            ),
          ),
          const SizedBox(height: 12),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: DropdownButtonFormField<String>(
              value: _department,
              decoration: InputDecoration(
                prefixIcon: const Icon(Icons.account_balance_outlined,
                    color: AppColors.greySHADE500),
                labelText: 'Department',
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(30)),
                enabledBorder: OutlineInputBorder(
                  borderSide: const BorderSide(color: AppColors.greySHADE500, width: 2),
                  borderRadius: BorderRadius.circular(30),
                ),
              ),
              items: ['B.Tech', 'B.Eng', 'B.Sc'].map((d) => DropdownMenuItem(value: d, child: Text(d))).toList(),
              onChanged: (v) => setState(() => _department = v!),
            ),
          ),
          const SizedBox(height: 24),

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
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
                  ),
                  onPressed: _isLoading ? null : _register,
                  child: _isLoading
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(color: Colors.white, strokeWidth: 2))
                    : const Text('Register', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: Colors.white)),
                ),
              ),
            ),
          ),
          const SizedBox(height: 16),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            const Text('Already registered? ', style: TextStyle(fontSize: 14)),
            GestureDetector(
              onTap: () => Navigator.push(context,
                  MaterialPageRoute(builder: (_) => const SigninScreen())),
              child: const Text('Sign In',
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
