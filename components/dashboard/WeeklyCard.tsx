import React from 'react'
import { Card } from "../ui/Card"

const tasks = [
  "Fertilize Gerbera ปุ๋ยอินทรีย์ Fertilize Gerbera ปุ๋ยอินทรีย์",
  "ซื้อพู่สาย",
]
function WeeklyCard() {
  return (
    <Card className="h-100 flex flex-col">
        <div className="flex justify-between p-2">
            <h3 className="font-semibold">Weekly Tasks</h3>
            <button className="w-8 h-8 rounded-full btn-primary">+</button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto space-y-2 px-4">
            {tasks.map((task, idx) => (
            <div key={idx} className="flex items-start gap-3 border-b pb-1 mb-4">
                <input type="checkbox" className="w-5 h-5 shrink-0 self-start" />
                <span className="text-gray-700 ">{task}</span>
            </div>
            ))}

            {/* Empty rows */}
            {[...Array(6)].map((_, i) => (
            <div key={i} className="border-b h-6 pb-7 mb-4" />
            ))}
        </div>

    </Card>
  )
}

export default WeeklyCard