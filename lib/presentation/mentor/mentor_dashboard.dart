import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/shared/chat/chat_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/sessions/sessions_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/activities/activities_screen.dart';
import 'package:iuc_seas_mentorship/presentation/shared/groups/project_groups_screen.dart';
import 'package:iuc_seas_mentorship/presentation/mentor/mentor_search.dart';
import 'package:iuc_seas_mentorship/presentation/mentor/mentor_profile.dart';
import 'package:iuc_seas_mentorship/presentation/intro/start_intro.dart';

class MentorDashboard extends StatefulWidget {
  const MentorDashboard({super.key});
  @override
  State<MentorDashboard> createState() => _MentorDashboardState();
}

class _MentorDashboardState extends State<MentorDashboard> {
  int _currentIndex = 0;

  final List<Widget> _pages = const [
    _MentorHome(),
    MentorSearch(),
    SessionsScreen(isMentor: true),
    ActivitiesScreen(isMentor: true),
    MentorProfile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        type: BottomNavigationBarType.fixed,
        selectedItemColor: AppColors.mentorColor,
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

class _MentorHome extends StatelessWidget {
  const _MentorHome();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: CustomScrollView(slivers: [
        SliverAppBar(
          expandedHeight: 190,
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
                const Text('Tsamekong Lewis 👋',
                    style: TextStyle(color: Colors.white, fontSize: 22,
                        fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                Container(
                  padding: const EdgeInsets.symmetric(
                      horizontal: 10, vertical: 4),
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.2),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: const Text('Level 2 · B.Tech · Mentor',
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
              // My Mentee Card
              const Text('My Assigned Mentee',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _menteeCard(context),
              const SizedBox(height: 24),

              // Quick actions
              const Text('Quick Actions',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 12),
              Row(children: [
                _quickAction(context, Icons.chat_bubble_outline,
                    'Message\nMentee', AppColors.mentorColor, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const ChatScreen(
                          contactName: 'Nguemo Alain',
                          contactRole: 'Mentee',
                          contactDept: 'B.Tech · Level 1')));
                }),
                const SizedBox(width: 12),
                _quickAction(context, Icons.calendar_today_outlined,
                    'Schedule\nSession', AppColors.accentColor, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const SessionsScreen(isMentor: true)));
                }),
                const SizedBox(width: 12),
                _quickAction(context, Icons.groups_outlined,
                    'Project\nGroups', Colors.green.shade700, () {
                  Navigator.push(context, MaterialPageRoute(
                      builder: (_) => const ProjectGroupsScreen(isMentor: true)));
                }),
              ]),
              const SizedBox(height: 24),

              // L3 Seniors — for help
              const Text('Level 3 Seniors (For Assistance)',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _seniorItem(context, 'Vokeng Walefack', 'B.Tech', 'Online'),
              _seniorItem(context, 'Kamga Patrick',   'B.Tech', 'Offline'),
              const SizedBox(height: 24),

              // Upcoming session
              const Text('Upcoming Session',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 10),
              _upcomingSession(),
              const SizedBox(height: 20),
            ]),
          ),
        ),
      ]),
    );
  }

  Widget _menteeCard(BuildContext context) {
    return GestureDetector(
      onTap: () => Navigator.push(context, MaterialPageRoute(
          builder: (_) => const ChatScreen(
              contactName: 'Nguemo Alain',
              contactRole: 'Mentee',
              contactDept: 'B.Tech · Level 1'))),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          gradient: const LinearGradient(
              colors: [AppColors.accentColor, AppColors.primaryColor],
              begin: Alignment.topLeft, end: Alignment.bottomRight),
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(
              color: AppColors.accentColor.withOpacity(0.3),
              blurRadius: 12, offset: const Offset(0, 4))],
        ),
        child: Row(children: [
          CircleAvatar(
            radius: 30,
            backgroundColor: Colors.white24,
            child: const Text('NA',
                style: TextStyle(color: Colors.white,
                    fontSize: 20, fontWeight: FontWeight.bold)),
          ),
          const SizedBox(width: 16),
          Expanded(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Nguemo Alain',
                style: TextStyle(color: Colors.white,
                    fontSize: 17, fontWeight: FontWeight.w700)),
            const SizedBox(height: 4),
            const Text('Your Mentee · Level 1 · B.Tech',
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

  Widget _seniorItem(BuildContext context, String name, String dept, String status) {
    final isOnline = status == 'Online';
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        boxShadow: [BoxShadow(
            color: Colors.black.withOpacity(0.05), blurRadius: 6)],
      ),
      child: Row(children: [
        Stack(children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: Colors.purple.withOpacity(0.12),
            child: Text(name[0],
                style: const TextStyle(color: Colors.purple,
                    fontWeight: FontWeight.bold)),
          ),
          Positioned(right: 0, bottom: 0,
            child: Container(
              width: 10, height: 10,
              decoration: BoxDecoration(
                color: isOnline ? Colors.green : Colors.grey,
                shape: BoxShape.circle,
                border: Border.all(color: Colors.white, width: 2),
              ),
            ),
          ),
        ]),
        const SizedBox(width: 12),
        Expanded(child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(name, style: const TextStyle(
              fontWeight: FontWeight.w600, fontSize: 14)),
          Text('$dept · Level 3',
              style: const TextStyle(color: Colors.grey, fontSize: 11)),
        ])),
        GestureDetector(
          onTap: () => Navigator.push(context, MaterialPageRoute(
              builder: (_) => ChatScreen(
                  contactName: name,
                  contactRole: 'Level 3 Senior',
                  contactDept: '$dept · Level 3'))),
          child: Container(
            padding: const EdgeInsets.all(7),
            decoration: BoxDecoration(
              color: Colors.purple.withOpacity(0.1),
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.chat_bubble_outline,
                color: Colors.purple, size: 18),
          ),
        ),
      ]),
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
            color: AppColors.mentorColor.withOpacity(0.1),
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Icon(Icons.calendar_month,
              color: AppColors.mentorColor, size: 26),
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
}
