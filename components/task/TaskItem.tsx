import React from 'react'
import ProgressLine from '../ui/ProgressLine';
import { Task } from '@/Data/task';
import { Pencil } from "lucide-react"
import EditTaskProgressModal from '../dashboard/EditTaskProgressModal';
import { useState } from 'react';
// import { formatDateTime } from '@/features/hooks/formatDateTime';

type TaskItemProps = {
  task: Task
  isActive: boolean
  onClick: () => void
  update: (newProgress: Task) => void
}


function TaskItem({ task, isActive, onClick, update}: TaskItemProps) {
    
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const end = new Date(task.endDate)
    end.setHours(0, 0, 0, 0)
    // const [startDate, startTime] = formatDateTime(task.startDate)
    // const [endDate, endTime] = formatDateTime(task.endDate)

    const isOverdue = end < today
    const isDone = task.progress === 100

    const [isEditOpen, setIsEditOpen] = useState(false)

  return (
    <div>
        <div onClick={onClick} 
            className={`rounded-xl shadow p-2 mx-2 cursor-pointer transition border
                ${isActive ? "bg-green-50/15 border-blue-500 ring-2 ring-blue-200/10"
                    : isDone ? "bg-green-50/10 border-green-500" 
                    : isOverdue ? "bg-red-50/10 border-red-500" 
                    : "bg-gray-50/10 border-transparent hover:bg-slate-100/5"
                }
            `}>

            {/* Top Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button
                    className="cursor-pointer w-7 h-7 flex items-center justify-center 
                                bg-amber-300 hover:bg-amber-500 
                                rounded-full transition"
                    onClick={() => setIsEditOpen(true)}
                    >
                        <Pencil size={14} />
                    </button>
                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="font-semibold">{task.title}</h3>
                            <p className="text-sm text-gray-400">{task.priority}</p>
                        </div>
                        <p className="text-sm text-gray-400">{task.note}</p>
                    </div>
                </div>

                <div className="text-right text-sm text-gray-400">
                    <div className="font-medium">{task.startTime}</div>
                    <div>{task.startDate===task.endDate ? task.endDate : `${task.startDate} - ${task.endDate}`}</div>
                </div>
            </div>

            {/* Bottom row  */}
            <ProgressLine progress={task.progress}/>

        </div>
        {isEditOpen && (
            <EditTaskProgressModal
              task={task}
              onClose={() => setIsEditOpen(false)}
              onSave={(newProgress) => {
                update(newProgress)
                setIsEditOpen(false)
              }}
            ></EditTaskProgressModal>
        )}
    </div>
  )
}

export default TaskItem