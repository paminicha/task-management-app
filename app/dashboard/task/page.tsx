"use client"
import { useState, useMemo } from "react"
import DashboardHeader from "@/components/ui/DashboardHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
// import TaskList from "./components/TaskList"
// import TaskDetailPanel from "./components/TaskDetailPanel"
import AddTaskModal from "@/components/task/AddTaskModal"

import { useTasks } from "@/features/hooks/useTask"
import { useDashboardFilter } from "@/features/hooks/useDashboardFilter"
import { selectTasks } from "@/features/hooks/taskSelector"

import TaskDetail from "@/components/task/TaskDetail"
import TaskItem from "@/components/task/TaskItem"

export default function TaskPage() {

  const task = useTasks()
  const filter = useDashboardFilter()

  // const sortedTasks = selectTasks(task.tasks, filter)
  // selector layer
  const sortedTasks = useMemo(() => {
    return selectTasks(task.tasks, filter)
  }, [task.tasks, filter])

  const [isAddOpen, setIsAddOpen] = useState(false)
  const isTaskSelected = Boolean(task.selectedTask)
  // console.log(typeof window)

  return (
    <div className="p-6 space-y-4">
      <DashboardHeader
              title="Tasks"
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
          + Add Task
        </Button>
      </div>

      <Card className="p-4 h-[75vh]">
        <div className="flex h-full gap-4">

          {/* Task List */}
          <div
            className={`
              transition-all duration-300
              ${isTaskSelected ? "hidden lg:block lg:w-[60%]" : "w-full lg:w-[60%]"}
              overflow-y-auto space-y-3 pr-2
            `}
          >
          
            {sortedTasks.map(t => (
              <TaskItem
                key={t.id}
                task={t}
                isActive={task.selectedTask?.id === t.id}
                onClick={() => task.setSelectedTask(t)}
                update={task.updateTask}
              />
            ))}
          </div>

          {/* Task Detail */}
          <div
            className={`
              transition-all duration-300
              ${isTaskSelected ? "w-full lg:w-[40%]" : "hidden lg:block lg:w-[40%]"}
              overflow-y-auto
            `}
          >
            {isTaskSelected ? (
              <div className="h-full flex flex-col">
                <button
                  onClick={() => task.setSelectedTask(null)}
                  className="lg:hidden mb-2 text-sm text-gray-500 text-left"
                >
                  ← Back
                </button>

                <TaskDetail task={task.selectedTask} update={task.updateTask} deleteTask={task.deleteTask}/>
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
            task.addTask(newTask)
            setIsAddOpen(false)
          }}
        />
      )}

    </div>
  )
}
