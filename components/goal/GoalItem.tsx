import React from 'react'
import { Goal } from '@/Data/task'
import { Check } from 'lucide-react'

interface Props {
  goal : Goal
  onclick: (updated: Goal) => void
}

function GoalItem({goal, onclick}: Props) {
  return (
    <div className="w-32 shrink-0 bg-gray-50 p-2 rounded-xl border-gray-300 border-1 shadow-sm flex flex-col">
      <div>
        {/* <h4 className="font-semibold text-gray-600 text-wrap"> {goal.title} </h4> 
        className="font-semibold text-gray-600 w-full break-words overflow-hidden display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"*/}
        <h4 className="font-semibold text-gray-600 line-clamp-2" > {goal.title} </h4>
        <p className="mt-1 text-xs text-gray-400"> {goal.type} </p>
      </div>

      <div className="mt-auto flex justify-end">
        {/* <input type="checkbox" className="h-5 w-5 rounded border-gray-300 text-black focus:ring-0" /> */}
        <button
          className={`cursor-pointer w-7 h-7 flex items-center justify-center 
                    ${ goal.status === "Yes" ? "bg-green-500 hover:bg-gray-300" : "bg-gray-300 hover:bg-green-600"}
                      rounded-full transition`}
          onClick={() => {
            onclick({
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

export default GoalItem
