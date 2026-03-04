"use client"

import DashboardHeader from "@/components/ui/DashboardHeader"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import TaskDetail from "@/components/task/TaskDetail"
import TaskItem from "@/components/task/TaskItem"
import AddGoalModal from "@/components/goal/AddGoalModal"
import AddGoalDailyModal from "@/components/goal/AddGoalDailyModal"
import EditGoalModal from "@/components/goal/EditGoalModal"
import { useGoal } from "@/features/hooks/useGoal"
import { useState } from "react"
import GoalItemDetial from "@/components/goal/GoalItemDetail"

export default function TaskPage() {

  const goal = useGoal()

  const [isAddOpen, setIsAddOpen] = useState(false)
  const [isAddOpenDaily, setIsAddOpenDaily] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  // console.log(typeof window)

  return (
    <div className="p-6 space-y-4">
      
      <h1 className="px-3 text-2xl font-bold">Goals</h1>

      <div className="px-3 inline-flex items-end">
        <h1 className="px-3 text-lg font-bold">Big Goals</h1>
        <Button onClick={() => setIsAddOpen(true)} className="cursor-pointer">
          + Add Big Goal
        </Button>
      </div>

      <Card className="mb-6 h-[55vh]">
        <div className="flex h-full gap-4">
          {/* Big Goal */}
          <div className="transition-all duration-300 w-full lg:w-[50%] overflow-y-auto space-y-3 pr-2" >
            <div className="flex flex-row flex-wrap gap-3">
              {goal.goals
                  .filter(g => g.type === "Big Goal" && g.status === "No")
                  .map( g => (
                    <GoalItemDetial key={g.id} goal={g} 
                    onclickStatus={(status) => {goal.updateGoal(status)}} 
                    onclickEdit={() => {
                      goal.setSelectedGoal(g); setIsEditOpen(true)
                    }}/>
                  )
                )}
            </div>
          </div>

          {/* Status Success */}
          <div className="transition-all duration-300 w-full lg:w-[50%] overflow-y-auto space-y-3 pr-2">
            <div className="flex flex-row flex-wrap gap-3">
              {goal.goals
                .filter(g => g.type === "Big Goal" && g.status === "Yes")
                .map( g => (
                  <GoalItemDetial key={g.id} goal={g} 
                    onclickStatus={(status) => {goal.updateGoal(status)}} 
                    onclickEdit={() => {goal.setSelectedGoal(g); setIsEditOpen(true)}}/>
                )
              )}
            </div>
          </div>

        </div>
      </Card>

      {/* Daily Goal */}
      <div className="px-3 inline-flex items-end">
        <h1 className="px-3 text-lg font-bold">Daily Goals</h1>
        <Button onClick={() => setIsAddOpenDaily(true)} className="cursor-pointer">
          + Add Daily Goal
        </Button>
      </div>

      <Card className="mb-6 h-[55vh]">
        <div className="flex h-full gap-4">

          {/* Daily Goal Undone */}
          <div className="transition-all duration-300 w-full lg:w-[50%] overflow-y-auto space-y-3 pr-2" >
            <div className="flex flex-row flex-wrap gap-3">
              {goal.goals
                  .filter(g => g.type === "Daily" && g.status === "No")
                  .map( g => (
                    <GoalItemDetial key={g.id} goal={g} 
                    onclickStatus={(status) => {goal.updateGoal(status)}} 
                    onclickEdit={() => {
                      goal.setSelectedGoal(g); setIsEditOpen(true)
                    }}/>
                  )
                )}
            </div>
          </div>

          {/* Success */}
          <div className="transition-all duration-300 w-full lg:w-[50%] overflow-y-auto space-y-3 pr-2">
            <div className="flex flex-row flex-wrap gap-3">
              {goal.goals
                .filter(g => g.type === "Daily" && g.status === "Yes")
                .map( g => (
                  <GoalItemDetial key={g.id} goal={g} 
                    onclickStatus={(status) => {goal.updateGoal(status)}} 
                    onclickEdit={() => {goal.setSelectedGoal(g); setIsEditOpen(true)}}/>
                )
              )}
            </div>
          </div>

        </div>
      </Card>

      {isAddOpen && (
        <AddGoalModal 
          onClose={() => {setIsAddOpen(false)}}
          onSave={(newGoal) => {
            goal.addGoal(newGoal)
            setIsAddOpen(false)
          }}
        />
        
      )}
      {isAddOpenDaily && (
        <AddGoalDailyModal 
          onClose={() => {setIsAddOpenDaily(false)}}
          onSave={(newGoal) => {
            goal.addGoal(newGoal)
            setIsAddOpenDaily(false)
          }}
        />
      )}
      {isEditOpen && goal.selectedGoal && 
        <EditGoalModal 
          goal = {goal.selectedGoal}
          onClose={() => setIsEditOpen(false)}
          onSave={ (updated) => {
            goal.updateGoal(updated)
            setIsEditOpen(false)
          }}
          deleteGoal={(id) => goal.deleteGoal(id)}
        />
      }
    </div>
  )
}
