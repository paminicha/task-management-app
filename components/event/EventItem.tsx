"use Client"
import React, { useState } from 'react'
import { Event } from '@/Data/event'
import { Pencil } from "lucide-react"
import EditEventModal from './EditEventModal'

interface EventItemProps {
  event: Event,
  isActive?: boolean,
  onClick?: () => void,
  update: (updatedEvent: Event) => void
}

function EventItem({event, isActive, onClick, update}: EventItemProps) {
  const startTime = new Date(event.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  const [isEditOpen, setIsEditOpen] = useState(false)
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const end = new Date(event.end)
  end.setHours(0, 0, 0, 0)

  const isPast = end < today
  
  return (
    <div>
      <div key={event.id} onClick={onClick}
        className={`rounded-xl shadow p-2 mx-2 cursor-pointer transition border
                ${isActive ? "bg-blue-50 border-blue-500 ring-2 ring-blue-200"
                  : isPast ? "bg-gray-50 border-gray-500 text-gray-300" 
                    : "bg-gray-50 border-transparent hover:bg-slate-100"
                }
            `}>
          <button
                      className="cursor-pointer w-7 h-7 flex items-center justify-center 
                                  bg-amber-300 hover:bg-amber-200 
                                  rounded-full transition"
                      onClick={() => setIsEditOpen(true)}
                      >
                          <Pencil size={14} />
                      </button>
          <h3 className="font-semibold text-gray-800">{startTime}</h3>
          <h3 className="font-semibold text-gray-800">{event.title}</h3>
          
      </div>
      {isEditOpen && (
            <EditEventModal 
            event={event}
            onClose={() => setIsEditOpen(false)}
            onSave={(newEvent) => {
              update(newEvent)
              setIsEditOpen(false)
            }}
            />
          )
        }
    </div>
  )
}


export default EventItem