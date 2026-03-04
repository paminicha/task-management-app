"use client"
import { useState, useMemo, useEffect } from "react"
import { Goal } from "@/Data/task"
import { mockGoals } from "@/Data/mockGoals"
// import { fetchgoal, creategoal, updategoal, deletegoal } from "../service/goal.service"
// import { error } from "console"

const STORAGE_KEY = "goals"
const LAST_RESET_KEY = "goals_last_reset"

export function useGoal() {
    const [goals, setGoals] = useState<Goal[]>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("goals")
        return saved ? JSON.parse(saved) : mockGoals
        }
        return mockGoals
    })
    // const [goals, setgoals] = useState<goal[]>([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState<string | null>(null)
    const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)

    // const [search, setSearch] = useState("")
    // const [searchStartDate, setSearchStartDate] = useState("")
    // const [searchEndDate, setSearchEndDate] = useState("")
    // const [sort, setSort] = useState<"az" | "newest">("az")

    // Sync to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(goals))
    }, [goals])

    // // Load from API
    // useEffect(() => {
    //     async function Load() {
    //         try {
    //             setLoading(true)
    //             const data = await fetchGoal()
    //             setGoals(data)
    //         } catch (error: any) {
    //             setError(error.message)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }
    //     Load()
    // }, [])

    // const filteredGoals = useMemo(() => {
    //     return goals.filter(e => {
    //         const matchSearch = e.title.toLowerCase().includes(search.toLowerCase())
    //         const matchDate =
    //             (!searchStartDate || new Date(e.start) >= new Date(searchStartDate)) &&
    //             (!searchEndDate || new Date(e.end) <= new Date(searchEndDate))
    //         return matchSearch && matchDate
    //     })
    // },
    // [goals, search, searchStartDate, searchEndDate])

    // const sortedGoals = useMemo(() => {
    //     return sortData(goals, sort, goal => goal.title, goal => goal.start)
    // }, [filteredGoals, sort])

    useEffect(() => {
        const today = new Date().toDateString()
        const lastReset = localStorage.getItem(LAST_RESET_KEY)

        if (lastReset !== today) {
            setGoals(prev =>
            prev.map(goal =>
                goal.type === "Daily"
                ? { ...goal, status: "No" }
                : goal
            )
            )

            localStorage.setItem(LAST_RESET_KEY, today)
        }
    }, [])

    // Add
    const addGoal = async (goal: Goal) => {
        setGoals(prev => [...prev, goal])
        // try {
        //     await createGoal(goal)
        // } catch (err) {
        // // 2. ถ้า error → rollback
        // setGoals(prev => prev.filter(e => e.id !== goal.id))
        // }
    }

    // Update
    const updateGoalhandler = async(updated: Goal) => {
        const oldgoals = [...goals]
        setGoals(prev =>
            prev.map(e => (e.id === updated.id ? updated : e))
        )
        setSelectedGoal(updated)
        // try {
        //     await updateGoal(updated.id, updated)
        // } catch (err) {
        //     setGoals(oldgoals)// 2. ถ้า error → rollback
        //     setSelectedGoal(null)
        //     console.error("Update failed:", err)
        // }
    }

    // Delete
    const deleteGoalHandler = async (id: string) => {
        const oldgoals = [...goals]
        setGoals(prev => prev.filter(e => e.id !== id))
        setSelectedGoal(null)
        // try {
        //     await deleteGoal(id)
        // } catch (err) {
        //     setGoals(oldgoals)// 2. ถ้า error → rollback
        // }
    }

    // Today's Goals
    const todayGoals = useMemo(() => {
        return goals.filter(e => e.status === "No")
    }, [goals])

    return {
        goals,
        todayGoals,
        // loading,
        // error,

        selectedGoal,
        setSelectedGoal,

        addGoal,
        updateGoal: updateGoalhandler,
        deleteGoal: deleteGoalHandler,

        // search, setSearch,
        // searchStartDate, setSearchStartDate,
        // searchEndDate, setSearchEndDate,
        // sort, setSort,
        
    }
}