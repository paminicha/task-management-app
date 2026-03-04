"use client"

import DashboardHeader from "@/components/ui/DashboardHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import EventItem_date from "@/components/event/EventItem_date"
import AddEventModal from "@/components/event/AddEventModal"
import { useState, useMemo } from "react"
import { useEvent } from "@/features/hooks/useEvent"
import { useDashboardFilter } from "@/features/hooks/useDashboardFilter"
import { selectEvents } from "@/features/hooks/eventSelector"

export default function eventPage() {

  const event = useEvent()
  const filter = useDashboardFilter()
  
  // const sortedevents = selectevents(event.events, filter)
  // 🧠 selector layer
  const sortedEvents = useMemo(() => {
    return selectEvents(event.events, filter)
  }, [event.events, filter])

  const [isAddOpen, setIsAddOpen] = useState(false)
  // console.log(typeof window)

  return (
    <div className="p-6 space-y-4">
      
      <DashboardHeader
              title="Events"
              search={filter.search}
              setSearch={filter.setSearch}
              setStatus={filter.setStatus}
              setPriority={filter.setPriority}
              setCategory={filter.setCategory}
              setStartDate={filter.setStartDate}
              setEndDate={filter.setEndDate}
              setSort={filter.setSort}
            />

      <div className="px-3">
        <Button onClick={() => setIsAddOpen(true)} className="cursor-pointer">
          + Add Event
        </Button>
      </div>

      <Card className="p-4 h-[75vh]">
        <div className="flex h-full gap-4">

          {/* Event List */}
          <div
            className={`
              transition-all duration-300 w-full
              overflow-y-auto space-y-3 pr-2
            `}
          >
          
            {sortedEvents.map(e => (
              <EventItem_date
                event={e}
                key={Number(e.id)}
                isActive={event.selectedEvent?.id === e.id}
                onClick={() => event.setSelectedEvent(e)}
                update={event.updateEvent}
              />
            ))}
          </div>

        </div>
      </Card>
      {isAddOpen && (
        <AddEventModal
          onClose={() => setIsAddOpen(false)}
          onSave={(newEvent) => {
            event.addEvent(newEvent)
            setIsAddOpen(false)
          }}
        />
      )}

    </div>
  )
}
