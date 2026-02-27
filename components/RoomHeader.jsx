'use client'

import Image from 'next/image'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function RoomHeader({ room, onToggleParticipants }) {
  return (
    <div className="border-b border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-lg overflow-hidden">
            <Image
              src={room.image_url}
              alt={room.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">{room.name}</h1>
            <p className="text-sm text-muted-foreground">ID: {room.id}</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleParticipants}
          title="Toggle participants"
        >
          <Users className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
}
