"use client"
import TaskItem from "../task/TaskItem"
import { Card } from "../ui/Card"
import { Task } from "@/Data/task"
import AddTaskModal from "../task/AddTaskModal"

import { useState } from "react";
import { useMemo } from "react"

type Props = {
  tasks: Task[]
  addTask: (task: Task) => void
  update: (updatedTask: Task) => void
}

export default function TodayTaskList({ tasks , addTask, update}: Props) {

  const [isAddOpen, setIsAddOpen] = useState(false)

  tasks = tasks.filter(t => {
    return t.progress !== 100
  })

  const todayTasks = useMemo(() => {
    const today = new Date()
    today.setHours(23, 59, 59, 999)

    return tasks.filter(t => {
      const start = new Date(t.startDate)
      const end = new Date(t.endDate)

      return start <= today //&& end >= today
    })
  }, [tasks])
  
  return (
    <Card className="h-100 pl-2 flex flex-col">

      <div className="flex justify-between p-2">
        <h3 className="font-semibold">Today Tasks</h3>
        <button className="w-8 h-8 rounded-full btn-primary" onClick={() => setIsAddOpen(true)}
        >+
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {todayTasks.map( task => (
          <TaskItem key={task.id}
                task={task}
                isActive={false}
                onClick={() => null}
                update={update}/>
        ))}
        
      </div>
      {isAddOpen && (
              <AddTaskModal
                onClose={() => setIsAddOpen(false)}
                onSave={(newTask) => {
                  addTask(newTask)
                  setIsAddOpen(false)
                }}
              />
            )}
    </Card>
  )
}
