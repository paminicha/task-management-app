"use client"

import { useTasks } from "@/features/hooks/useTask"
import { useEvent } from "@/features/hooks/useEvent"
import { useDashboardFilter } from "@/features/hooks/useDashboardFilter"

import StatsSection from "./StatsSection"
import MainSection from "./MainSection"
import GoalsSection from "./GoalsSection"
import DashboardHeader from "../ui/DashboardHeader"

import { selectTasks } from "@/features/hooks/taskSelector"
import { selectEvents } from "@/features/hooks/eventSelector"

export default function DashboardClient() {
  const task = useTasks()
  const event = useEvent()
  const filter = useDashboardFilter()

  const sortedTasks = selectTasks(task.tasks, filter)
  const sortedEvents = selectEvents(event.events, filter)
  console.log("tasks:", task.tasks)
  console.log("sortedTasks:", sortedTasks)

  return (
    <div className="flex flex-col gap-4">
        <DashboardHeader
        title="Overview"
        search={filter.search}
        setSearch={filter.setSearch}
        setStatus={filter.setStatus}
        setPriority={filter.setPriority}
        setCategory={filter.setCategory}
        setStartDate={filter.setStartDate}
        setEndDate={filter.setEndDate}
        setSort={filter.setSort}
      />

      <StatsSection tasks={sortedTasks} />
      <MainSection
        tasks={sortedTasks}
        events={sortedEvents}
        taskActions={task}
        eventActions={event}
      />
      <GoalsSection />
    </div>
  )
}