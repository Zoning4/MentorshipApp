import 'package:flutter/material.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/presentation/intro/start_intro.dart';
import 'package:iuc_seas_mentorship/presentation/shared/activities/activities_screen.dart';
import 'dart:math';

class AdminDashboard extends StatefulWidget {
  const AdminDashboard({super.key});
  @override
  State<AdminDashboard> createState() => _AdminDashboardState();
}

class _AdminDashboardState extends State<AdminDashboard> {
  int _currentIndex = 0;
  bool _isLocked = true;
  final _passCtrl = TextEditingController();

  final List<Widget> _pages = const [
    _AdminHome(),
    _AdminPairings(),
    _AdminStudents(),
    ActivitiesScreen(isMentor: true),
  ];

  void _unlock() {
    if (_passCtrl.text == 'admin123') {
      setState(() => _isLocked = false);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Incorrect Password')));
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_isLocked) {
      return Scaffold(
        backgroundColor: Colors.white,
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(32),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Icon(Icons.lock_person_outlined, size: 64, color: AppColors.adminColor),
              const SizedBox(height: 24),
              const Text('Admin Access Required',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800)),
              const SizedBox(height: 8),
              const Text('Please enter the administrative password to continue',
                  textAlign: TextAlign.center, style: TextStyle(color: Colors.grey)),
              const SizedBox(height: 32),
              TextField(
                controller: _passCtrl,
                obscureText: true,
                decoration: InputDecoration(
                  hintText: 'Password',
                  prefixIcon: const Icon(Icons.password),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
                ),
                onSubmitted: (_) => _unlock(),
              ),
              const SizedBox(height: 24),
              SizedBox(
                width: double.infinity, height: 50,
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                      backgroundColor: AppColors.adminColor,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12))),
                  onPressed: _unlock,
                  child: const Text('Unlock Dashboard', style: TextStyle(color: Colors.white)),
                ),
              ),
              TextButton(onPressed: () => Navigator.pop(context),
                  child: const Text('Cancel', style: TextStyle(color: Colors.grey))),
            ]),
          ),
        ),
      );
    }

    return Scaffold(
      body: _pages[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        onTap: (i) => setState(() => _currentIndex = i),
        type: BottomNavigationBarType.fixed,
        selectedItemColor: AppColors.adminColor,
        unselectedItemColor: Colors.grey,
        selectedLabelStyle: const TextStyle(fontWeight: FontWeight.w600, fontSize: 11),
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.dashboard_outlined),
              activeIcon: Icon(Icons.dashboard), label: 'Overview'),
          BottomNavigationBarItem(icon: Icon(Icons.people_outline),
              activeIcon: Icon(Icons.people), label: 'Pairings'),
          BottomNavigationBarItem(icon: Icon(Icons.school_outlined),
              activeIcon: Icon(Icons.school), label: 'Students'),
          BottomNavigationBarItem(icon: Icon(Icons.event_outlined),
              activeIcon: Icon(Icons.event), label: 'Activities'),
        ],
      ),
    );
  }
}

