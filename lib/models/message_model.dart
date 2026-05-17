enum MessageType { text, image, video, pdf }

class MessageModel {
  final String id;
  final String senderId;
  final String content; // text content or file path/url
  final MessageType type;
  final DateTime timestamp;
  final bool isMe;

  MessageModel({
    required this.id,
    required this.senderId,
    required this.content,
    required this.type,
    required this.timestamp,
    required this.isMe,
  });

  String get timeFormatted {
    final hour = timestamp.hour.toString().padLeft(2, '0');
    final minute = timestamp.minute.toString().padLeft(2, '0');
    return '$hour:$minute';
  }
}
