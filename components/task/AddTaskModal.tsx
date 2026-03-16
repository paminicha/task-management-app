"use client"
import { useState } from "react"
import { Task } from "@/Data/task"
import { TaskStatus } from "@/Data/task"
import { TaskPriority } from "@/Data/task"
import dayjs from "dayjs"

type Props = {
  onClose: () => void
  onSave: (task: Task) => void
}

export default function AddTaskModal({ onClose, onSave }: Props) {
  const [title, setTitle] = useState("");
  const [description1, setDescription] = useState("");
  // const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("low");
  const [progress, setProgress] = useState("0")
  const [category, setCategory] = useState("Work");
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [startTime, setStartTime] = useState("0.00");
  const [endTime, setEndTime] = useState("23.59");

  const numericProgress = Number(progress) || 0

  let status: TaskStatus
  if (numericProgress === 100) {
    status = "Done"
  } else if (numericProgress === 0) {
    status = "Todo"
  } else {
    status = "Doing"
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start md:items-center overflow-y-auto">

    <div className="w-full h-screen md:h-auto md:max-h-[90vh] max-w-3xl 
      rounded-none md:rounded-2xl bg-(--color-bg) shadow-xl p-6 overflow-y-auto ">

      <h2 className="text-xl font-semibold mb-6">Edit Task</h2>

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

            {/* Description */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-medium">Description</label>
              <input
                className="border w-full p-2 rounded-lg"
                value={description1}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Priority */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Priority</label>
              <select
                className="border w-full p-2 rounded-lg"
                value={priority}
                onChange={e => setPriority(e.target.value as TaskPriority)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* Status */}
            {/* <div className="space-y-1">
              <label className="text-sm font-medium">Status</label>
              <select
                className="border w-full p-2 rounded-lg"
                value={status}
                onChange={e => setStatus(e.target.value as TaskStatus)}
              >
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div> */}

            {/* Category */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Category</label>
              <select
                className="border w-full p-2 rounded-lg"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="Work">Works</option>
                <option value="Family">Family</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

            {/* Progress */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Progress (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                className="border w-full p-2 rounded-lg"
                value={progress}
                onChange={(e) => {
                  const value = Math.min(100, Math.max(0, Number(e.target.value)))
                  setProgress(value.toString())
                }}
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

            {/* Start Time */}
            <div className="space-y-1">
              <label className="text-sm font-medium">Start Time</label>
              <input
                type="time"
                className="border w-full p-2 rounded-lg"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>

            {/* End Time */}
            <div className="space-y-1">
              <label className="text-sm font-medium">End Time</label>
              <input
                type="time"
                className="border w-full p-2 rounded-lg"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>

            {/* Note - full width */}
            <div className="md:col-span-2 space-y-1">
              <label className="text-sm font-medium">Note</label>
              <textarea
                rows={4}
                className="border w-full p-2 rounded-lg resize-none"
                value={note}
                onChange={(e) => setNote(e.target.value)}
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
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              onSave({
                id: crypto.randomUUID(),
                title,
                description: description1,
                status,
                priority: priority,
                progress: Number(progress) || 0,
                startDate,
                endDate,
                startTime,
                endTime,
                note,
                category,
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
