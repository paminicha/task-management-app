import React from 'react'
import ProgressLine from '../ui/ProgressLine';
import { Task } from '@/app/Data/task';

type TaskItemProps = Task & {
  isActive: boolean
  onClick: () => void
}


function TaskItem({id, title, description,note, startTime, endTime, startDate, endDate, progress, priority, category, isActive, onClick}: TaskItemProps) {
  return (
        <div onClick={onClick} 
            className={`rounded-xl shadow p-2 mx-2 cursor-pointer transition border
            ${isActive ? "bg-blue-50 border-blue-500 ring-2 ring-blue-200" : "bg-gray-50 border-transparent hover:bg-slate-100"}
            `}>

            {/* Top Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 bg-gray-300 rounded-full" />  {/* click check */}
                    <div>
                        <div className="flex items-center gap-3">
                            <h3 className="font-semibold text-gray-800">{title}</h3>
                            <p className="text-sm text-gray-400">{priority}</p>
                        </div>
                        <p className="text-sm text-gray-400">{note}</p>
                    </div>
                </div>

                <div className="text-right text-sm text-gray-500">
                    <div className="font-medium">{startTime}</div>
                    <div>{startDate===endDate ? endDate : `${startDate} - ${endDate}`}</div>
                </div>
            </div>

            {/* Bottom row  */}
            <ProgressLine progress={progress}/>

        </div>
  )
}

export default TaskItem