class _AdminHome extends StatelessWidget {
  const _AdminHome();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      body: CustomScrollView(slivers: [
        SliverAppBar(
          expandedHeight: 170,
          pinned: true,
          automaticallyImplyLeading: false,
          actions: [
            IconButton(icon: const Icon(Icons.logout, color: Colors.white),
                onPressed: () => Navigator.pushAndRemoveUntil(context,
                    MaterialPageRoute(builder: (_) => const StartIntro()),
                        (_) => false)),
          ],
          flexibleSpace: FlexibleSpaceBar(
            background: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                    colors: [AppColors.adminColor, AppColors.adminColor.withOpacity(0.7)],
                    begin: Alignment.topLeft, end: Alignment.bottomRight),
              ),
              padding: const EdgeInsets.fromLTRB(20, 56, 20, 20),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.end, children: [
                const Text('Admin Dashboard',
                    style: TextStyle(color: Colors.white70, fontSize: 14)),
                const Text('IUC/SEAS Mentorship',
                    style: TextStyle(color: Colors.white, fontSize: 24,
                        fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                const Text('Academic Year 2024 – 2025',
                    style: TextStyle(color: Colors.white60, fontSize: 13)),
              ]),
            ),
          ),
        ),
        SliverToBoxAdapter(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              GridView.count(
                crossAxisCount: 2, shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisSpacing: 12, mainAxisSpacing: 12,
                childAspectRatio: 1.6,
                children: [
                  _statCard('Total Students', '248', Icons.people,
                      AppColors.primaryColor),
                  _statCard('Active Pairs', '62', Icons.link,
                      AppColors.accentColor),
                  _statCard('Mentors (L2)', '62', Icons.star,
                      AppColors.mentorColor),
                  _statCard('Mentees (L1)', '62', Icons.person,
                      AppColors.menteeColor),
                ],
              ),
              const SizedBox(height: 24),
              const Text('Students by Department',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 12),
              _deptBar('B.Tech', 98, 248, const Color(0xFF1A4B8C)),
              _deptBar('B.Eng',  82, 248, const Color(0xFF0D9488)),
              _deptBar('B.Sc',   68, 248, const Color(0xFF7B1FA2)),
              const SizedBox(height: 24),
              const Text('Recent Pairings Published',
                  style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
              const SizedBox(height: 12),
              _pairingItem('Tsamekong Lewis', 'Nguemo Alain', 'B.Tech'),
              _pairingItem('Bello Fatima',    'Simo Carole',  'B.Tech'),
              _pairingItem('Mbarga Christelle','Djiofack Paul','B.Eng'),
              const SizedBox(height: 20),
            ]),
          ),
        ),
      ]),
    );
  }

  Widget _statCard(String label, String value, IconData icon, Color color) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: Colors.white,
          borderRadius: BorderRadius.circular(14),
          boxShadow: [BoxShadow(
              color: Colors.black.withOpacity(0.06), blurRadius: 8)]),
      child: Row(children: [
        Container(
          width: 44, height: 44,
          decoration: BoxDecoration(
              color: color.withOpacity(0.1),
              borderRadius: BorderRadius.circular(10)),
          child: Icon(icon, color: color, size: 22),
        ),
        const SizedBox(width: 12),
        Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(value, style: TextStyle(fontSize: 22,
              fontWeight: FontWeight.w800, color: color)),
          Text(label, style: const TextStyle(color: Colors.grey, fontSize: 11)),
        ]),
      ]),
    );
  }

  Widget _deptBar(String dept, int count, int total, Color color) {
    final ratio = count / total;
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Text(dept, style: const TextStyle(
              fontWeight: FontWeight.w600, fontSize: 13)),
          const Spacer(),
          Text('$count students',
              style: const TextStyle(color: Colors.grey, fontSize: 12)),
        ]),
        const SizedBox(height: 6),
        ClipRRect(
          borderRadius: BorderRadius.circular(6),
          child: LinearProgressIndicator(
            value: ratio, minHeight: 8,
            backgroundColor: Colors.grey.shade200,
            valueColor: AlwaysStoppedAnimation<Color>(color),
          ),
        ),
      ]),
    );
  }

  Widget _pairingItem(String mentor, String mentee, String dept) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(color: Colors.white,
          borderRadius: BorderRadius.circular(12),
          boxShadow: [BoxShadow(
              color: Colors.black.withOpacity(0.05), blurRadius: 6)]),
      child: Row(children: [
        CircleAvatar(radius: 16,
            backgroundColor: AppColors.mentorColor.withOpacity(0.12),
            child: Text(mentor[0], style: const TextStyle(
                color: AppColors.mentorColor, fontSize: 13,
                fontWeight: FontWeight.bold))),
        const SizedBox(width: 8),
        Expanded(child: Text(mentor,
            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13))),
        const Icon(Icons.arrow_forward, size: 14, color: Colors.grey),
        const SizedBox(width: 8),
        Expanded(child: Text(mentee,
            style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13))),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
          decoration: BoxDecoration(
              color: AppColors.primaryColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(8)),
          child: Text(dept, style: const TextStyle(
              color: AppColors.primaryColor, fontSize: 10,
              fontWeight: FontWeight.w700)),
        ),
      ]),
    );
  }
}

