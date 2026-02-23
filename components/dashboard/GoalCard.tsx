import React from 'react'
import { Card } from "../ui/Card"
import GoalItem from './GoalItem'


function GoalCard() {
  return (
    <Card>
        <h3 className="text-lg font-semibold pl-2">Goal</h3>
        <div className="flex items-center justify-between mb-4">
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide space-x-3 pr-2">
                <GoalItem title='Finish My Project' goal_note='Big Goal'/>
                <GoalItem title='Finish Resume' goal_note='Big Goal'/>
                <GoalItem title='Get Weight 45kg' goal_note='Big Goal'/>
                <GoalItem title='Get Weight 45kg' goal_note='Big Goal'/>
                <GoalItem title='Get Weight 45kg' goal_note='Big Goal'/>
                <GoalItem title='Get Weight 45kg' goal_note='Big Goal'/>
            </div>
            <button className="w-8 h-8 m-1 shrink-0 rounded-full btn-primary">+</button>
        </div>
    </Card>
  )
}

export default GoalCard