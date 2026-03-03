"use client"
import { useState, useMemo, useEffect } from "react"
import { Task } from "@/Data/task"
import { fetchTasks, createTask, updateTask, deleteTask } from "../service/task.service"
import { TaskStatus } from "@/Data/task"
import { filterDateRange, sortData } from "./datesortFilter"

export function useTasks() {
  // const [tasks, setTasks] = useState<Task[]>(mockTasks)
  // const [tasks, setTasks] = useState<Task[]>(() => {
  //   if (typeof window !== "undefined") {
  //     const saved = localStorage.getItem("tasks")
  //   return saved ? JSON.parse(saved) : []
  // }
  // return []
  // })
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState<string>("All")
  const [category, setCategory] = useState<string>("All Task Category")
  const [priority, setPriority] = useState<string>("all")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [sort, setSort] = useState<"az" | "newest">("az")

  // useEffect( () => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks)
  // )
  // }, [tasks])

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const data = await fetchTasks()
        setTasks(data)
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  // const filteredTasks = useMemo(() => { //คำนวณค่าใหม่ “เฉพาะตอน dependency เปลี่ยน”
  //   let data = [...tasks]
  //   data = tasks.filter(task => {
  //     const matchSearch = task.title
  //       .toLowerCase()
  //       .includes(search.toLowerCase())

  //     const matchStatus =
  //       status === "All" ? true : task.status === status
  //     const matchCategory =
  //       category === "All Task Category" ? true : task.category === category
  //     const matchPriority =
  //       priority === "all" ? true : task.priority === priority
  //     return matchSearch && matchStatus && matchCategory && matchPriority //ต้องผ่านทุกเงื่อนไขพร้อมกัน
  //   })
  //   // date filter
  //   data = filterDateRange(
  //     data, startDate, endDate, 
  //     t => t.startDate,
  //     t => t.endDate
  //   )
  //   return data
  // }, [tasks, search, status, category, priority, startDate, endDate]) // dependency 

  // const sortedTasks = useMemo(() => {
  //   return sortData(
  //     filteredTasks, sort, filteredTask => filteredTask.title, filteredTask => filteredTask.startDate
  //   )
  // }, [filteredTasks, sort])


  const addTask = async (task: Task) => {
    setTasks(prev => [...prev, task])
    try {
      await createTask(task)
    } catch (err) {
      // 2. ถ้า error → rollback
      setTasks(prev => prev.filter(t => t.id !== task.id))
    }
  }

  // const updateTask = (updated: Task) => {
  //   setTasks(prev =>
  //     prev.map(t => (t.id === updated.id ? updated : t))
  //   )
  //     setSelectedTask(updated)
  // }
  const updateTaskHandler = async (updated: Task) => {
    const normalizedTask =
      updated.progress === 100 ? { ...updated, status: "Done" as TaskStatus} : 
      updated.progress === 0 ? { ...updated, status: "Todo" as TaskStatus} : 
      { ...updated, status: "Doing" as TaskStatus}

    const oldTasks = [...tasks]
    const oldSelected = selectedTask

    setTasks(prev =>
      prev.map(t =>
        t.id === normalizedTask.id ? normalizedTask : t
      )
    )

    setSelectedTask(normalizedTask)

    try {
      await updateTask(normalizedTask.id, normalizedTask)
    } catch {
      setTasks(oldTasks)
      setSelectedTask(oldSelected)
    }
  }

  // const deleteTask = (id: string) => {
  //   setTasks(prev => prev.filter(t => t.id !== id))
  //   setSelectedTask(null)
  // }
  const deleteTaskHandler = async (id: string) => {
    const oldTasks = tasks

    setTasks(prev => prev.filter(t => t.id !== id))
    setSelectedTask(null)

    try {
      await deleteTask(id)
    } catch {
      setTasks(oldTasks) // rollback
    }
  }

  return {
    tasks,
    rawTasks: tasks,
    loading, 
    error, 

    selectedTask,
    setSelectedTask,

    search,
    setSearch,

    status,
    setStatus,

    category, 
    setCategory,

    priority,
    setPriority,

    startDate,
    setStartDate,

    endDate,
    setEndDate,

    sort,
    setSort,

    addTask,
    updateTask: updateTaskHandler,
    deleteTask: deleteTaskHandler,
    
  }
}
