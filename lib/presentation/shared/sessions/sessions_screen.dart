import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/models/session_model.dart';

class SessionsScreen extends StatefulWidget {
  final bool isMentor;
  const SessionsScreen({super.key, required this.isMentor});
  @override
  State<SessionsScreen> createState() => _SessionsScreenState();
}

class _SessionsScreenState extends State<SessionsScreen>
    with SingleTickerProviderStateMixin {
  late TabController _tab;

  final List<SessionModel> _sessions = [
    SessionModel(id: '1', title: 'Orientation Session',
        description: 'Introduction to university life, departments and resources.',
        mentorName: 'Tsamekong Lewis', menteeName: 'Nguemo Alain',
        date: '12 May 2025', time: '10:00 AM', location: 'Room B204',
        status: 'scheduled'),
    SessionModel(id: '2', title: 'Course Selection Guidance',
        description: 'Help mentee select appropriate courses for semester 1.',
        mentorName: 'Tsamekong Lewis', menteeName: 'Nguemo Alain',
        date: '15 May 2025', time: '2:00 PM', location: 'Library Hall',
        status: 'scheduled'),
    SessionModel(id: '3', title: 'First Month Check-in',
        description: 'Review mentee progress after first month at IUC.',
        mentorName: 'Tsamekong Lewis', menteeName: 'Nguemo Alain',
        date: '5 Apr 2025', time: '11:00 AM', location: 'Online',
        status: 'completed'),
  ];

  @override
  void initState() {
    super.initState();
    _tab = TabController(length: 2, vsync: this);
  }

  @override
  void dispose() {
    _tab.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Container(
            decoration: const BoxDecoration(gradient: AppColors.primaryGradient)),
        leading: IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white),
            onPressed: () => Navigator.pop(context)),
        title: const Text('My Sessions',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
        bottom: TabBar(
          controller: _tab,
          indicatorColor: Colors.white,
          labelColor: Colors.white,
          unselectedLabelColor: Colors.white54,
          tabs: const [Tab(text: 'Upcoming'), Tab(text: 'Completed')],
        ),
      ),
      body: TabBarView(
        controller: _tab,
        children: [
          _buildList('scheduled'),
          _buildList('completed'),
        ],
      ),
      floatingActionButton: widget.isMentor
          ? FloatingActionButton.extended(
              backgroundColor: AppColors.primaryColor,
              icon: const Icon(Icons.add, color: Colors.white),
              label: const Text('Schedule',
                  style: TextStyle(color: Colors.white)),
              onPressed: () => _showScheduleDialog(),
            )
          : null,
    );
  }

  Widget _buildList(String status) {
    final list = _sessions.where((s) => s.status == status).toList();
    if (list.isEmpty) {
      return Center(
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Icon(Icons.calendar_today_outlined,
              size: 60, color: Colors.grey.shade300),
          const SizedBox(height: 12),
          Text(status == 'scheduled'
              ? 'No upcoming sessions' : 'No completed sessions',
              style: const TextStyle(color: Colors.grey)),
        ]),
      );
    }
    return ListView.builder(
      padding: const EdgeInsets.all(16),
      itemCount: list.length,
      itemBuilder: (context, i) => _sessionCard(list[i]),
    );
  }

  Widget _sessionCard(SessionModel s) {
    final isCompleted = s.status == 'completed';
    return Card(
      margin: const EdgeInsets.only(bottom: 14),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      elevation: 3,
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
              decoration: BoxDecoration(
                color: isCompleted
                    ? Colors.green.withOpacity(0.1)
                    : AppColors.primaryColor.withOpacity(0.1),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(isCompleted ? 'Completed' : 'Upcoming',
                  style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w600,
                      color: isCompleted ? Colors.green : AppColors.primaryColor)),
            ),
            const Spacer(),
            Text(s.date,
                style: const TextStyle(color: Colors.grey, fontSize: 12)),
          ]),
          const SizedBox(height: 10),
          Text(s.title,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          Text(s.description,
              style: const TextStyle(color: Colors.black54, fontSize: 13)),
          const SizedBox(height: 12),
          Row(children: [
            const Icon(Icons.access_time_outlined,
                size: 14, color: AppColors.accentColor),
            const SizedBox(width: 4),
            Text(s.time,
                style: const TextStyle(fontSize: 12, color: Colors.black54)),
            const SizedBox(width: 16),
            const Icon(Icons.location_on_outlined,
                size: 14, color: AppColors.accentColor),
            const SizedBox(width: 4),
            Text(s.location,
                style: const TextStyle(fontSize: 12, color: Colors.black54)),
          ]),
        ]),
      ),
    );
  }

  void _showScheduleDialog() {
    final titleCtrl = TextEditingController();
    final descCtrl  = TextEditingController();
    final locCtrl   = TextEditingController();
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(
          borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => Padding(
        padding: EdgeInsets.only(
            bottom: MediaQuery.of(ctx).viewInsets.bottom,
            left: 20, right: 20, top: 20),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          const Text('Schedule a Session',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700)),
          const SizedBox(height: 16),
          TextField(controller: titleCtrl,
              decoration: const InputDecoration(labelText: 'Session Title',
                  border: OutlineInputBorder())),
          const SizedBox(height: 12),
          TextField(controller: descCtrl, maxLines: 2,
              decoration: const InputDecoration(labelText: 'Description',
                  border: OutlineInputBorder())),
          const SizedBox(height: 12),
          TextField(controller: locCtrl,
              decoration: const InputDecoration(labelText: 'Location / Link',
                  border: OutlineInputBorder())),
          const SizedBox(height: 16),
          SizedBox(
            width: double.infinity, height: 48,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primaryColor,
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12))),
              onPressed: () {
                if (titleCtrl.text.isNotEmpty) {
                  setState(() {
                    _sessions.add(SessionModel(
                      id: DateTime.now().toString(),
                      title: titleCtrl.text,
                      description: descCtrl.text,
                      mentorName: 'You',
                      menteeName: 'Your Mentee',
                      date: 'TBD',
                      time: 'TBD',
                      location: locCtrl.text,
                      status: 'scheduled',
                    ));
                  });
                  Navigator.pop(ctx);
                }
              },
              child: const Text('Confirm',
                  style: TextStyle(color: Colors.white, fontSize: 16)),
            ),
          ),
          const SizedBox(height: 20),
        ]),
      ),
    );
  }
}
