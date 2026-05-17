class PairingModel {
  final String id;
  final String mentorId;
  final String mentorName;
  final String mentorDepartment;
  final String menteeId;
  final String menteeName;
  final String menteeDepartment;
  final String academicYear;

  PairingModel({
    required this.id,
    required this.mentorId,
    required this.mentorName,
    required this.mentorDepartment,
    required this.menteeId,
    required this.menteeName,
    required this.menteeDepartment,
    required this.academicYear,
  });
}