// ── Admin Pairings Tab ───────────────────────────────────────────────────
class _AdminPairings extends StatefulWidget {
  const _AdminPairings();
  @override
  State<_AdminPairings> createState() => _AdminPairingsState();
}

class _AdminPairingsState extends State<_AdminPairings> {
  final List<Map<String, String>> _pairs = [
    {'mentor': 'Tsamekong Lewis',   'mentee': 'Nguemo Alain',    'dept': 'B.Tech', 'major': 'CSE', 'status': 'Active'},
    {'mentor': 'Bello Fatima',      'mentee': 'Simo Carole',     'dept': 'B.Tech', 'major': 'CSE', 'status': 'Active'},
    {'mentor': 'Mbarga Christelle', 'mentee': 'Djiofack Paul',   'dept': 'B.Eng',  'major': 'MECH', 'status': 'Active'},
    {'mentor': 'Nkoa Serge',        'mentee': 'Ateba Claire',    'dept': 'B.Eng',  'major': 'MECH', 'status': 'Pending'},
  ];

  final List<String> _mentorsPool = ['Vokeng Walefack', 'Kamga Rita', 'Foto Emmanuel', 'Nkoa Serge', 'Bello Fatima'];
  final List<String> _menteesPool = ['Mbassi Joseph', 'Ndom Sylvie', 'Ateba Claire', 'Djiofack Paul', 'Simo Carole'];

  void _runAutoMatch() {
    setState(() {
      final random = Random();
      _mentorsPool.shuffle();
      _menteesPool.shuffle();
      
      for(int i = 0; i < min(_mentorsPool.length, _menteesPool.length); i++) {
        _pairs.insert(0, {
          'mentor': _mentorsPool[i],
          'mentee': _menteesPool[i],
          'dept': random.nextBool() ? 'B.Tech' : 'B.Eng',
          'major': random.nextBool() ? 'CSE' : 'MECH',
          'status': 'Newly Matched'
        });
      }
    });
    ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Auto-Matching Complete! New pairs created.')));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        flexibleSpace: Container(decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
              AppColors.adminColor, AppColors.adminColor.withOpacity(0.7)]))),
        title: const Text('Mentor-Mentee Pairings',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
        actions: [
          TextButton.icon(
            onPressed: _runAutoMatch,
            icon: const Icon(Icons.shuffle, color: Colors.white, size: 18),
            label: const Text('Auto-Match', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: _pairs.length,
        itemBuilder: (ctx, i) {
          final p = _pairs[i];
          final isActive = p['status'] == 'Active' || p['status'] == 'Newly Matched';
          return Card(
            margin: const EdgeInsets.only(bottom: 12),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
            elevation: 2,
            child: Padding(
              padding: const EdgeInsets.all(14),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                    decoration: BoxDecoration(
                      color: isActive ? Colors.green.withOpacity(0.1) : Colors.orange.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Text(p['status']!,
                        style: TextStyle(color: isActive ? Colors.green : Colors.orange,
                            fontSize: 11, fontWeight: FontWeight.w600)),
                  ),
                  const Spacer(),
                  Text('${p['dept']} · ${p['major']}',
                      style: const TextStyle(color: Colors.grey, fontSize: 11, fontWeight: FontWeight.w700)),
                ]),
                const SizedBox(height: 12),
                Row(children: [
                  Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const Text('MENTOR', style: TextStyle(color: AppColors.mentorColor, fontSize: 10,
                        fontWeight: FontWeight.w700, letterSpacing: 1)),
                    const SizedBox(height: 4),
                    Text(p['mentor']!, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
                  ])),
                  const Icon(Icons.arrow_forward, color: AppColors.adminColor, size: 18),
                  Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                    const Text('MENTEE', style: TextStyle(color: AppColors.menteeColor, fontSize: 10,
                        fontWeight: FontWeight.w700, letterSpacing: 1)),
                    const SizedBox(height: 4),
                    Text(p['mentee']!, style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14), textAlign: TextAlign.end),
                  ])),
                ]),
              ]),
            ),
          );
        },
      ),
    );
  }
}

