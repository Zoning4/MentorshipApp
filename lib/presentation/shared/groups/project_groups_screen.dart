import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/models/project_group_model.dart';

class ProjectGroupsScreen extends StatefulWidget {
  final bool isMentor;
  const ProjectGroupsScreen({super.key, required this.isMentor});

  @override
  State<ProjectGroupsScreen> createState() => _ProjectGroupsScreenState();
}

class _ProjectGroupsScreenState extends State<ProjectGroupsScreen> {
  final List<ProjectGroupModel> _groups = [
    ProjectGroupModel(
      id: '1',
      name: 'AI Mentorship App',
      description: 'Developing a cross-platform app for SEAS students.',
      memberNames: ['Nguemo Alain', 'Tsamekong Lewis', 'Bello Fatima'],
      major: 'CSE',
      cycle: 'B.Tech',
      createdAt: DateTime.now().subtract(const Duration(days: 5)),
    ),
    ProjectGroupModel(
      id: '2',
      name: 'Eco-Friendly Engine Design',
      description: 'Researching sustainable materials for mechanical components.',
      memberNames: ['Mbarga Christelle', 'Djiofack Paul'],
      major: 'MECH',
      cycle: 'B.Eng',
      createdAt: DateTime.now().subtract(const Duration(days: 2)),
    ),
  ];

  void _createNewGroup() {
    final nameCtrl = TextEditingController();
    final descCtrl = TextEditingController();

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Create Project Group'),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: nameCtrl, decoration: const InputDecoration(labelText: 'Project Name')),
            TextField(controller: descCtrl, decoration: const InputDecoration(labelText: 'Description')),
          ],
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
          ElevatedButton(
            onPressed: () {
              if (nameCtrl.text.isNotEmpty) {
                setState(() {
                  _groups.insert(0, ProjectGroupModel(
                    id: DateTime.now().toString(),
                    name: nameCtrl.text,
                    description: descCtrl.text,
                    memberNames: ['Me (You)'],
                    major: 'CSE',
                    cycle: 'B.Tech',
                    createdAt: DateTime.now(),
                  ));
                });
                Navigator.pop(context);
              }
            },
            child: const Text('Create'),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final themeColor = widget.isMentor ? AppColors.mentorColor : AppColors.menteeColor;

    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        flexibleSpace: Container(decoration: const BoxDecoration(gradient: AppColors.primaryGradient)),
        title: const Text('Project Groups', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
        leading: IconButton(icon: const Icon(Icons.arrow_back, color: Colors.white), onPressed: () => Navigator.pop(context)),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _groups.length,
        itemBuilder: (context, i) {
          final g = _groups[i];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(color: themeColor.withOpacity(0.1), borderRadius: BorderRadius.circular(20)),
                        child: Text(g.major, style: TextStyle(color: themeColor, fontSize: 11, fontWeight: FontWeight.bold)),
                      ),
                      const Spacer(),
                      Text('${g.memberNames.length} members', style: const TextStyle(color: Colors.grey, fontSize: 12)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  Text(g.name, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 6),
                  Text(g.description, style: TextStyle(color: Colors.grey.shade700, fontSize: 13)),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    children: g.memberNames.map((m) => Chip(
                      label: Text(m, style: const TextStyle(fontSize: 11)),
                      backgroundColor: Colors.grey.shade100,
                      padding: EdgeInsets.zero,
                    )).toList(),
                  ),
                  const SizedBox(height: 12),
                  SizedBox(
                    width: double.infinity,
                    child: OutlinedButton(
                      style: OutlinedButton.styleFrom(
                        side: BorderSide(color: themeColor),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                      ),
                      onPressed: () {},
                      child: Text('Join Discussion', style: TextStyle(color: themeColor)),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton.extended(
        backgroundColor: themeColor,
        icon: const Icon(Icons.add, color: Colors.white),
        label: const Text('Create Group', style: TextStyle(color: Colors.white)),
        onPressed: _createNewGroup,
      ),
    );
  }
}
