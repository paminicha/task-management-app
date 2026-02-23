"use client"
import React from "react"
import Link from "next/link"

const menu = [
  { label: "Home", href: "/" },
  { label: "Task", href: "/dashboard/task" },
  { label: "Calendar", href: "/dashboard/calendar" },
  { label: "Setting", href: "/dashboard/setting" },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[var(--color-bg)] border-r"> {/* style={{ backgroundColor: "var(--color-bg)" }} */}
      <div className="p-6 font-bold text-xl">My Task</div>

      <nav className="space-y-2 px-4">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 rounded hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
