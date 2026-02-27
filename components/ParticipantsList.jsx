'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function ParticipantsList({ participants }) {
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

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="p-4">
      <h2 className="font-semibold text-foreground mb-4">Participants</h2>
      <div className="space-y-3">
        {participants.map((participant) => (
          <div
            key={participant.id}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition"
          >
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {getInitials(participant.name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {participant.name}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {participant.id}
              </p>
            </div>
            <span className={`text-xs px-2 py-1 rounded font-medium whitespace-nowrap ${getRoleColor(participant.role)}`}>
              {getRoleBadge(participant.role)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
