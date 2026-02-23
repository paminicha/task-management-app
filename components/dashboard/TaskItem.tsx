import React from 'react'



interface TaskItemProps {
    // id: number;
    title: string;
    note: string;
    time: string;
    date: string;
    progress: number;
    priority: string;
}

function TaskItem({title, note, time, date, progress, priority}: TaskItemProps) {
  return (
        <div className=" bg-gray-100 rounded-xl shadow p-2 mx-2">
  
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
                    <div className="font-medium">{time}</div>
                    <div>{date}</div>
                </div>
            </div>

            {/* Bottom row  */}
            <div className="flex items-center gap-3">
                <div className="w-5 h-5"></div>
                <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${progress}%`, backgroundColor: "var(--color-progress)"}} ></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">{progress}%</span>
            </div>

        </div>
  )
}

export default TaskItem