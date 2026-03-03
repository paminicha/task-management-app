"use client"

import DashboardHeader from "@/components/ui/DashboardHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import TaskDetail from "@/components/task/TaskDetail"
import TaskItem from "@/components/task/TaskItem"
import AddTaskModal from "@/components/task/AddTaskModal"
import { useTasks } from "@/features/hooks/useTask"
import { useState } from "react"

export default function TaskPage() {

  const {
    tasks,
    selectedTask,
    setSelectedTask,
    search,
    setSearch,
    setStatus, 
    addTask,
    updateTask,
    deleteTask,
    setCategory,
    setPriority,
    setStartDate,
    setEndDate,
    setSort,
  } = useTasks()

  const [isAddOpen, setIsAddOpen] = useState(false)
  // console.log(typeof window)

  return (
    <div>
      
      <DashboardHeader title="Tasks" 
        setSearch={setSearch} search={search} setStatus={setStatus} setCategory={setCategory}
        setPriority={setPriority} setStartDate={setStartDate} setEndDate={setEndDate} setSort={setSort} 
        />

      <div className="px-3">
        <Button onClick={() => setIsAddOpen(true)} className="cursor-pointer">
          + Add Task
        </Button>
      </div>

      <Card className="m-3 p-4 h-[75vh]">
        <div className="flex h-full gap-4">

          {/* Task List */}
          <div
            className={`
              transition-all duration-300
              ${selectedTask ? "hidden lg:block lg:w-[60%]" : "w-full lg:w-[60%]"}
              overflow-y-auto space-y-3 pr-2
            `}
          >
          
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                isActive={selectedTask?.id === task.id}
                onClick={() => setSelectedTask(task)}
                update={updateTask}
              />
            ))}
          </div>

          {/* Task Detail */}
          <div
            className={`
              transition-all duration-300
              ${selectedTask ? "w-full lg:w-[40%]" : "hidden lg:block lg:w-[40%]"}
              overflow-y-auto
            `}
          >
            {selectedTask ? (
              <div className="h-full flex flex-col">
                <button
                  onClick={() => setSelectedTask(null)}
                  className="lg:hidden mb-2 text-sm text-gray-500 text-left"
                >
                  ← Back
                </button>

                <TaskDetail task={selectedTask} update={updateTask} deleteTask={deleteTask}/>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Select task to view detail
              </div>
            )}
          </div>

        </div>
      </Card>
      {isAddOpen && (
        <AddTaskModal
          onClose={() => setIsAddOpen(false)}
          onSave={(newTask) => {
            addTask(newTask)
            setIsAddOpen(false)
          }}
        />
      )}


    </div>
  )
}
