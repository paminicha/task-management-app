
export function filterDateRange<T>({
  data,
  startDate,
  endDate,
  getStart,
  getEnd,
}: {
  data: T[]
  startDate?: string | null
  endDate?: string | null
  getStart: (item: T) => string
  getEnd: (item: T) => string
}): T[] {

  return data.filter(item => {
    const start = new Date(getStart(item))
    const end = new Date(getEnd(item))

    if (startDate && start < new Date(startDate)) return false
    if (endDate && end > new Date(endDate)) return false

    return true
  })
}


export function sortData<T>(
  data: T[],
  sort: string,
  getTitle: (item: T) => string,
  getDate: (item: T) => string
): T[] {

  const sorted = [...data]

  switch (sort) {
    case "title-asc":
      return sorted.sort((a, b) =>
        getTitle(a).localeCompare(getTitle(b))
      )

    case "title-desc":
      return sorted.sort((a, b) =>
        getTitle(b).localeCompare(getTitle(a))
      )

    case "date-asc":
      return sorted.sort((a, b) =>
        new Date(getDate(a)).getTime() -
        new Date(getDate(b)).getTime()
      )

    case "date-desc":
      return sorted.sort((a, b) =>
        new Date(getDate(b)).getTime() -
        new Date(getDate(a)).getTime()
      )

    default:
      return sorted
  }
}