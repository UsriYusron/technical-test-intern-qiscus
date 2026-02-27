'use client'

import { useState } from 'react'
import RoomHeader from './RoomHeader'
import ParticipantsList from './ParticipantsList'
import MessageList from './MessageList'
import MessageInputUpgrade from './MessageInputUpgrade'

export default function ChatInterface({ data }) {
  // Safety check untuk data
  if (!data || !data.room || !data.comments) {
    return <div>Loading or no data available...</div>
  }

  const [messages, setMessages] = useState(data.comments)
  const [showParticipants, setShowParticipants] = useState(false)

  const handleSendMessage = (message, fileData = null) => {
    const newMessage = {
      id: Math.max(...messages.map(m => m.id), 0) + 1,
      sender: 'customer@mail.com'
    }

    if (fileData) {
      newMessage.type = fileData.type
      newMessage.message = message || `Mengirim ${fileData.type}: ${fileData.file.name}`
      newMessage.file = fileData.file
    } else {
      newMessage.type = 'text'
      newMessage.message = message
    }

    setMessages([...messages, newMessage])
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <RoomHeader 
          room={data.room}
          onToggleParticipants={() => setShowParticipants(!showParticipants)}
        />

        {/* Messages - Pastikan mengirim participants */}
        <MessageList 
          messages={messages}
          participants={data.room.participant} // Ini harus array
        />

        {/* Message Input */}
        <MessageInputUpgrade onSendMessage={handleSendMessage} />
      </div>

      {/* Participants Sidebar */}
      {showParticipants && (
        <div className="w-64 border-l border-border bg-muted/30">
          <ParticipantsList participants={data.room.participant} />
        </div>
      )}
    </div>
  )
}