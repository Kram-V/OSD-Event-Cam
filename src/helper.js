export const formatDate = (isoString) => {
  const date = new Date(isoString)
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${mm}-${dd}-${yyyy}`
}

export const formatTime = (timeString) => {
  const fullDateString = `1970-01-01T${timeString}`

  const date = new Date(fullDateString)

  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')

  const period = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12 || 12

  return `${hours}:${minutes} ${period}`
}
