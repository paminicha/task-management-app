"use client"
import { useState } from "react"
import { Event } from "@/Data/event"
import { TaskStatus } from "@/Data/task"
import { TaskPriority } from "@/Data/task"

type Props = {
  event: Event
  onClose: () => void
  onSave: (event: Event) => void
}

export default function EditEventModal({ event, onClose, onSave }: Props) {
  const [title, setTitle] = useState(event.title);
  const [startDate, setStartDate] = useState(event.start);
  const [endDate, setEndDate] = useState(event.end);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start md:items-center overflow-y-auto">

    <div className="w-full h-screen md:h-auto md:max-h-[90vh] max-w-3xl 
      rounded-none md:rounded-2xl bg-(--color-bg) shadow-xl p-6 overflow-y-auto ">

      <h2 className="text-xl font-semibold mb-6">Edit Event</h2>

      {/* CONTENT */}
      <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title - full width */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-medium">Task Title</label>
              <input
                className="border w-full p-2 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Start Date */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="date"
                className="border w-full p-2 rounded-lg"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            {/* End Date */}
            <div className="space-y-1">
              <label className="text-sm font-medium">End Date</label>
              <input
                type="date"
                className="border w-full p-2 rounded-lg"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            

          </div>

          {/* BUTTONS */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              className="px-4 py-2 text-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
        
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            onClick={() => {
              onSave({
                ...event,
                title,
                start: startDate,
                end: endDate,
              })
            }}
          >
            Save
          </button>
          </div>

        </div>
      </div>
    </div>
  )
}
