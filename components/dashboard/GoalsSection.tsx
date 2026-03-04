import GoalCard from './GoalCard'
import GoalRoutineCard from './GoalRoutineCard'
import { useGoal } from '@/features/hooks/useGoal'

function GoalsSection() {
    const goal = useGoal()
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <GoalCard goalActions={goal}/>
        <GoalRoutineCard goalActions={goal}/>

    </section>
  )
}

export default GoalsSection