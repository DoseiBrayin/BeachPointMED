import dayjs from "dayjs"
import { useState } from "react"

export const calendarHooks = () => {

  function handlePastMonth(){
   
    setToday(todayState.month(todayState.month() - 1))
  }
  function handleNextMonth(){
   
    setToday(todayState.month(todayState.month() + 1))
  }

    const currentDate = dayjs()
    const [todayState, setToday] = useState(currentDate)


  return (
    {
      currentDate,
      todayState,
      handlePastMonth,
      handleNextMonth
    } 
  )
}
