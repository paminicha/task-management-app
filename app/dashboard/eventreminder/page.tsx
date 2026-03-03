"use client"

import DashboardHeader from "@/components/ui/DashboardHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import TaskDetail from "@/components/task/TaskDetail"
import EventItem_date from "@/components/reminder/EventItem_date"
import AddEventModal from "@/components/reminder/AddEventModal"
import { useTasks } from "@/features/hooks/useTask"
import { useState } from "react"
import { useEvent } from "@/features/hooks/useEvent"

export default function TaskPage() {

  const {
    events,
    todayEvents,
    addEvent,
    updateEvent,
    deleteEvent,
    selectedEvent,
    setSelectedEvent
  } = useEvent()

  const [isAddOpen, setIsAddOpen] = useState(false)
  // console.log(typeof window)

  return (
    <div>
      
      {/* <DashboardHeader title="Events" 
        setSearch={setSearch} search={search} setStartDate={setStartDate} setEndDate={setEndDate} setSort={setSort} 
        /> */}
        <h1>Events</h1>

      <div className="px-3">
        <Button onClick={() => setIsAddOpen(true)} className="cursor-pointer">
          + Add Event
        </Button>
      </div>

      <Card className="m-3 p-4 h-[75vh]">
        <div className="flex h-full gap-4">

          {/* Event List */}
          <div
            className={`
              transition-all duration-300
              ${selectedEvent ? "hidden lg:block lg:w-[60%]" : "w-full lg:w-[60%]"}
              overflow-y-auto space-y-3 pr-2
            `}
          >
          
            {events.map(event => (
              <EventItem_date
                event={event}
                key={Number(event.id)}
                isActive={selectedEvent?.id === event.id}
                onClick={() => setSelectedEvent(event)}
                update={updateEvent}
              />
            ))}
          </div>

        </div>
      </Card>
      {isAddOpen && (
        <AddEventModal
          onClose={() => setIsAddOpen(false)}
          onSave={(newEvent) => {
            addEvent(newEvent)
            setIsAddOpen(false)
          }}
        />
      )}

    </div>
  )
}
