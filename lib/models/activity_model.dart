class ActivityModel {
  final String id;
  final String title;
  final String description;
  final String date;
  final String department; // B.Tech | B.Eng | B.Sc | All
  final String postedBy;

  ActivityModel({
    required this.id,
    required this.title,
    required this.description,
    required this.date,
    required this.department,
    required this.postedBy,
  });
}
