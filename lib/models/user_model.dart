class UserModel {
  final String id;
  final String fullName;
  final String email;
  final int level;           // 1, 2, or 3
  final String department;   // Cycle: B.Tech | B.Eng | B.Sc
  final String major;        // Class: CSE | MECH | EE | etc.
  final String role;         // mentee | mentor | admin

  UserModel({
    required this.id,
    required this.fullName,
    required this.email,
    required this.level,
    required this.department,
    required this.major,
    required this.role,
  });

  String get initials {
    final parts = fullName.trim().split(' ');
    if (parts.length >= 2) return '${parts[0][0]}${parts[1][0]}'.toUpperCase();
    return fullName[0].toUpperCase();
  }

  String get levelLabel => 'Level $level';
  String get roleLabel  => role[0].toUpperCase() + role.substring(1);
}
