import { Card } from "../ui/Card"

type ProgressCardProps = {
  value: number // 0 - 100
}

export default function ChartCard({ value }: ProgressCardProps) {
  const radius = 85
  const stroke = 11
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (value / 100) * circumference

  return (
    <Card className="h-54">
      <h3 className="pl-2 font-semibold ">Today Progress</h3>

      <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#e5e7eb" 
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="var(--color-progress)"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-500"
          />
        </svg>

        <span className="absolute text-2xl font-bold">
          {value}%
        </span>
      </div>
    </Card>
  )
}
