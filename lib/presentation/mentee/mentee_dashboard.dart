import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/shared/chat/chat_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/sessions/sessions_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/activities/activities_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/groups/project_groups_screen.dart';
import 'package:iuc_seas_mentorship/presentation/mentee/mentee_search.dart';
import 'package:iuc_seas_mentorship/presentation/mentee/mentee_profile.dart';

class MenteeDashboard extends StatefulWidget {
  const MenteeDashboard({super.key});
  @override
  State<MenteeDashboard> createState() => _MenteeDashboardState();
}

class _MenteeDashboardState extends State<MenteeDashboard> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    _MenteeHome(),
    MenteeSearch(),
    SessionsScreen(isMentor: false),
    ActivitiesScreen(isMentor: false),
    MenteeProfile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        type: BottomNavigationBarType.fixed,
        selectedItemColor: AppColors.menteeColor,
        unselectedItemColor: Colors.grey,
        selectedLabelStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 11),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home_outlined),
              activeIcon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.search_outlined),
              activeIcon: Icon(Icons.search), label: 'Search'),
          BottomNavigationBarItem(icon: Icon(Icons.calendar_month_outlined),
              activeIcon: Icon(Icons.calendar_month), label: 'Sessions'),
          BottomNavigationBarItem(icon: Icon(Icons.event_outlined),
              activeIcon: Icon(Icons.event), label: 'Activities'),
          BottomNavigationBarItem(icon: Icon(Icons.person_outline),
              activeIcon: Icon(Icons.person), label: 'Profile'),
        ],
      ),
    );
  }
}

