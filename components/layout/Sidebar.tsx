"use client"

import Link from "next/link"
import { Home, CheckSquare, Calendar, Trophy, PartyPopper, Settings } from "lucide-react"

const menu = [
  { label: "Home", href: "/", icon: Home },
  { label: "Task", href: "/dashboard/task", icon: CheckSquare },
  { label: "Event", href: "/dashboard/eventreminder", icon: PartyPopper },
  { label: "Goal", href: "/dashboard/goal", icon: Trophy },
  { label: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { label: "Setting", href: "/dashboard/setting", icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="bg-[var(--color-bg)] border-r flex flex-col w-16 md:w-64 transition-all">
      {/* logo */}
      <div className="p-4 font-bold text-xl hidden md:block">
        My Task
      </div>

      <nav className="flex flex-col gap-2 px-2">
        {menu.map((item) => {
          const Icon = item.icon

          return (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 p-3 rounded hover:bg-slate-100/30" >
              <Icon size={20} />

              {/* hide text on mobile */}
              <span className="hidden md:inline"> {item.label} </span>
            </Link>
          )
        })}

      </nav>
      
    </aside>
  )
}