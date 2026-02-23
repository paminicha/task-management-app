import React from 'react'
import { Card } from "../ui/Card"
import GoalItem from './GoalItem'

function GoalRoutineCard() {
  return (
    <Card>
        <h3 className="text-lg font-semibold text-gray-700 pl-2">Goal</h3>
        <div className="flex items-center justify-between mb-4">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-3 pr-2">
                <GoalItem title='Wake up 7.00' goal_note='Daily'/>
                <GoalItem title='กินน้ำ 6 แก้ว' goal_note='Daily'/>
                <GoalItem title='Exercise >20 mins' goal_note='Daily'/>
                <GoalItem title='Read a book >20 mins' goal_note='Daily'/>
                <GoalItem title='Sleep 22.00' goal_note='Daily'/>
            </div>
            <button className="w-8 h-8 m-1 shrink-0 rounded-full btn-primary">+</button>
        </div>
    </Card>
  )
}

export default GoalRoutineCard