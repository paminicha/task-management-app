import { TaskStatus, TaskPriority, SortOption }from "@/Data/task"

type Props = {
  title:string, 
  setSearch:(value: string)=>void, 
  search:string, 
  setStatus: (value: TaskStatus) => void,
  setCategory:(value: string)=>void,
  setPriority:(value: TaskPriority)=>void,
  setStartDate:(value: string)=>void,
  setEndDate:(value: string)=>void,
  setSort: any,
} 


export default function DashboardHeader({title, setSearch, search, setStatus,
  setCategory, setPriority, setStartDate, setEndDate, setSort}: Props) {

  return (
    <div className="p-3">
      <h1 className="text-2xl font-bold p-3">{title}</h1>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-2 mb-3 px-3">
        <input
          className="px-4 py-2 border rounded-lg shadow-sm w-full sm:w-[450px]"
          placeholder="Search task..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded-lg"
          onChange={e => setStatus(e.target.value as TaskStatus)}
        >
          <option value="All">All</option>
          <option value="Todo">Todo</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
        
        <select className="border px-3 py-2 rounded-lg" onChange={e => setPriority(e.target.value as TaskPriority)}>
          <option value="all">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <select 
          className="px-3 py-2 border rounded-lg"
          onChange={e => setCategory(e.target.value)}
        >
          <option value="All" >All Task Category</option>
          <option value="Work" >Work</option>
          <option value="Family" >Family</option>
          <option value="Personal" >Personal</option>
        </select>

        <select className="border px-3 py-2 rounded-lg" onChange={e => setSort(e.target.value as SortOption)}>
          {/* "title-asc" | "title-desc" | "date-asc" | "date-desc" */}
          <option value="title-asc">A - Z</option>
          <option value="title-desc">Z - A</option>
          <option value="date-asc">Newest</option>
          <option value="date-desc">Oldest</option>
        </select>

        <input type="date" className="px-3 py-2 border rounded-lg" onChange={e => setStartDate(e.target.value)} />
        <input type="date" className="px-3 py-2 border rounded-lg" onChange={e => setEndDate(e.target.value)} />

      </div>

    </div>
  )
}
