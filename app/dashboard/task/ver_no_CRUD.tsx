"use client"
import DashboardHeader from "@/components/ui/DashboardHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import TaskDetail from "@/components/task/TaskDetail";
import TaskItem from "@/components/task/TaskItem";
import { useState } from "react"

// type Task = {
//   id: number
//   title: string
//   progress: number
//   note: string
//   time: string
//   date: string
//   priority: string
//   description: string
//   type: string
// }

type Task = {
  id: string
  title: string
  description?: string
  status: "todo" | "doing" | "done"
  priority: "low" | "medium" | "high"
  progress: number
  startDate: string
  endDate: string
  time?: string
  note?: string
  category?: string
}

const tasks: Task[] = [
  {
    id: "1",
    title: "Write Report",
    description: "Finish company report",
    status: "doing",
    priority: "high",
    progress: 80,
    startDate: "2026-01-30",
    endDate: "2026-01-30",
    time: "08:00 - 09:00",
    category: "work",
  },
  {
    id: "2",
    title: "Read A Book",
    description: "Read UX design book",
    status: "todo",
    priority: "medium",
    progress: 30,
    startDate: "2026-01-30",
    endDate: "2026-01-30",
    time: "20:00 - 21:00",
    category: "personal",
  },
]


export default function TaskPage() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  return (
    <div>
      <DashboardHeader title='Tasks'></DashboardHeader>
      <div className="px-3 mt-3"> <Button>+ Add Task</Button> </div>

      <Card className="m-3 p-4">
        <div className="flex h-full gap-4">

          <div className={`
              transition-all duration-300
              ${selectedTask ? "hidden lg:block lg:w-[60%]" : "w-full lg:w-[60%]"}
              overflow-y-auto space-y-3 pr-2
            `}
          >
            {tasks.map(task => (
              <TaskItem
                key={task.id}
                {...task}
                isActive={selectedTask?.id === task.id}
                onClick={() => setSelectedTask(task)}
              />
            ))}
            {/* <TaskItem title="Write Report" progress={89} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
            <TaskItem title="Read a Book" progress={39} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
            <TaskItem title="Email Catch Up Summary" progress={0} note="note... .... ... .. .. ...... .." time="14.00-15.00" date="30/01/26" priority=""/>
            <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
            <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
            <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
            <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/> */}
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
                {/* Mobile Back Button */}
                <button onClick={() => setSelectedTask(null)}
                  className="lg:hidden mb-2 text-sm text-gray-500 text-left"
                >
                  ← Back
                </button>
                
                <TaskDetail task={selectedTask} />

              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                Select task to view detail
              </div>
            )
            }
          </div>

        </div>

      </Card>

    </div>
  );
}
