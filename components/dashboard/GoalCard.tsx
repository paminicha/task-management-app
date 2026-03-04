"use Client"
import { Card } from "../ui/Card"
import GoalItem from '../goal/GoalItem'
import { Goal } from '@/Data/task'
import { useState } from "react"
import AddGoalModal from "../goal/AddGoalModal"

interface goalActions {
  todayGoals : Goal[]
  addGoal: (goal: Goal) => void
  updateGoal: (goal: Goal) => void
}

interface Props {
  goalActions: goalActions
}

function GoalCard({goalActions}:Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Card>
        <h3 className="text-lg font-semibold pl-2">Goal</h3>
        <div className="flex items-center justify-between mb-4">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-3 pr-2">

              {goalActions.todayGoals
                .filter(g => g.type === "Big Goal")
                .map( g => (
                  <GoalItem key={g.id} goal={g} onclick={(status) => {goalActions.updateGoal(status)}}/>
                )
              )}
                {/* <GoalItem title='Finish My Project' goal_note='Big Goal'/>
                <GoalItem title='Finish Resume' goal_note='Big Goal'/>
                <GoalItem title='Get Weight 45kg' goal_note='Big Goal'/> */}
            </div>
            <button className="w-8 h-8 m-1 shrink-0 rounded-full btn-primary"
              onClick={() => setIsOpen(true)}
            >+</button>
        </div>
      </Card>
      {isOpen && (
        <AddGoalModal 
          onClose={() => {setIsOpen(false)}}
          onSave={(newGoal) => {
            goalActions.addGoal(newGoal)
            setIsOpen(false)
          }}
        />
      )}
    </div>
  )
}

export default GoalCard