import 'dart:io';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:file_picker/file_picker.dart';
import 'package:iuc_seas_mentorship/common/app_colors.dart';
import 'package:iuc_seas_mentorship/models/message_model.dart';

class ChatScreen extends StatefulWidget {
  final String contactName;
  final String contactRole;
  final String contactDept;
  const ChatScreen({super.key, required this.contactName,
      required this.contactRole, required this.contactDept});
  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  final _msgCtrl   = TextEditingController();
  final _scrollCtrl = ScrollController();
  final ImagePicker _picker = ImagePicker();

  final List<MessageModel> _messages = [
    MessageModel(
      id: '1',
      senderId: 'contact',
      content: 'Hello! Welcome to IUC/SEAS. I am your assigned mentor. Feel free to reach out anytime.',
      type: MessageType.text,
      timestamp: DateTime.now().subtract(const Duration(minutes: 60)),
      isMe: false,
    ),
    MessageModel(
      id: '2',
      senderId: 'me',
      content: 'Thank you! I am glad to be here. I have a few questions about the first semester.',
      type: MessageType.text,
      timestamp: DateTime.now().subtract(const Duration(minutes: 58)),
      isMe: true,
    ),
    MessageModel(
      id: '3',
      senderId: 'contact',
      content: 'Of course! That is what I am here for. Ask away.',
      type: MessageType.text,
      timestamp: DateTime.now().subtract(const Duration(minutes: 57)),
      isMe: false,
    ),
  ];

  void _sendText() {
    if (_msgCtrl.text.trim().isEmpty) return;
    _addMessage(
      content: _msgCtrl.text.trim(),
      type: MessageType.text,
    );
    _msgCtrl.clear();
  }

  void _addMessage({required String content, required MessageType type}) {
    setState(() {
      _messages.add(MessageModel(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        senderId: 'me',
        content: content,
        type: type,
        timestamp: DateTime.now(),
        isMe: true,
      ));
    });
    _scrollToBottom();
  }

  void _scrollToBottom() {
    Future.delayed(const Duration(milliseconds: 100), () {
      if (_scrollCtrl.hasClients) {
        _scrollCtrl.animateTo(_scrollCtrl.position.maxScrollExtent,
            duration: const Duration(milliseconds: 300), curve: Curves.easeOut);
      }
    });
  }

  Future<void> _pickImage() async {
    final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
    if (image != null) {
      _addMessage(content: image.path, type: MessageType.image);
    }
  }

  Future<void> _pickVideo() async {
    final XFile? video = await _picker.pickVideo(source: ImageSource.gallery);
    if (video != null) {
      _addMessage(content: video.path, type: MessageType.video);
    }
  }

