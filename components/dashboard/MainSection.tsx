import TodayTaskList from "@/components/dashboard/TodayTaskCard"
import EventCard from "@/components/dashboard/EventCard"
import ChartCard from "@/components/dashboard/ChartCard"
import WeeklyCard from "./WeeklyCard"
import { Task } from "@/Data/task"
import { Event } from "@/Data/event"

export interface TaskActions {
  addTask: (task: Task) => void
  updateTask: (task: Task) => void
}

export interface EventActions {
  updateEvent: (event: Event) => void
}

export interface MainSectionProps {
  tasks: Task[]
  events: Event[]
  taskActions: TaskActions
  eventActions: EventActions
}

export default function MainSection( {tasks, events, taskActions, eventActions}: MainSectionProps ) {

  const totalProgress =
    tasks.length === 0
      ? 0
      : Math.round(
          tasks.reduce((acc, t) => acc + (t.progress ?? 0), 0) /
            tasks.length
        )

  return (
    <section className="grid lg:grid-cols-12 gap-3">
    <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">

        <ChartCard value={totalProgress} />
        <EventCard title="Event" events={events} update={eventActions.updateEvent}/>
    </section>

    <div className="lg:col-span-6">
        <TodayTaskList tasks={tasks} addTask={taskActions.addTask} update={taskActions.updateTask}/>
    </div>

    <div className="lg:col-span-3">
        <WeeklyCard />
    </div>
    </section>

  )
}