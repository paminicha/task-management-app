export type TaskStatus = "All" | "Todo" | "Doing" | "Done"

export type TaskPriority = "all" | "low" | "medium" | "high"

export type SortOption = "title-asc" | "title-desc" | "date-asc" | "date-desc"

export interface DashboardFilter {
  search: string
  status: TaskStatus
  category: string
  priority: TaskPriority
  startDate?: string | null
  endDate?: string | null
  sort: SortOption
}

export type Task = {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  progress: number
  startDate: string
  endDate: string
  startTime: string
  endTime: string
  note?: string
  category: string
}

export type Event = {
  id: string
  title: string
  start: string  // ISO datetime
  end: string
}

export type Goal = {
  id: string
  title: string
  type: string
  status: string
}

export type Category_Color = {
  category: string
  color: string
  status?: TaskStatus
}