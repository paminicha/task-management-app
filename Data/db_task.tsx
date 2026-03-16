import { Task } from "@/Data/task"
import { mockTasks } from "./mockTasks"

let tasks: Task[] = [...mockTasks]

export const db_task = {
  get: () => [...tasks],

  create: (task: Omit<Task, "id">) => {
    console.log("TASKS:", task)
    const newTask = { ...task, id: crypto.randomUUID() }
    console.log("NEWTASKS:", newTask)

    tasks.push(newTask)
    console.log("NEWTASKS:", tasks)
    return newTask
  },

  update: (updated: Task) => {
    // console.log("UPDATED:", updated)
    // console.log("TASKS:", tasks)
    const index = tasks.findIndex(t => t.id === updated.id)
    // console.log("FOUND INDEX:", index)
    if (index === -1) throw new Error("Task not found")

    tasks[index] = updated
    return updated
  },

  delete: (id: string) => {
    tasks = tasks.filter(t => t.id !== id)
  },

  getById: (id: string) => {
  return tasks.find(t => t.id === id)
}
}