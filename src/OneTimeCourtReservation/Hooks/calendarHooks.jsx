import dayjs from 'dayjs'
import { useState } from 'react'

export const calendarHooks = () => {
  function handlePastMonth () {
    setToday(todayState.month(todayState.month() - 1))
  }
  function handleNextMonth () {
    setToday(todayState.month(todayState.month() + 1))
  }
  function handlePastDay () {
    setToday(todayState.subtract(1, 'day'))
  }
  function handleNextDay () {
    setToday(todayState.add(1, 'day'))
  }
  function handleSelectDay (day) {
    setSelectDay(day)
  }

  const currentDate = dayjs()
  const [todayState, setToday] = useState(currentDate)
  const [selectDay, setSelectDay] = useState(null)

  return (
    {
      currentDate,
      todayState,
      selectDay,
      handleSelectDay,
      handlePastDay,
      handleNextDay,
      handlePastMonth,
      handleNextMonth
    }
  )
}
