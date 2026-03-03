import { filterDateRange, sortData } from "@/features/hooks/datesortFilter"
import { Event, DashboardFilter } from "@/Data/task"

export function selectEvents(events: Event[], filter: DashboardFilter): Event[] {
  let data = [...events]

  data = data.filter(e =>
    e.title.toLowerCase().includes(filter.search.toLowerCase())
  )

  data = filterDateRange({
    data,
    startDate: filter.startDate,
    endDate: filter.endDate,
    getStart: t => t.start,
    getEnd: t => t.end,
    })

  return sortData(
    data,
    filter.sort,
    e => e.title,
    e => e.start
  )
}