import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/intro/start_intro.dart';

class MentorProfile extends StatelessWidget {
  const MentorProfile({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: CustomScrollView(slivers: [
        SliverAppBar(
          expandedHeight: 220,
          pinned: true,
          automaticallyImplyLeading: false,
          flexibleSpace: FlexibleSpaceBar(
            background: Container(
              decoration: const BoxDecoration(gradient: AppColors.primaryGradient),
              child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                const SizedBox(height: 40),
                CircleAvatar(radius: 42,
                    backgroundColor: Colors.white24,
                    child: const Text('TL', style: TextStyle(color: Colors.white,
                        fontSize: 28, fontWeight: FontWeight.bold))),
                const SizedBox(height: 10),
                const Text('Tsamekong Lewis', style: TextStyle(color: Colors.white,
                    fontSize: 20, fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                const Text('Level 2 · B.Tech · Mentor',
                    style: TextStyle(color: Colors.white70, fontSize: 13)),
              ]),
            ),
          ),
          actions: [IconButton(icon: const Icon(Icons.edit_outlined,
              color: Colors.white), onPressed: () {})],
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                _stat('Sessions', '8', AppColors.mentorColor),
                _stat('Activities', '10', AppColors.accentColor),
                _stat('Messages', '34', Colors.purple),
              ]),
              const SizedBox(height: 20),
              _infoCard([
                _infoRow(Icons.email_outlined, 'tsamekong.lewis@iuc.edu.cm'),
                _infoRow(Icons.school_outlined, 'B.Tech · Cloud Computing'),
                _infoRow(Icons.layers_outlined, 'Level 2 (Second Year)'),
                _infoRow(Icons.location_on_outlined, 'IUC/SEAS · Douala, Cameroon'),
              ]),
              const SizedBox(height: 16),
              const Text('My Mentee', style: TextStyle(fontSize: 16,
                  fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(color: Colors.white,
                    borderRadius: BorderRadius.circular(14),
                    boxShadow: [BoxShadow(
                        color: Colors.black.withOpacity(0.05), blurRadius: 8)]),
                child: Row(children: [
                  CircleAvatar(radius: 24,
                      backgroundColor: AppColors.menteeColor.withOpacity(0.15),
                      child: const Text('NA', style: TextStyle(
                          color: AppColors.menteeColor, fontWeight: FontWeight.bold))),
                  const SizedBox(width: 14),
                  Expanded(child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start, children: const [
                    Text('Nguemo Alain', style: TextStyle(
                        fontWeight: FontWeight.w700, fontSize: 15)),
                    SizedBox(height: 3),
                    Text('Level 1 · B.Tech · Mentee', style: TextStyle(
                        color: AppColors.menteeColor, fontSize: 12)),
                  ])),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(color: Colors.green.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(12)),
                    child: const Text('Online', style: TextStyle(
                        color: Colors.green, fontSize: 11,
                        fontWeight: FontWeight.w600)),
                  ),
                ]),
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity, height: 48,
                child: OutlinedButton.icon(
                  onPressed: () => Navigator.pushAndRemoveUntil(context,
                      MaterialPageRoute(builder: (_) => const StartIntro()),
                          (_) => false),
                  icon: const Icon(Icons.logout, color: Colors.red),
                  label: const Text('Sign Out',
                      style: TextStyle(color: Colors.red, fontSize: 15)),
                  style: OutlinedButton.styleFrom(
                      side: const BorderSide(color: Colors.red),
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12))),
                ),
              ),
              const SizedBox(height: 20),
            ]),
          ),
        ),
      ]),
    );
  }

  Widget _stat(String label, String value, Color color) => Expanded(
    child: Container(
      margin: const EdgeInsets.symmetric(horizontal: 4),
      padding: const EdgeInsets.symmetric(vertical: 14),
      decoration: BoxDecoration(color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [BoxShadow(
              color: Colors.black.withOpacity(0.05), blurRadius: 6)]),
      child: Column(children: [
        Text(value, style: TextStyle(fontSize: 22,
            fontWeight: FontWeight.w800, color: color)),
        const SizedBox(height: 4),
        Text(label, style: const TextStyle(color: Colors.grey, fontSize: 11)),
      ]),
    ),
  );

  Widget _infoCard(List<Widget> children) => Container(
    padding: const EdgeInsets.all(16),
    decoration: BoxDecoration(color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        boxShadow: [BoxShadow(
            color: Colors.black.withOpacity(0.05), blurRadius: 8)]),
    child: Column(children: children),
  );

  Widget _infoRow(IconData icon, String text) => Padding(
    padding: const EdgeInsets.symmetric(vertical: 6),
    child: Row(children: [
      Icon(icon, size: 18, color: AppColors.accentColor),
      const SizedBox(width: 12),
      Text(text, style: const TextStyle(fontSize: 13, color: Colors.black87)),
    ]),
  );
}
