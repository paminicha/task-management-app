"use client"
import { useState, useMemo, useEffect } from "react"
import { Event } from "@/Data/event"
// import { mockEvents } from "@/Data/mockEvents"
import { fetchEvent, createEvent, updateEvent, deleteEvent } from "../service/event.service"
import { error } from "console"
import { filterDateRange, sortData } from "./datesortFilter"

const STORAGE_KEY = "events"

export function useEvent() {
    const [events, setEvents] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    const [search, setSearch] = useState("")
    const [searchStartDate, setSearchStartDate] = useState("")
    const [searchEndDate, setSearchEndDate] = useState("")
    const [sort, setSort] = useState<"az" | "newest">("az")

    // // Load from localStorage
    // useEffect(() => {
    //     const stored = localStorage.getItem(STORAGE_KEY)
    //     if (stored) {
    //     setEvents(JSON.parse(stored))
    //     }
    // }, [])

    // // Sync to localStorage
    // useEffect(() => {
    //     localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
    // }, [events])

    // Load from API
    useEffect(() => {
        async function Load() {
            try {
                setLoading(true)
                const data = await fetchEvent()
                setEvents(data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        Load()
    }, [])

    // const filteredEvents = useMemo(() => {
    //     return events.filter(e => {
    //         const matchSearch = e.title.toLowerCase().includes(search.toLowerCase())
    //         const matchDate =
    //             (!searchStartDate || new Date(e.start) >= new Date(searchStartDate)) &&
    //             (!searchEndDate || new Date(e.end) <= new Date(searchEndDate))
    //         return matchSearch && matchDate
    //     })
    // },
    // [events, search, searchStartDate, searchEndDate])

    // const sortedEvents = useMemo(() => {
    //     return sortData(events, sort, event => event.title, event => event.start)
    // }, [filteredEvents, sort])

    // Add
    const addEvent = async (event: Event) => {
        setEvents(prev => [...prev, event])
        try {
            await createEvent(event)
        } catch (err) {
        // 2. ถ้า error → rollback
        setEvents(prev => prev.filter(e => e.id !== event.id))
        }
    }

    // Update
    const updateEventhandler = async(updated: Event) => {
        const oldevents = [...events]
        setEvents(prev =>
        prev.map(e => (e.id === updated.id ? updated : e))
        )
        setSelectedEvent(updated)
        try {
            await updateEvent(updated.id, updated)
        } catch (err) {
            setEvents(oldevents)// 2. ถ้า error → rollback
            setSelectedEvent(null)
            console.error("Update failed:", err)
        }
    }

    // Delete
    const deleteEventHandler = async (id: string) => {
        const oldevents = [...events]
        setEvents(prev => prev.filter(e => e.id !== id))
        setSelectedEvent(null)
        try {
            await deleteEvent(id)
        } catch (err) {
            setEvents(oldevents)// 2. ถ้า error → rollback
        }
    }

    // Today's Events
    const todayEvents = useMemo(() => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        return events.filter(e => {
            const start = new Date(e.start)
            const end = new Date(e.end)

            start.setHours(0, 0, 0, 0)
            end.setHours(23, 59, 59, 999)

            return start <= today && end >= today
        })
    }, [events])

    return {
        events,
        todayEvents,
        loading,
        error,

        selectedEvent,
        setSelectedEvent,

        addEvent,
        updateEvent: updateEventhandler,
        deleteEvent: deleteEventHandler,

        search, setSearch,
        searchStartDate, setSearchStartDate,
        searchEndDate, setSearchEndDate,
        sort, setSort,
        
    }
}