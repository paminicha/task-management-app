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
    <div className="w-32 shrink-0 bg-gray-50 p-2 rounded-xl shadow-sm flex flex-col">
      <div>
        <h4 className="font-semibold text-gray-600 text-wrap"> {goal.title} </h4>
        <p className="mt-1 text-xs text-gray-400"> {goal.type} </p>
      </div>

      <div className="mt-auto flex justify-end gap-1">
        {/* <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-black focus:ring-0" /> */}
        <button
          className="cursor-pointer w-7 h-7 flex items-center justify-center 
                    bg-gray-300 hover:bg-amber-400
                    rounded-full transition"
          onClick={onclickEdit}
          >
              <Pencil size={14} />
          </button>
          <button
          className={`cursor-pointer w-7 h-7 flex items-center justify-center 
                    ${ goal.status === "Yes" ? "bg-green-500 hover:bg-gray-300" : "bg-gray-300 hover:bg-green-600"}
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
      {/* {isOpen && ( 
        <EditGoalModal 
          goal={goalActions.selectedGoal}
          onClose={() => setIsOpen(false)}
          onSave={ (updated) => {
            goalActions.updateGoal(updated)
            setIsOpen(false)
          }}
        />
            )} */}
    </div>
  )
}

export default GoalItemDetial
