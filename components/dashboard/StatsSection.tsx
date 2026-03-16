import StatCard from "@/components/dashboard/StatCard"
import { Task } from "@/Data/task"
import DateCard from "./DateCard"

export interface StatsSectionProps {
  tasks: Task[]
}

export default function StatsSection({tasks} : StatsSectionProps ) {
  console.log("state section", tasks)
  const total = tasks.length
  const done = tasks.filter(t => t.status === "Done").length
  const doing = tasks.filter(t => t.status === "Doing").length
  const todo = tasks.filter(t => t.status === "Todo").length

  return (
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        <div className="lg:col-span-3">
          <DateCard date={new Date()} />
        </div>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <StatCard title="Complete" value={`${done}/${total}`} />
          <StatCard title="In Progress" value={`${doing}/${total}`} />
          <StatCard title="Waiting" value={`${todo}/${total}`} />
          
        </div>

        <div className="lg:col-span-3 grid">
          {/* <StatCard title="Mood Card" value="Good day" /> */}
          <StatCard title="Today Total" value={`${total}`} />
        </div>
      </section>
  )
}