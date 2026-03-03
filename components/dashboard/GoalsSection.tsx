import React from 'react'
import GoalCard from './GoalCard'
import GoalRoutineCard from './GoalRoutineCard'

function GoalsSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <GoalCard />
        <GoalRoutineCard />
    </section>
  )
}

export default GoalsSection