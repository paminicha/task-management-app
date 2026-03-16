import React from 'react'

function ProgressLine({progress}:{progress:number}) {
  return (
    <div className="flex items-center gap-3">
        <div className="w-5 h-5"></div>
        <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full rounded-full" style={{ width: `${progress}%` , backgroundColor: "var(--color-progress)" }} ></div>
        </div>
        <span className="text-sm font-semibold">{progress}%</span>
    </div>
  )
}

export default ProgressLine