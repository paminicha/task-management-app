"use client"
import DashboardHeader from "@/components/ui/DashboardHeader";
import { useTasks } from "@/features/hooks/useTask";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Calendar from "@/components/calendar/Calendar";


export default function CalendarPage() {

  const {
    tasks,
    selectedTask,
    setSelectedTask,
    search,
    setSearch,
    setStatus, 
    setCategory,
    setPriority,
    setStartDate,
    setEndDate,
    setSort,
    addTask,
    updateTask,
    deleteTask,
  } = useTasks()

  return (
    <div>
      <DashboardHeader title="Tasks" setSearch={setSearch} search={search} setStatus={setStatus} setCategory={setCategory}
              setPriority={setPriority} setStartDate={setStartDate} setEndDate={setEndDate} setSort={setSort} />
      
      <Card className="flex-1 m-3 p-4 flex gap-2">
        <Calendar tasks={tasks}/>

      </Card>

    </div>
  );
}
