'use client'

import ChatInterface from '@/components/ChatInterface'
import data from '@/data/mockData.json'

export default function ChatPage() {
  return (
    <main className="h-screen">
      <ChatInterface data={data.results[0]} />
    </main>
  )
}
