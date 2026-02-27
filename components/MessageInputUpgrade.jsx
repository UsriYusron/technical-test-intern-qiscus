"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send, Paperclip, X } from "lucide-react";

export default function MessageInputUpgrade({ onSendMessage }) {
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() || selectedFile) {
      onSendMessage(message.trim(), selectedFile);
      setMessage("");
      setSelectedFile(null);
      setFilePreview(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validasi ukuran file (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      alert("File too large. Maximum size is 10MB.");
      return;
    }

    setIsUploading(true);

    // Tentukan tipe file
    let fileType = "document";
    let thumbnail = null;

    if (file.type.startsWith("image/")) {
      fileType = "image";
      thumbnail = URL.createObjectURL(file);
      setFilePreview(thumbnail);
    } else if (file.type.startsWith("video/")) {
      fileType = "video";
      thumbnail = URL.createObjectURL(file);
      setFilePreview(thumbnail);
    }

    // Buat object file sesuai format JSON
    const fileData = {
      type: fileType,
      file: {
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        mime_type: file.type,
        ...(thumbnail && { thumbnail: thumbnail }),
      },
    };

    setSelectedFile(fileData);
    setIsUploading(false);

    // Reset file input
    e.target.value = "";
  };

  const removeSelectedFile = () => {
    if (filePreview) {
      URL.revokeObjectURL(filePreview);
    }
    setSelectedFile(null);
    setFilePreview(null);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "image":
        return "🖼️";
      case "video":
        return "🎥";
      default:
        return "📎";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-border bg-card p-4"
    >
      {/* File Preview */}
      {selectedFile && (
        <div className="mb-3 p-3 bg-muted/50 rounded-lg relative inline-block">
            <button
              type="button"
              onClick={removeSelectedFile}
              className="absolute -top-2 -right-2 z-50 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <X className="w-4 h-4" />
            </button>

          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              {selectedFile.type === "image" && filePreview ? (
                <img
                  src={filePreview}
                  alt="Preview"
                  className="h-12 w-12 object-cover rounded"
                />
              ) : selectedFile.type === "video" && filePreview ? (
                <video
                  src={filePreview}
                  className="h-12 w-12 object-cover rounded"
                  controls={false}
                />
              ) : (
                <div className="h-12 w-12 bg-muted rounded flex items-center justify-center text-2xl">
                  {getFileIcon(selectedFile.type)}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {selectedFile.file.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatFileSize(selectedFile.file.size)} • {selectedFile.type}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              selectedFile
                ? "Add a caption (optional)..."
                : "Type your message..."
            }
            className="w-full px-4 py-2 pr-10 rounded-lg border border-input bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {/* File Upload Button */}
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full transition-colors"
            disabled={isUploading}
          >
            <Paperclip className="w-4 h-4" />
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx,.txt"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        <Button
          type="submit"
          disabled={(!message.trim() && !selectedFile) || isUploading}
          size="icon"
          className="rounded-lg"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
}
