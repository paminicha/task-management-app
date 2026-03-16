"use client"
import ProgressLine from "../ui/ProgressLine";
import { Task } from "@/Data/task";
import { useState } from "react";
import EditTaskModal from "./EditTaskModal";

type Props = {
  task: Task | null
  update: (updatedTask: Task) => void
  deleteTask: (id: string) => void
}

function TaskDetail({ task , update, deleteTask } :Props) {
  if (!task) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a task to see details
      </div>
    )
  }

  const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div className="h-full rounded-xl border-gray-300/50 border shadow-sm p-4 flex flex-col">

      <h2 className="text-2xl font-semibold mb-3">{task.title}</h2>

      <div className="space-y-3 text-sm flex-1 font-medium">
        <div>
          <p>Duration: {task.startDate.replaceAll("-", "/")} - {task.endDate.replaceAll("-", "/")}</p>
          <p>Time: {task.startTime} - {task.endTime}</p>
        </div>

        <p><span >Priority:</span> {task.priority}</p>
        <p><span >Type:</span> {task.category}</p>
        <p><span >Status:</span> {task.status}</p>

        <div>
          <p >Description:</p>
          <p >{task.description || "-"}</p>
        </div>

        <div>
          <p >Notes:</p>
          <p >{task.note}</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-sm font-medium mb-1">Status:</p>
          <ProgressLine progress={task.progress} />
        </div>

        <div className="flex justify-end gap-2">
          <button className="px-3 py-1.5 rounded-lg bg-amber-400 text-white hover:bg-amber-500"
            onClick={() => setIsEditOpen(true)}
          >
            Edited
          </button>
          <button className="px-3 py-1.5 rounded-lg bg-red-400 text-white hover:bg-red-500"
            onClick={() => deleteTask(task.id)} >
            Delete
          </button>
        </div>
      </div>
      {isEditOpen && (
        <EditTaskModal
          task={task}
          onClose={()=> setIsEditOpen(false)}
          onSave={(updatedTask) => {
            update(updatedTask)
            setIsEditOpen(false)
          }}
        />
      )}

    </div>
  )
}

export default TaskDetail