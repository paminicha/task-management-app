"use client"

import { useState, useMemo} from "react"
import dayjs from "dayjs"
import { Card } from "../ui/Card"
import DashboardHeader from "../ui/DashboardHeader"

import { useTasks } from "@/features/hooks/useTask"
import { useDashboardFilter } from "@/features/hooks/useDashboardFilter"
import { selectTasks } from "@/features/hooks/taskSelector"


type Props = {

}

const categoryColorMap: Record<string, string> = {
  work: "bg-blue-400/90",
  family: "bg-green-400/90",
  personal: "bg-purple-400/90",
  friend: "bg-yellow-400/90",
  reminder: "bg-red-400/90",
}


export default function Calendar( {} : Props) {

  const task = useTasks()
  const filter = useDashboardFilter()

  // const sortedTasks = selectTasks(task.tasks, filter)
  // selector layer
  const sortedTasks = useMemo(() => {
    return selectTasks(task.tasks, filter)
  }, [task.tasks, filter])

  const [currentMonth, setCurrentMonth] = useState(dayjs())

  const startOfMonth = currentMonth.startOf("month")
  const startDate = startOfMonth.startOf("week")
  const endDate = currentMonth.endOf("month").endOf("week")
  

  const days: dayjs.Dayjs[] = []
  let date = startDate

  while (date.isBefore(endDate)) {
    days.push(date)
    date = date.add(1, "day")
  }
  // console.log(tasks)

  // const categoryColorMap = mockCateColor.reduce((acc, item) => {
  //   acc[item.category.toLowerCase()] = item.color
  //   return acc
  // }, {} as Record<string, string>)

  return (

    <div>
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
      <Card className="flex-1 m-3 p-4 flex gap-2">
        <div className="w-full overflow-x-auto">
          <div className="min-w-[700px]">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex gap-2">
              <button onClick={() => setCurrentMonth(prev => prev.subtract(1, "month"))}>◀</button>
              <button onClick={() => setCurrentMonth(prev => prev.add(1, "month"))}>▶</button>
            </div>

            <h2 className="font-semibold text-lg">
              {currentMonth.format("MMMM YYYY")}
            </h2>

            <button className="text-xl font-bold">＋</button>
          </div>

          {/* Week Header */}
          <div className="grid grid-cols-7 border-b font-semibold text-center">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => (
              <div key={day} className="p-2">{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 border-l border-t">
            {days.map((day, idx) => {
              const isCurrentMonth = day.month() === currentMonth.month()
              const isToday = day.isSame(dayjs(), "day")

              return (
                <div
                  key={idx}
                  className={`min-h-[100px] border-r border-b p-1 relative
                    ${!isCurrentMonth ? "text-gray-400" : ""}
                    ${isToday ? "btn-primary" : ""}
                  `}
                >
                  <div className="text-sm font-semibold text-right">
                    {day.date()}
                  </div>

                  {/* Events */}
                  <div className="space-y-1">
                    {sortedTasks
                    .filter(task => {
                      const start = dayjs(task.startDate)
                      const end = dayjs(task.endDate)                 

                      return (
                        day.isSame(start, "day") ||
                        day.isSame(end, "day") ||
                        (day.isAfter(start, "day") && day.isBefore(end, "day"))
                      )
                    })
                    .map(t => (
                      <div
                        key={t.id}
                        onClick={() => task.setSelectedTask(t)}
                        className={`text-xs rounded px-1 truncate cursor-pointer hover:opacity-80
                          ${categoryColorMap[t.category.toLowerCase()] || "bg-gray-500"}
                        `}
                      >
                        {/* {t.startTime}  */}
                        {t.title}
                        
                      </div>
                      
                      
                    ))}
                    {/* {tasks
                      .filter(e =>
                        day.isSame(e.startDate) ||
                        (day.isAfter(e.startDate) && day.isBefore(e.endDate)) ||
                        day.isSame(e.endDate)
                      )
                      .map(e => (
                        <div
                          key={e.id}
                          className={`text-xs rounded px-1 truncate ${categoryColorMap[e.category.toLowerCase()]}`}
                        >
                          {e.title}
                        </div> 
                      ))}*/}
                      
                  </div>
                </div>
              )
            })}
          </div>
        

          {/* modal */}
          {task.selectedTask && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-xl p-6 w-[400px] shadow-lg relative">
                
                <button
                  onClick={() => task.setSelectedTask(null)}
                  className="absolute top-2 right-3"
                >
                  ✕
                </button>

                <h3 className="text-lg font-semibold">
                  {task.selectedTask.title}
                </h3>

                <p className="text-sm text-gray-600 mt-1">
                  {task.selectedTask.startDate} {task.selectedTask.startTime}
                  {" - "}
                  {task.selectedTask.endDate} {task.selectedTask.endTime}
                </p>

                <p className="mt-3 text-sm">
                  {task.selectedTask.description}
                </p>

                <div className="flex justify-between mt-4 text-xs">
                  <span>Priority: {task.selectedTask.priority}</span>
                  <span>Status: {task.selectedTask.status}</span>
                </div>

                <div
                  className={`mt-3 inline-block px-2 py-1 text-xs rounded
                    ${categoryColorMap[task.selectedTask.category.toLowerCase()]}
                  `}
                >
                  {task.selectedTask.category}
                </div>

                {task.selectedTask.note && (
                  <p className="mt-3 text-sm text-gray-500">
                    Note: {task.selectedTask.note}
                  </p>
                )}
              </div>
            </div>
          )}
          </div>
        </div>
      </Card>
    </div>
  )
}
