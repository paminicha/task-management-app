import Image from "next/image";
import DashboardClient from "@/components/dashboard/DashboardClient";



export default function DashboardPage() {
  return(
    <DashboardClient/>
  )

  // const task = useTasks()
  // const event = useEvent()
  // const filter = useDashboardFilter()

  // const {
  //     tasks,
  //     selectedTask,
  //     setSelectedTask,
  //     search,
  //     setSearch,
  //     setStatus, 
  //     addTask,
  //     updateTask,
  //     deleteTask,
  //     setCategory,
  //     setPriority,
  //     setStartDate,
  //     setEndDate,
  //     setSort,
  //   } = useTasks()

  // const stats = useMemo(() => {
  //   const total = tasks.length

  //   const done = tasks.filter(t => t.status === "Done").length
  //   const doing = tasks.filter(t => t.status === "Doing").length
  //   const todo = tasks.filter(t => t.status === "Todo").length

  //   return { total, done, doing, todo }
  // }, [tasks])
  // // console.log(stats)

  // const totalProgress = useMemo(() => {
  //   if (tasks.length === 0) return 0

  //   const sum = tasks.reduce((acc, task) => acc + task.progress, 0)

  //   return Math.round(sum / tasks.length)
  // }, [tasks])
  // // console.log(totalProgress)

  // const todayTasks = useMemo(() => {
  //   const today = new Date()
  //   today.setHours(0, 0, 0, 0)

  //   return tasks.filter(t => {
  //     const start = new Date(t.startDate)
  //     const end = new Date(t.endDate)

  //     return start <= today //&& end >= today
  //   })
  // }, [tasks])

  // const {events,
  //   todayEvents,
  //   addEvent,
  //   updateEvent,
  //   deleteEvent} = useEvent()

  // const filteredTasks = useMemo(() => {
  //   let data = [...task.tasks]

  //   data = data.filter(t => {
  //     const matchSearch = t.title
  //       .toLowerCase()
  //       .includes(filter.search.toLowerCase())

  //     const matchStatus =
  //       filter.status === "All" || t.status === filter.status

  //     const matchCategory =
  //       filter.category === "All Task Category" ||
  //       t.category === filter.category

  //     const matchPriority =
  //       filter.priority === "all" ||
  //       t.priority === filter.priority

  //     return matchSearch && matchStatus && matchCategory && matchPriority
  //   })

  //   data = filterDateRange(
  //     data,
  //     filter.startDate,
  //     filter.endDate,
  //     t => t.startDate,
  //     t => t.endDate
  //   )

  //   return data
  // }, [
  //   task.tasks,
  //   filter.search,
  //   filter.status,
  //   filter.category,
  //   filter.priority,
  //   filter.startDate,
  //   filter.endDate
  // ])
  // const sortedTasks = useMemo(() => {
  //   return sortData(
  //     filteredTasks,
  //     filter.sort,
  //     t => t.title,
  //     t => t.startDate
  //   )
  // }, [filteredTasks, filter.sort])

  
  // const filteredEvents = useMemo(() => {
  //   let data = [...event.events]

  //   data = data.filter(e => {
  //     const matchSearch = e.title
  //       .toLowerCase()
  //       .includes(filter.search.toLowerCase())

  //     return matchSearch
  //   })

  //   data = filterDateRange(
  //     data,
  //     filter.startDate,
  //     filter.endDate,
  //     e => e.start,
  //     e => e.end
  //   )

  //   return data
  // }, [
  //   event.events,
  //   filter.search,
  //   filter.startDate,
  //   filter.endDate
  // ])

  // return (
  //   <div className="flex flex-col gap-4">
  //     <DashboardHeader
  //       title="Overview"
  //       search={filter.search}
  //       setSearch={filter.setSearch}
  //       setStatus={filter.setStatus}
  //       setPriority={filter.setPriority}
  //       setCategory={filter.setCategory}
  //       setStartDate={filter.setStartDate}
  //       setEndDate={filter.setEndDate}
  //       setSort={filter.setSort}
  //     />

  //     {/* Stats Section */}
  //     <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
  //       <div className="lg:col-span-3">
  //         <DateCard date={new Date()} />
  //       </div>

  //       <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
  //         <StatCard title="Complete" value={`${stats.done}/${stats.total}`} />
  //         <StatCard title="In Progress" value={`${stats.doing}/${stats.total}`} />
  //         <StatCard title="Waiting" value={`${stats.todo}/${stats.total}`} />
  //       </div>

  //       <div className="lg:col-span-3 grid">
  //         <StatCard title="Mood Card" value="Good day" />
  //       </div>
  //     </section>

  //     {/* Main Section */}
  //     <section className="grid lg:grid-cols-12 gap-3">
  //       <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">

  //         <ChartCard value={totalProgress} />
  //         <EventCard title="Event" events={todayEvents} update={updateEvent}/>
  //       </section>

  //       <div className="lg:col-span-6">
  //         <TodayTaskList tasks={todayTasks} addTask={addTask} update={updateTask}/>
  //       </div>

  //       <div className="lg:col-span-3">
  //         <WeeklyCard />
  //       </div>
  //     </section>

  //     {/* Goals Section */}
  //     <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
  //       <GoalCard />
  //       <GoalRoutineCard />
  //     </section>

      
  //   </div>
  // );
}
