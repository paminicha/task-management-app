import TaskItem from "./TaskItem"
import { Card } from "../ui/Card"

export default function TodayTaskList() {
  return (
    <Card className="h-100 pl-2 flex flex-col">

      <div className="flex justify-between p-2">
        <h3 className="font-semibold">Today Tasks</h3>
        <button className="w-8 h-8 rounded-full btn-primary">+</button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        <TaskItem title="Write Report" progress={89} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
        <TaskItem title="Read a Book" progress={39} note="note... .... ... .. .. ...... .." time="8.00-16.00" date="30/01/26" priority="priority"/>
        <TaskItem title="Email Catch Up Summary" progress={0} note="note... .... ... .. .. ...... .." time="14.00-15.00" date="30/01/26" priority=""/>
        <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
        <TaskItem title="Buy Shampoo" progress={0} note="note... .... ... .. .. ...... .." time="8.00-17.00" date="30/01/26" priority=""/>
      </div>
    </Card>
  )
}