// ── Admin Students Tab ───────────────────────────────────────────────────
class _AdminStudents extends StatefulWidget {
  const _AdminStudents();
  @override
  State<_AdminStudents> createState() => _AdminStudentsState();
}

class _AdminStudentsState extends State<_AdminStudents> with SingleTickerProviderStateMixin {
  late TabController _tab;
  @override
  void initState() { super.initState(); _tab = TabController(length: 3, vsync: this); }
  @override
  void dispose() { _tab.dispose(); super.dispose(); }

  final Map<String, List<Map<String, String>>> _students = {
    'B.Tech': [
      {'name': 'Tsamekong Lewis',  'level': '2', 'role': 'Mentor', 'major': 'CSE', 'email': 't.lewis@iuc.edu.cm'},
      {'name': 'Bello Fatima',     'level': '2', 'role': 'Mentor', 'major': 'CSE', 'email': 'b.fatima@iuc.edu.cm'},
      {'name': 'Nguemo Alain',     'level': '1', 'role': 'Mentee', 'major': 'CSE', 'email': 'n.alain@iuc.edu.cm'},
    ],
    'B.Eng': [
      {'name': 'Mbarga Christelle','level': '2', 'role': 'Mentor', 'major': 'MECH', 'email': 'm.chris@iuc.edu.cm'},
      {'name': 'Djiofack Paul',    'level': '1', 'role': 'Mentee', 'major': 'MECH', 'email': 'd.paul@iuc.edu.cm'},
    ],
    'B.Sc': [
      {'name': 'Kamga Rita',       'level': '2', 'role': 'Mentor', 'major': 'EE', 'email': 'k.rita@iuc.edu.cm'},
      {'name': 'Mbassi Joseph',    'level': '1', 'role': 'Mentee', 'major': 'EE', 'email': 'm.joseph@iuc.edu.cm'},
    ],
  };

  bool _isEmailDuplicate(String email, {String? excludeEmail}) {
    for (var cycle in _students.values) {
      if (cycle.any((s) => s['email'] == email && s['email'] != excludeEmail)) return true;
    }
    return false;
  }