class _MenteeHome extends StatelessWidget {
  const _MenteeHome();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: CustomScrollView(slivers: [
        SliverAppBar(
          expandedHeight: 180,
          pinned: true,
          automaticallyImplyLeading: false,
          flexibleSpace: FlexibleSpaceBar(
            background: Container(
              decoration: const BoxDecoration(gradient: AppColors.primaryGradient),
              padding: const EdgeInsets.fromLTRB(20, 56, 20, 20),
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: [
                    const Text('Good morning,',
                        style: TextStyle(color: Colors.white70, fontSize: 14)),
                    const Text('Nguemo Alain 👋',
                        style: TextStyle(color: Colors.white, fontSize: 24,
                            fontWeight: FontWeight.w800)),
                    const SizedBox(height: 4),
                    Container(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 10, vertical: 4),
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.2),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: const Text('Level 1 · B.Tech · Mentee',
                          style: TextStyle(color: Colors.white, fontSize: 12)),
                    ),
                  ]),
            ),
          ),
          actions: [
            IconButton(icon: const Icon(Icons.notifications_outlined,
                color: Colors.white), onPressed: () {}),
          ],
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              // My Mentor Card
              const Text('My Assigned Mentor',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _mentorCard(context),
              const SizedBox(height: 24),

              // Quick actions
              const Text('Quick Actions',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 12),
              Row(children: [
                _quickAction(context, Icons.chat_bubble_outline,
                    'Message\nMentor', AppColors.menteeColor, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const ChatScreen(
                          contactName: 'Tsamekong Lewis',
                          contactRole: 'Mentor',
                          contactDept: 'B.Tech · Level 2')));
                }),
                const SizedBox(width: 12),
                _quickAction(context, Icons.calendar_today_outlined,
                    'View\nSessions', AppColors.primaryColor, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const SessionsScreen(isMentor: false)));
                }),
                const SizedBox(width: 12),
                _quickAction(context, Icons.groups_outlined,
                    'Project\nGroups', Colors.purple.shade700, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const ProjectGroupsScreen(isMentor: false)));
                }),
              ]),
              const SizedBox(height: 24),

              // Upcoming session
              const Text('Upcoming Session',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _upcomingSession(),
              const SizedBox(height: 24),

              // Recent activities
              const Text('Recent Activities',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _activityItem('New Student Orientation', '10 May 2025', 'All'),
              _activityItem('B.Tech Cloud Workshop', '14 May 2025', 'B.Tech'),
              const SizedBox(height: 20),
            ]),
          ),
        ),
      ]),
    );
  }

  Widget _mentorCard(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(context, MaterialPageRoute(
          builder: (_) => const ChatScreen(
              contactName: 'Tsamekong Lewis',
              contactRole: 'Mentor',
              contactDept: 'B.Tech · Level 2'))),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
              colors: [AppColors.primaryColor, AppColors.accentColor],
              begin: Alignment.topLeft, end: Alignment.bottomRight),
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(
              color: AppColors.primaryColor.withOpacity(0.3),
              blurRadius: 12, offset: const Offset(0, 4))],
        ),
        child: Row(children: [
          CircleAvatar(
            radius: 30,
            backgroundColor: Colors.white24,
            child: const Text('TL',
                style: TextStyle(color: Colors.white,
                    fontSize: 20, fontWeight: FontWeight.bold)),
          ),
          const SizedBox(width: 16),
          Expanded(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Tsamekong Lewis',
                style: TextStyle(color: Colors.white,
                    fontSize: 17, fontWeight: FontWeight.w700)),
            const SizedBox(height: 4),
            const Text('Your Mentor · Level 2 · B.Tech',
                style: TextStyle(color: Colors.white70, fontSize: 13)),
            const SizedBox(height: 8),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: Colors.white.withOpacity(0.2),
                borderRadius: BorderRadius.circular(20),
              ),
              child: const Text('Online',
                  style: TextStyle(color: Colors.white,
                      fontSize: 11, fontWeight: FontWeight.w600)),
            ),
          ])),
          const Icon(Icons.chat_bubble_outline, color: Colors.white, size: 28),
        ]),
      ),
    );
  }

  Widget _quickAction(BuildContext context, IconData icon, String label,
      Color color, VoidCallback onTap) {
    return Expanded(
      child: GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(14),
            boxShadow: [BoxShadow(
                color: Colors.black.withOpacity(0.06), blurRadius: 8)],
          ),
          child: Column(children: [
            Icon(icon, color: color, size: 26),
            const SizedBox(height: 8),
            Text(label, textAlign: TextAlign.center,
                style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600,
                    color: Colors.grey.shade700)),
          ]),
        ),
      ),
    );
  }

  Widget _upcomingSession() {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        boxShadow: [BoxShadow(
            color: Colors.black.withOpacity(0.06), blurRadius: 8)],
      ),
      child: Row(children: [
        Container(
          width: 50, height: 50,
          decoration: BoxDecoration(
            color: AppColors.menteeColor.withOpacity(0.1),
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Icon(Icons.calendar_month,
              color: AppColors.menteeColor, size: 26),
        ),
        const SizedBox(width: 14),
        Expanded(child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, children: const [
          Text('Orientation Session',
              style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
          SizedBox(height: 4),
          Text('12 May 2025 · 10:00 AM · Room B204',
              style: TextStyle(color: Colors.grey, fontSize: 12)),
        ])),
        const Icon(Icons.chevron_right, color: Colors.grey),
      ]),
    );
  }

  Widget _activityItem(String title, String date, String dept) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(
            color: Colors.black.withOpacity(0.05), blurRadius: 6)],
      ),
      child: Row(children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
          decoration: BoxDecoration(
            color: AppColors.primaryColor.withOpacity(0.1),
            borderRadius: BorderRadius.circular(8),
          ),
          child: Text(dept,
              style: const TextStyle(color: AppColors.primaryColor,
                  fontSize: 10, fontWeight: FontWeight.w700)),
        ),
        const SizedBox(width: 10),
        Expanded(child: Text(title,
            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600))),
        Text(date, style: const TextStyle(color: Colors.grey, fontSize: 11)),
      ]),
    );
  }
}
