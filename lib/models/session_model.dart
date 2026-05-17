class SessionModel {
  final String id;
  final String title;
  final String description;
  final String mentorName;
  final String menteeName;
  final String date;
  final String time;
  final String location;
  final String status; // scheduled | completed | cancelled

  SessionModel({
    required this.id,
    required this.title,
    required this.description,
    required this.mentorName,
    required this.menteeName,
    required this.date,
    required this.time,
    required this.location,
    required this.status,
  });
}
