// type CardProps = {
//   children: React.ReactNode
// }

// export function Card({ children }: CardProps) {
//   return (
//     <div className="bg-white rounded-xl shadow-sm border p-2">
//       {children}
//     </div>
//   )
// }

import clsx from "clsx"

type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border-gray-300 border-1 shadow-sm p-2",
        className
      )}
    >
      {children}
    </div>
  )
}

{/* type CardProps = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${className}`}>
      {children}
    </div>
  )
} */}
