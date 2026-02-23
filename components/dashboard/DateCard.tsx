import { Card } from "../ui/Card"

export default function DateCard({ date } : {date: Date}) {
  const d = new Date(date)

  const day = d.getDate()
  const monthYear = d.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="pl-5">
        <p className="text-sm">Date</p>
        <div className="pl-4 flex items-center gap-4">
            <div className="text-center leading-none">
                <p className="text-4xl ">{day}</p>
            </div>
            <div>
                <p className="text-lg font-semibold">{monthYear}</p>
                <p className="text-sm">{time} TH</p>
            </div>
        </div>
    </Card>
  )
}
