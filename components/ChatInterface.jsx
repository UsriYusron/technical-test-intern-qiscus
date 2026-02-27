'use client'

import { useState } from 'react'
import RoomHeader from './RoomHeader'
import ParticipantsList from './ParticipantsList'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

export default function ChatInterface({ data }) {
  const [messages, setMessages] = useState(data.comments)
  const [showParticipants, setShowParticipants] = useState(false)

  const handleSendMessage = (message) => {
    const newMessage = {
      id: Math.max(...messages.map(m => m.id)) + 1,
      type: 'text',
      message: message,
      sender: 'customer@mail.com'
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

        {/* Messages */}
        <MessageList 
          messages={messages}
          participants={data.room.participant}
        />

        {/* Message Input */}
        <MessageInput onSendMessage={handleSendMessage} />
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
