"use client"
import { useState } from "react"
import { Goal } from "@/Data/task"

type Props = {
  onClose: () => void
  onSave: (goal: Goal) => void
}

export default function AddGoalModal({ onClose, onSave }: Props) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Big Goal");
  const [status, setStatus] = useState("No")

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start md:items-center overflow-y-auto">

    <div className="
      w-full 
      h-screen md:h-auto
      md:max-h-[90vh]
      max-w-3xl 
      bg-white 
      rounded-none md:rounded-2xl 
      shadow-xl 
      p-6 
      overflow-y-auto
    ">

      <h2 className="text-xl font-semibold mb-6">Add Goal</h2>

      {/* CONTENT */}
      <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Title - full width */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-medium">Add Title</label>
              <input
                className="border w-full p-2 rounded-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Status</label>
              <select
                className="border w-full p-2 rounded-lg"
                value={status}
                onChange={e => setStatus(e.target.value)}
              >
                <option value="No">UnDone</option>
                <option value="Yes">Success</option>
              </select>
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
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() => {
              onSave({
                id: crypto.randomUUID(),
                title,
                type,
                status,
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
