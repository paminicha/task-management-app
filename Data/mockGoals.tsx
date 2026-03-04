import { Goal } from "./task"
const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

export const mockGoals: Goal[] = [
  {
    id: "1",
    title: "Finish My Project",
    type: "Big Goal",
    status: "No"
  },
  {
    id: "2",
    title: "Finish My Resume",
    type: "Big Goal",
    status: "No"
  },
  {
    id: "3",
    title: "Get Weight 45 kg",
    type: "Big Goal",
    status: "No"
  },
  {
    id: "4",
    title: "Wake up 7.00",
    type: "Daily",
    status: "No"
  },
  {
    id: "5",
    title: "กินน้ำ 6 แก้ว",
    type: "Daily",
    status: "No"
  },
  {
    id: "6",
    title: "Exercise >20 mins",
    type: "Daily",
    status: "No"
  },
  {
    id: "7",
    title: "Read a book >20 mins",
    type: "Daily",
    status: "No"
  },
  {
    id: "8",
    title: "Sleep 22.00",
    type: "Daily",
    status: "No"
  },
]
