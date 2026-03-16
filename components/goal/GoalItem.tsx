import { Goal } from '@/Data/task'
import { Check } from 'lucide-react'

interface Props {
  goal : Goal
  onclick: (updated: Goal) => void
}

function GoalItem({goal, onclick}: Props) {
  return (
    <div className="w-32 shrink-0 p-2 rounded-xl border-gray-300 border shadow-sm flex flex-col">
      <div>
        {/* OLD: <h4 className="font-semibold text-wrap"> {goal.title} </h4>  Alternative 2 line clamp(no installation): className="font-semibold w-full break-words overflow-hidden display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"*/}
        <h4 className="font-semibold line-clamp-2" > {goal.title} </h4>
        <p className="mt-1 text-xs text-gray-400"> {goal.type} </p>
      </div>

      <div className="mt-auto flex justify-end">
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
