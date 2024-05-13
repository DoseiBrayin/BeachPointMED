import dayjs from 'dayjs'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCourtDateContext } from '../../context/CourtsDateContext'

export const calendarHooks = () => {
  const currentDate = dayjs()
  const { setDataCourtDate } = useCourtDateContext()
  const [todayState, setToday] = useState(currentDate)
  const [selectDay, setSelectDay] = useState(null)
  const { locationId } = useParams()

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
  async function handleSelectDay (day) {
    setSelectDay(day)
    try {
      const url = import.meta.env.VITE_BEACHPOINT_API_URL;
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN;
      
      const response = await axios.get(`${url}timeCourts/timeCourts/${day.format("YYYY-MM-DD")}/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      setDataCourtDate(response.data)
    } catch {
      setDataCourtDate([])
    }
  }

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
