'use client'

import ChatInterface from '../../../components/ChatInterfaceUpgrade'
import data from '@/data/payload.json'

export default function ChatPage() {
  return (
    <main className="h-screen">
      <ChatInterface data={data.results[0]} />
    </main>
  )
}
