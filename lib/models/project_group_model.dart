class ProjectGroupModel {
  final String id;
  final String name;
  final String description;
  final List<String> memberNames;
  final String major;
  final String cycle;
  final DateTime createdAt;

  ProjectGroupModel({
    required this.id,
    required this.name,
    required this.description,
    required this.memberNames,
    required this.major,
    required this.cycle,
    required this.createdAt,
  });
}
