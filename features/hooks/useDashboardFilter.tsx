import { useState } from "react"
import { TaskStatus, TaskPriority, SortOption }from "@/Data/task"

export type SortType = "az" | "newest"

export function useDashboardFilter() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<TaskStatus>("All")
  const [priority, setPriority] = useState<TaskPriority>("all")
  const [category, setCategory] = useState("All")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [sort, setSort] = useState<SortOption>("title-asc")

  return {
    search, setSearch,
    status, setStatus,
    priority, setPriority,
    category, setCategory,
    startDate, setStartDate,
    endDate, setEndDate,
    sort, setSort
  }
}