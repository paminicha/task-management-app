import React from 'react'
import { Card } from "../ui/Card"
import EventItem from '../event/EventItem'
import { Event } from '@/Data/event'

interface EventCardProps {
  title: string,
  events: Event[],
  update: (updateEvent: Event) => void,
}

function EventCard({title, events, update}: EventCardProps) {
  return (
    <Card className="lg:h-44 flex flex-col">
        <h3 className="pl-2">{title}</h3>
        <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            {events.map((event, index) => (
              <EventItem 
                key={event.id} 
                event={event} 
                isActive={false}
                onClick={() => null}
                update={update} 
              />
            ))}
        </div>
      
    </Card>
  )
}

export default EventCard