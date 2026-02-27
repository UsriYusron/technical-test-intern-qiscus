'use client'

import { useEffect, useRef } from 'react'
import MessageBubble from './MessageBubble'

export default function MessageList({ messages, participants }) {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getParticipantInfo = (email) => {
    return participants.find(p => p.id === email)
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
      {messages.map((message) => {
        const participant = getParticipantInfo(message.sender)
        return (
          <MessageBubble
            key={message.id}
            message={message}
            participant={participant}
          />
        )
      })}
      <div ref={messagesEndRef} />
    </div>
  )
}
