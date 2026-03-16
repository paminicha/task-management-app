import React from 'react'
import { Goal } from '@/Data/task'
import { Check } from 'lucide-react'
import { Pencil } from 'lucide-react'
import { X } from 'lucide-react'
import { useState } from 'react'
import EditGoalModal from './EditGoalModal'

interface GoalActions {
  selectedGoal: Goal
  todayGoals : Goal[]
  addGoal: (goal: Goal) => void
  updateGoal: (goal: Goal) => void
}

interface Props {
  goal : Goal
  onclickStatus: (updated: Goal) => void
  onclickEdit: () => void
}

function GoalItemDetial({goal, onclickStatus, onclickEdit}: Props) {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-32 p-2 shrink-0 flex flex-col rounded-xl shadow-sm border-gray-300 border">
      <div>
        <h4 className="font-semibold text-wrap"> {goal.title} </h4>
        <p className="mt-1 text-xs text-gray-400"> {goal.type} </p>
      </div>

      <div className="mt-auto flex justify-end gap-1">
        <button
          className="cursor-pointer w-7 h-7 flex items-center justify-center 
                    bg-gray-300/30 hover:bg-amber-400
                    rounded-full transition"
          onClick={onclickEdit}
          >
              <Pencil size={14} className='opacity-100'/>
          </button>
          <button
          className={`cursor-pointer w-7 h-7 flex items-center justify-center 
                    ${ goal.status === "Yes" ? "bg-green-500 hover:bg-gray-300/30" : "bg-gray-300/30 hover:bg-green-600"}
                      rounded-full transition`}
          onClick={() => {
            onclickStatus({
              ...goal, 
              status: goal.status === "Yes" ? "No" : "Yes"
            })
          }}
          >
              <Check size={14} />
          </button>
      </div>
    </div>
  )
}

export default GoalItemDetial
