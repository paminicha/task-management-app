import { Task, DashboardFilter } from "@/Data/task"
import { filterDateRange, sortData } from "@/features/hooks/datesortFilter"

export function selectTasks(tasks: Task[], filter: DashboardFilter): Task[] {

  let data: Task[] = [...tasks]

  data = data.filter((t) => {
    const matchSearch = t.title.toLowerCase().includes(filter.search.toLowerCase())

    const matchStatus =
      filter.status === "All" || t.status === filter.status

    const matchCategory =
      filter.category === "All" ||
      t.category === filter.category

    const matchPriority =
      filter.priority === "all" ||
      t.priority === filter.priority

    return matchSearch && matchStatus && matchCategory && matchPriority
  })

  data = filterDateRange({
    data,
    startDate: filter.startDate,
    endDate: filter.endDate,
    getStart: t => t.startDate,
    getEnd: t => t.endDate,
    })

  return sortData<Task>(
    data,
    filter.sort,
    t => t.title,
    t => t.startDate
  )
}
