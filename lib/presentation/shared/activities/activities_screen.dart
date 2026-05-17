import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/models/activity_model.dart';

class ActivitiesScreen extends StatefulWidget {
  final bool isMentor;
  const ActivitiesScreen({super.key, required this.isMentor});
  @override
  State<ActivitiesScreen> createState() => _ActivitiesScreenState();
}

class _ActivitiesScreenState extends State<ActivitiesScreen> {
  String _selectedDept = 'All';
  final List<ActivityModel> _activities = [
    ActivityModel(id: '1', title: 'New Student Orientation',
        description: 'All Level 1 students must attend the official IUC orientation day. Mentors are expected to accompany their mentees.',
        date: '10 May 2025', department: 'All', postedBy: 'Admin'),
    ActivityModel(id: '2', title: 'B.Tech Cloud Computing Workshop',
        description: 'Hands-on workshop on serverless computing and BaaS platforms. Open to all B.Tech students.',
        date: '14 May 2025', department: 'B.Tech', postedBy: 'Admin'),
    ActivityModel(id: '3', title: 'B.Eng Project Fair',
        description: 'Final year B.Eng students present their projects. Mentors and mentees from B.Eng are encouraged to attend.',
        date: '20 May 2025', department: 'B.Eng', postedBy: 'Admin'),
    ActivityModel(id: '4', title: 'Mentor-Mentee Social Mixer',
        description: 'An informal gathering for all mentor-mentee pairs to connect and bond. Refreshments provided.',
        date: '25 May 2025', department: 'All', postedBy: 'Admin'),
    ActivityModel(id: '5', title: 'B.Sc Research Seminar',
        description: 'Research methodology seminar for all B.Sc students. Attendance is compulsory.',
        date: '28 May 2025', department: 'B.Sc', postedBy: 'Admin'),
  ];

  List<ActivityModel> get _filtered => _activities.where((a) =>
      _selectedDept == 'All' || a.department == _selectedDept ||
      a.department == 'All').toList();

  Color _deptColor(String dept) {
    switch (dept) {
      case 'B.Tech': return const Color(0xFF1A4B8C);
      case 'B.Eng':  return const Color(0xFF0D9488);
      case 'B.Sc':   return const Color(0xFF7B1FA2);
      default:       return Colors.orange.shade700;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Container(
            decoration: const BoxDecoration(gradient: AppColors.primaryGradient)),
        leading: IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white),
            onPressed: () => Navigator.pop(context)),
        title: const Text('School Activities',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
      ),
      body: Column(children: [
        // Department filter
        Container(
          color: Colors.grey.shade50,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: ['All', 'B.Tech', 'B.Eng', 'B.Sc']
                .map((d) => _filterChip(d)).toList()),
          ),
        ),
        // List
        Expanded(
          child: _filtered.isEmpty
              ? const Center(child: Text('No activities for this department'))
              : ListView.builder(
                  padding: const EdgeInsets.all(16),
                  itemCount: _filtered.length,
                  itemBuilder: (ctx, i) => _activityCard(_filtered[i]),
                ),
        ),
      ]),
      floatingActionButton: widget.isMentor
          ? FloatingActionButton.extended(
              backgroundColor: AppColors.primaryColor,
              icon: const Icon(Icons.add, color: Colors.white),
              label: const Text('Post Activity',
                  style: TextStyle(color: Colors.white)),
              onPressed: () {},
            )
          : null,
    );
  }

  Widget _filterChip(String dept) {
    final selected = _selectedDept == dept;
    return GestureDetector(
      onTap: () => setState(() => _selectedDept = dept),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        margin: const EdgeInsets.only(right: 8),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        decoration: BoxDecoration(
          gradient: selected ? const LinearGradient(
              colors: [AppColors.primaryColor, AppColors.accentColor]) : null,
          color: selected ? null : Colors.white,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(
              color: selected ? Colors.transparent : Colors.grey.shade300),
          boxShadow: selected
              ? [const BoxShadow(color: Colors.black12, blurRadius: 4)]
              : [],
        ),
        child: Text(dept,
            style: TextStyle(
                color: selected ? Colors.white : Colors.grey.shade600,
                fontWeight: FontWeight.w600, fontSize: 13)),
      ),
    );
  }

  Widget _activityCard(ActivityModel a) {
    final color = _deptColor(a.department);
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
                color: color.withOpacity(0.1),
                borderRadius: BorderRadius.circular(20),
              ),
              child: Text(a.department,
                  style: TextStyle(color: color, fontSize: 11,
                      fontWeight: FontWeight.w700)),
            ),
            const Spacer(),
            const Icon(Icons.calendar_today_outlined,
                size: 13, color: Colors.grey),
            const SizedBox(width: 4),
            Text(a.date,
                style: const TextStyle(color: Colors.grey, fontSize: 12)),
          ]),
          const SizedBox(height: 10),
          Text(a.title,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          Text(a.description,
              style: const TextStyle(color: Colors.black54, fontSize: 13,
                  height: 1.4)),
          const SizedBox(height: 10),
          Row(children: [
            const Icon(Icons.person_outline, size: 13, color: Colors.grey),
            const SizedBox(width: 4),
            Text('Posted by ${a.postedBy}',
                style: const TextStyle(color: Colors.grey, fontSize: 11)),
          ]),
        ]),
      ),
    );
  }
}
