'use client'

import { useState } from 'react'

export default function MessageBubble({ message, participant }) {
  const [showPreview, setShowPreview] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const isCurrentUser = message.sender === 'customer@mail.com'
  
  const getRoleBadge = (role) => {
    const roleMap = {
      0: 'Admin',
      1: 'Agent',
      2: 'Customer'
    }
    return roleMap[role] || 'Unknown'
  }

  const getRoleColor = (role) => {
    switch(role) {
      case 0: return 'bg-red-100 text-red-800'
      case 1: return 'bg-blue-100 text-blue-800'
      case 2: return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatFileSize = (bytes) => {
    if (!bytes) return '0 B'
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  const getFileIcon = (mimeType) => {
    if (!mimeType) return '📎'
    if (mimeType.startsWith('image/')) return '🖼️'
    if (mimeType.startsWith('video/')) return '🎥'
    if (mimeType === 'application/pdf') return '📕'
    return '📎'
  }

  const handleDownload = async (url, filename) => {
    if (!url || !filename) return
    
    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const downloadUrl = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = downloadUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(downloadUrl)
    } catch (error) {
      console.error('Download failed:', error)
      window.open(url, '_blank')
    }
  }

  const renderMessageContent = () => {
    switch (message.type) {
      case 'image':
        return (
          <div className="space-y-2">
            {message.message && (
              <p className="text-sm mb-2">{message.message}</p>
            )}
            <div className="relative group">
              <img 
                src={message.file?.thumbnail || message.file?.url} 
                alt={message.message || 'Image'}
                className="max-w-full max-h-64 rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setShowPreview(true)}
              />
              <button
                onClick={() => handleDownload(message.file?.url, message.file?.name)}
                className="absolute bottom-2 right-2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-sm"
              >
                ⬇️
              </button>
            </div>
            <div className="text-xs text-gray-500">
              {message.file?.name} • {formatFileSize(message.file?.size)}
            </div>
          </div>
        )

      case 'video':
         return (
          <div className="space-y-2">
            {message.message && (
              <p className="text-sm mb-2">{message.message}</p>
            )}
            <div className="relative group">
              {!isPlaying ? (
                <div 
                  className="relative cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src={message.file?.thumbnail || '/vercel.svg'} 
                    alt={message.message || 'Video thumbnail'}
                    className="max-w-full max-h-64 rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white text-2xl">
                      ▶
                    </div>
                  </div>
                </div>
              ) : (
                <video 
                  src={message.file?.url} 
                  controls 
                  className="max-w-full max-h-64 rounded-lg"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              )}
              {!isPlaying && (
                <button
                  onClick={() => handleDownload(message.file?.url, message.file?.name)}
                  className="absolute bottom-2 right-2 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-sm"
                >
                  ⬇️
                </button>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {message.file?.name} • {formatFileSize(message.file?.size)}
            </div>
          </div>
        )

      case 'document':
        return (
          <div className="space-y-2">
            {message.message && (
              <p className="text-sm mb-2">{message.message}</p>
            )}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 group hover:bg-gray-100 transition-colors">
              <div className="text-2xl">
                {getFileIcon(message.file?.mime_type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{message.file?.name}</p>
                <p className="text-xs text-gray-500">
                  {formatFileSize(message.file?.size)} • {message.file?.mime_type?.split('/')[1]?.toUpperCase() || 'Document'}
                </p>
              </div>
              <button
                onClick={() => handleDownload(message.file?.url, message.file?.name)}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors text-lg"
              >
                ⬇️
              </button>
            </div>
          </div>
        )

      default:
        return <p className="text-sm whitespace-pre-wrap">{message.message}</p>
    }
  }

  return (
    <>
      <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
        <div className="max-w-xs">
          {/* Nama dan role konsumen tetap dipertahankan seperti semula */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-foreground">
              {participant?.name || 'Unknown'}
            </span>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getRoleColor(participant?.role)}`}>
              {getRoleBadge(participant?.role)}
            </span>
          </div>
          
          {/* Message bubble dengan warna original */}
          <div
            className={`px-4 py-2 rounded-lg text-sm ${
              isCurrentUser
                ? 'bg-blue-100 text-black rounded-br-none'
                : 'bg-muted text-muted-foreground rounded-bl-none'
            }`}
          >
            {renderMessageContent()}
          </div>
        </div>
      </div>

      {/* Image Preview Modal - tetap sama */}
      {showPreview && message.type === 'image' && message.file?.url && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img 
              src={message.file.url} 
              alt={message.message || 'Preview'}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors w-10 h-10 flex items-center justify-center text-xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}