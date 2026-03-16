import { Card } from "../ui/Card"
import GoalItem from '../goal/GoalItem'
import { Goal } from '@/Data/task'
import { useState } from "react"
import AddGoalDailyModal from "../goal/AddGoalDailyModal"

interface goalActions {
  todayGoals : Goal[]
  addGoal: (goal: Goal) => void
  updateGoal: (goal: Goal) => void
}

interface Props {
  goalActions: goalActions
}

function GoalRoutineCard({goalActions}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Card>
        <h3 className="text-lg font-semibold pl-2">Goal Routine</h3>
        <div className="flex items-center justify-between mb-4">
            <div className="flex overflow-x-auto space-x-3 pr-2">
              {goalActions.todayGoals
                .filter(g => g.type === "Daily")
                .map( g => (
                  <GoalItem key={g.id} goal={g} onclick={(status) => {goalActions.updateGoal(status)}}/>
                )
              )}
                {/* <GoalItem title='Wake up 7.00' goal_note='Daily'/>
                <GoalItem title='กินน้ำ 6 แก้ว' goal_note='Daily'/>
                <GoalItem title='Exercise >20 mins' goal_note='Daily'/>
                <GoalItem title='Read a book >20 mins' goal_note='Daily'/>
                <GoalItem title='Sleep 22.00' goal_note='Daily'/> */}
            </div>
            <button className="w-8 h-8 m-1 shrink-0 rounded-full btn-primary"
              onClick={() => setIsOpen(true)}
            >+</button>
        </div>
      </Card>
      {isOpen && (
        <AddGoalDailyModal 
          onClose={() => {setIsOpen(false)}}
          onSave={(newGoal) => {
            goalActions.addGoal(newGoal)
            setIsOpen(false)
          }}
        />
        // <EditGoalModal 
        //   onClose={() => setIsOpen(false)}
        //   onSave={ (updated) => {
        //     goalActions.updateGoal(updated)
        //     setIsOpen(false)
        //   }}
        // />
      )}
    </div>
  )
}

export default GoalRoutineCard