  Future<void> _pickPDF() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: ['pdf'],
    );
    if (result != null) {
      _addMessage(content: result.files.single.name, type: MessageType.pdf);
    }
  }

  void _showAttachmentSheet() {
    showModalBottomSheet(
      context: context,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
      ),
      builder: (context) => Container(
        padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('Send attachment',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            const SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                _attachmentOption(Icons.image, 'Image', Colors.orange, () {
                  Navigator.pop(context);
                  _pickImage();
                }),
                _attachmentOption(Icons.videocam, 'Video', Colors.red, () {
                  Navigator.pop(context);
                  _pickVideo();
                }),
                _attachmentOption(Icons.picture_as_pdf, 'PDF', Colors.blue, () {
                  Navigator.pop(context);
                  _pickPDF();
                }),
              ],
            ),
            const SizedBox(height: 16),
          ],
        ),
      ),
    );
  }

  Widget _attachmentOption(IconData icon, String label, Color color, VoidCallback onTap) {
    return GestureDetector(
      onTap: onTap,
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: color.withOpacity(0.1),
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: color, size: 28),
          ),
          const SizedBox(height: 8),
          Text(label, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w500)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        flexibleSpace: Container(
            decoration: const BoxDecoration(gradient: AppColors.primaryGradient)),
        leading: IconButton(
            icon: const Icon(Icons.arrow_back, color: Colors.white),
            onPressed: () => Navigator.pop(context)),
        title: Row(children: [
          CircleAvatar(
            radius: 18,
            backgroundColor: Colors.white24,
            child: Text(widget.contactName[0],
                style: const TextStyle(color: Colors.white,
                    fontWeight: FontWeight.bold)),
          ),
          const SizedBox(width: 10),
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(widget.contactName,
                style: const TextStyle(color: Colors.white,
                    fontSize: 15, fontWeight: FontWeight.w700)),
            Text('${widget.contactRole} · ${widget.contactDept}',
                style: const TextStyle(color: Colors.white70, fontSize: 11)),
          ]),
        ]),
        actions: [
          IconButton(icon: const Icon(Icons.videocam_outlined, color: Colors.white),
              onPressed: () {}),
          IconButton(icon: const Icon(Icons.call_outlined, color: Colors.white),
              onPressed: () {}),
        ],
      ),
      body: Column(children: [
        Expanded(
          child: ListView.builder(
            controller: _scrollCtrl,
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
            itemCount: _messages.length,
            itemBuilder: (context, i) {
              final msg  = _messages[i];
              return _buildMessageBubble(msg);
            },
          ),
        ),
        // Input bar
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            color: Colors.white,
            boxShadow: [BoxShadow(color: Colors.black12, blurRadius: 8)],
          ),
          child: Row(children: [
            GestureDetector(
              onTap: _showAttachmentSheet,
              child: Container(
                width: 40, height: 40,
                decoration: BoxDecoration(
                  color: Colors.grey.shade100,
                  shape: BoxShape.circle,
                ),
                child: const Icon(Icons.add, color: AppColors.primaryColor),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: TextField(
                controller: _msgCtrl,
                decoration: InputDecoration(
                  hintText: 'Type a message...',
                  hintStyle: const TextStyle(color: Colors.grey),
                  filled: true,
                  fillColor: Colors.grey.shade100,
                  contentPadding: const EdgeInsets.symmetric(
                      horizontal: 16, vertical: 10),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(24),
                    borderSide: BorderSide.none,
                  ),
                ),
                onSubmitted: (_) => _sendText(),
              ),
            ),
            const SizedBox(width: 8),
            GestureDetector(
              onTap: _sendText,
              child: Container(
                width: 44, height: 44,
                decoration: const BoxDecoration(
                    gradient: AppColors.primaryGradient,
                    shape: BoxShape.circle),
                child: const Icon(Icons.send_rounded,
                    color: Colors.white, size: 20),
              ),
            ),
          ]),
        ),
      ]),
    );
  }

  Widget _buildMessageBubble(MessageModel msg) {
    final isMe = msg.isMe;
    return Align(
      alignment: isMe ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(4),
        constraints: BoxConstraints(
            maxWidth: MediaQuery.of(context).size.width * 0.72),
        decoration: BoxDecoration(
          gradient: isMe ? const LinearGradient(
              colors: [AppColors.primaryColor, AppColors.accentColor],
              begin: Alignment.topLeft, end: Alignment.bottomRight)
              : null,
          color: isMe ? null : Colors.grey.shade100,
          borderRadius: BorderRadius.only(
            topLeft:     const Radius.circular(16),
            topRight:    const Radius.circular(16),
            bottomLeft:  Radius.circular(isMe ? 16 : 4),
            bottomRight: Radius.circular(isMe ? 4  : 16),
          ),
        ),
        child: Column(
          crossAxisAlignment: isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
          children: [
            _buildMessageContent(msg),
            Padding(
              padding: const EdgeInsets.fromLTRB(10, 2, 10, 6),
              child: Text(msg.timeFormatted,
                  style: TextStyle(
                      color: isMe ? Colors.white60 : Colors.grey,
                      fontSize: 10)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildMessageContent(MessageModel msg) {
    final isMe = msg.isMe;
    switch (msg.type) {
      case MessageType.text:
        return Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          child: Text(msg.content,
              style: TextStyle(
                  color: isMe ? Colors.white : Colors.black87,
                  fontSize: 14)),
        );
      case MessageType.image:
        return ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: msg.content.startsWith('/') 
            ? Image.file(File(msg.content), fit: BoxFit.cover)
            : Image.network(msg.content, fit: BoxFit.cover),
        );
      case MessageType.video:
        return Container(
          width: 200, height: 120,
          decoration: BoxDecoration(
            color: Colors.black12,
            borderRadius: BorderRadius.circular(12),
          ),
          child: const Center(
            child: Icon(Icons.play_circle_fill, color: Colors.white, size: 48),
          ),
        );
      case MessageType.pdf:
        return Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
          decoration: BoxDecoration(
            color: isMe ? Colors.white10 : Colors.black12,
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.picture_as_pdf, color: Colors.red, size: 32),
              const SizedBox(width: 10),
              Flexible(
                child: Text(
                  msg.content.split('/').last,
                  style: TextStyle(
                    color: isMe ? Colors.white : Colors.black87,
                    fontWeight: FontWeight.w600,
                    fontSize: 13,
                  ),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
        );
    }
  }
}
