import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/shared/chat/chat_screen.dart';

class MenteeSearch extends StatefulWidget {
  const MenteeSearch({super.key});
  @override
  State<MenteeSearch> createState() => _MenteeSearchState();
}

class _MenteeSearchState extends State<MenteeSearch> {
  String _query = '';
  String _dept  = 'All';

  final List<Map<String, String>> _mentors = [
    {'name': 'Tsamekong Lewis',  'dept': 'B.Tech', 'level': '2', 'email': 't.lewis@iuc.edu.cm',   'status': 'Online'},
    {'name': 'Bello Fatima',     'dept': 'B.Tech', 'level': '2', 'email': 'b.fatima@iuc.edu.cm',   'status': 'Offline'},
    {'name': 'Mbarga Christelle','dept': 'B.Eng',  'level': '2', 'email': 'm.chris@iuc.edu.cm',    'status': 'Online'},
    {'name': 'Nkoa Serge',       'dept': 'B.Eng',  'level': '2', 'email': 'n.serge@iuc.edu.cm',    'status': 'Offline'},
    {'name': 'Kamga Rita',       'dept': 'B.Sc',   'level': '2', 'email': 'k.rita@iuc.edu.cm',     'status': 'Online'},
    {'name': 'Foto Emmanuel',    'dept': 'B.Sc',   'level': '2', 'email': 'f.emmanuel@iuc.edu.cm', 'status': 'Offline'},
  ];

  List<Map<String, String>> get _filtered => _mentors.where((m) {
    final matchQuery = m['name']!.toLowerCase().contains(_query.toLowerCase()) ||
        m['email']!.toLowerCase().contains(_query.toLowerCase());
    final matchDept  = _dept == 'All' || m['dept'] == _dept;
    return matchQuery && matchDept;
  }).toList();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        flexibleSpace: Container(
            decoration: const BoxDecoration(gradient: AppColors.primaryGradient)),
        title: const Text('Find Your Mentor',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
      ),
      body: Column(children: [
        // Search bar
        Container(
          color: Colors.white,
          padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
          child: TextField(
            onChanged: (v) => setState(() => _query = v),
            decoration: InputDecoration(
              hintText: 'Search by name or email...',
              prefixIcon: const Icon(Icons.search, color: AppColors.greySHADE500),
              filled: true,
              fillColor: Colors.grey.shade100,
              border: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(30),
                  borderSide: BorderSide.none),
              contentPadding: const EdgeInsets.symmetric(vertical: 0),
            ),
          ),
        ),
        // Department filter
        Container(
          color: Colors.white,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: ['All', 'B.Tech', 'B.Eng', 'B.Sc']
                .map((d) => _filterChip(d)).toList()),
          ),
        ),
        const Divider(height: 1),
        // Results
        Expanded(
          child: _filtered.isEmpty
              ? Center(child: Column(
                  mainAxisAlignment: MainAxisAlignment.center, children: [
                  const Icon(Icons.person_search_outlined,
                      size: 60, color: Colors.grey),
                  const SizedBox(height: 12),
                  Text('No mentors found for "$_query"',
                      style: const TextStyle(color: Colors.grey)),
                ]))
              : ListView.builder(
                  padding: const EdgeInsets.all(16),
                  itemCount: _filtered.length,
                  itemBuilder: (ctx, i) => _mentorCard(_filtered[i])),
        ),
      ]),
    );
  }

  Widget _filterChip(String dept) {
    final selected = _dept == dept;
    return GestureDetector(
      onTap: () => setState(() => _dept = dept),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        margin: const EdgeInsets.only(right: 8),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 7),
        decoration: BoxDecoration(
          gradient: selected ? const LinearGradient(
              colors: [AppColors.primaryColor, AppColors.accentColor]) : null,
          color: selected ? null : Colors.grey.shade100,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Text(dept,
            style: TextStyle(
                color: selected ? Colors.white : Colors.grey.shade600,
                fontWeight: FontWeight.w600, fontSize: 13)),
      ),
    );
  }

  Widget _mentorCard(Map<String, String> m) {
    final isOnline = m['status'] == 'Online';
    return Card(
      margin: const EdgeInsets.only(bottom: 12),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
      elevation: 2,
      child: Padding(
        padding: const EdgeInsets.all(14),
        child: Row(children: [
          Stack(children: [
            CircleAvatar(
              radius: 26,
              backgroundColor: AppColors.mentorColor.withOpacity(0.15),
              child: Text(m['name']![0],
                  style: const TextStyle(color: AppColors.mentorColor,
                      fontSize: 20, fontWeight: FontWeight.bold)),
            ),
            Positioned(
              right: 0, bottom: 0,
              child: Container(
                width: 12, height: 12,
                decoration: BoxDecoration(
                  color: isOnline ? Colors.green : Colors.grey,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white, width: 2),
                ),
              ),
            ),
          ]),
          const SizedBox(width: 14),
          Expanded(child: Column(
              crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(m['name']!,
                style: const TextStyle(fontSize: 15,
                    fontWeight: FontWeight.w700)),
            const SizedBox(height: 3),
            Text('${m['dept']} · Level ${m['level']} Mentor',
                style: const TextStyle(color: AppColors.primaryColor,
                    fontSize: 12, fontWeight: FontWeight.w500)),
            const SizedBox(height: 2),
            Text(m['email']!,
                style: const TextStyle(color: Colors.grey, fontSize: 11)),
          ])),
          GestureDetector(
            onTap: () => Navigator.push(context, MaterialPageRoute(
                builder: (_) => ChatScreen(
                    contactName: m['name']!,
                    contactRole: 'Mentor',
                    contactDept: '${m['dept']} · Level ${m['level']}'))),
            child: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: AppColors.menteeColor.withOpacity(0.1),
                shape: BoxShape.circle,
              ),
              child: const Icon(Icons.chat_bubble_outline,
                  color: AppColors.menteeColor, size: 20),
            ),
          ),
        ]),
      ),
    );
  }
}