  void _showStudentDialog({Map<String, String>? student, String? cycle}) {
    final isEdit = student != null;
    final nameCtrl  = TextEditingController(text: isEdit ? student['name'] : '');
    final emailCtrl = TextEditingController(text: isEdit ? student['email'] : '');
    final majorCtrl = TextEditingController(text: isEdit ? student['major'] : 'CSE');
    String level    = isEdit ? student['level']! : '1';
    String role     = isEdit ? student['role']! : 'Mentee';
    String dept     = cycle ?? 'B.Tech';

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(isEdit ? 'Edit Student' : 'Add New Student'),
        content: SingleChildScrollView(
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            TextField(controller: nameCtrl, decoration: const InputDecoration(labelText: 'Full Name')),
            TextField(controller: emailCtrl, decoration: const InputDecoration(labelText: 'Email Address')),
            TextField(controller: majorCtrl, decoration: const InputDecoration(labelText: 'Major (CSE/MECH/etc.)')),
            DropdownButtonFormField<String>(
              value: level, decoration: const InputDecoration(labelText: 'Level'),
              items: ['1', '2', '3'].map((l) => DropdownMenuItem(value: l, child: Text('Level $l'))).toList(),
              onChanged: (v) => level = v!,
            ),
            DropdownButtonFormField<String>(
              value: role, decoration: const InputDecoration(labelText: 'Role'),
              items: ['Mentee', 'Mentor'].map((r) => DropdownMenuItem(value: r, child: Text(r))).toList(),
              onChanged: (v) => role = v!,
            ),
            if (!isEdit) DropdownButtonFormField<String>(
              value: dept, decoration: const InputDecoration(labelText: 'Department/Cycle'),
              items: ['B.Tech', 'B.Eng', 'B.Sc'].map((d) => DropdownMenuItem(value: d, child: Text(d))).toList(),
              onChanged: (v) => dept = v!,
            ),
          ]),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
          ElevatedButton(
            onPressed: () {
              final email = emailCtrl.text.trim();
              if (nameCtrl.text.isEmpty || email.isEmpty) return;
              
              if (_isEmailDuplicate(email, excludeEmail: isEdit ? student['email'] : null)) {
                ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Error: A student with this email already exists!'), backgroundColor: Colors.red));
                return;
              }

              setState(() {
                final newStudent = {
                  'name': nameCtrl.text.trim(),
                  'email': email,
                  'major': majorCtrl.text.trim().toUpperCase(),
                  'level': level,
                  'role': role,
                };
                if (isEdit) {
                  final list = _students[cycle]!;
                  final idx = list.indexOf(student);
                  list[idx] = newStudent;
                } else {
                  _students[dept]!.insert(0, newStudent);
                }
              });
              Navigator.pop(context);
            },
            child: Text(isEdit ? 'Save Changes' : 'Add Student'),
          ),
        ],
      ),
    );
  }

  void _deleteStudent(String cycle, Map<String, String> student) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Student?'),
        content: Text('Are you sure you want to remove ${student['name']} from the database?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
          ElevatedButton(
            style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
            onPressed: () {
              setState(() => _students[cycle]!.remove(student));
              Navigator.pop(context);
            },
            child: const Text('Delete', style: TextStyle(color: Colors.white)),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey.shade50,
      appBar: AppBar(
        automaticallyImplyLeading: false,
        flexibleSpace: Container(decoration: BoxDecoration(
            gradient: LinearGradient(colors: [
              AppColors.adminColor, AppColors.adminColor.withOpacity(0.7)]))),
        title: const Text('Students Database',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
        bottom: TabBar(controller: _tab, indicatorColor: Colors.white, labelColor: Colors.white,
          unselectedLabelColor: Colors.white54,
          tabs: const [Tab(text: 'B.Tech'), Tab(text: 'B.Eng'), Tab(text: 'B.Sc')],
        ),
      ),
      body: TabBarView(
        controller: _tab,
        children: ['B.Tech', 'B.Eng', 'B.Sc'].map((dept) {
          final list = _students[dept]!;
          return ListView.builder(
            padding: const EdgeInsets.all(16),
            itemCount: list.length,
            itemBuilder: (ctx, i) {
              final s = list[i];
              Color roleColor = s['role'] == 'Mentor' ? AppColors.mentorColor : AppColors.menteeColor;
              return Card(
                margin: const EdgeInsets.only(bottom: 10),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                elevation: 2,
                child: ListTile(
                  onTap: () => _showStudentDialog(student: s, cycle: dept),
                  leading: CircleAvatar(backgroundColor: roleColor.withOpacity(0.15),
                    child: Text(s['name']![0], style: TextStyle(color: roleColor, fontWeight: FontWeight.bold))),
                  title: Text(s['name']!, style: const TextStyle(fontWeight: FontWeight.w600)),
                  subtitle: Text('${s['major']} · ${s['email']}', style: const TextStyle(fontSize: 11)),
                  trailing: Row(mainAxisSize: MainAxisSize.min, children: [
                    Text(s['role']!, style: TextStyle(color: roleColor, fontSize: 11, fontWeight: FontWeight.w700)),
                    const SizedBox(width: 8),
                    IconButton(icon: const Icon(Icons.delete_outline, color: Colors.red, size: 20), 
                        onPressed: () => _deleteStudent(dept, s)),
                  ]),
                ),
              );
            },
          );
        }).toList(),
      ),
      floatingActionButton: FloatingActionButton(
        backgroundColor: AppColors.adminColor,
        child: const Icon(Icons.add, color: Colors.white),
        onPressed: () => _showStudentDialog(),
      ),
    );
  }
}
