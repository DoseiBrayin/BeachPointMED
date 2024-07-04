import dayjs from 'dayjs'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCourtDateContext } from '../../context/CourtsDateContext'
import { useReservationActions } from '../../Admin/Reservations/hooks/useReservationActions'

export const calendarHooks = () => {
  const currentDate = dayjs()
  const { setDataCourtDate, dataCourtDate } = useCourtDateContext()
  const [todayState, setToday] = useState(currentDate)
  const [selectDay, setSelectDay] = useState(null)
  const { locationId } = useParams()

  // Admin functions
  const { setFilterDay } = useReservationActions()

  function handlePastMonth () {
    setToday(todayState.month(todayState.month() - 1))
  }
  function handleNextMonth () {
    setToday(todayState.month(todayState.month() + 1))
  }
  async function handlePastDay () {
    const pastDay = dataCourtDate.date.subtract(1, 'day')
    try {
      const url = import.meta.env.VITE_BEACHPOINT_API_URL
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN

      const response = await axios.get(`${url}timeCourts/timeCourts/${pastDay.format('YYYY-MM-DD')}/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setDataCourtDate({ data: response.data, date: pastDay })
    } catch {
      setDataCourtDate([])
    }
  }
  async function handleNextDay () {
    const nextDay = dataCourtDate.date.add(1, 'day')
    try {
      const url = import.meta.env.VITE_BEACHPOINT_API_URL
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN

      const response = await axios.get(`${url}timeCourts/timeCourts/${nextDay.format('YYYY-MM-DD')}/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setDataCourtDate({ data: response.data, date: nextDay })
    } catch {
      setDataCourtDate([])
    }
  }
  async function handleSelectDay (day) {
    setSelectDay(day)

    const Reg = /\b\d{4}-\d{2}-\d{2}\b/
    if (dataCourtDate?.data?.[0]?.date === day.format('YYYY-MM-DD') ||
      (dataCourtDate?.data === null && dataCourtDate?.message?.match(Reg)?.[0] === day.format('YYYY-MM-DD'))) {
      return
    }

    try {
      const url = import.meta.env.VITE_BEACHPOINT_API_URL
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN

      const response = await axios.get(`${url}timeCourts/timeCourts/${day.format('YYYY-MM-DD')}/${locationId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const dataCourtArray = { data: response.data, date: day }
      setDataCourtDate(dataCourtArray)
    } catch {
      setDataCourtDate([])
    }
  }

  // Admin functions, funciones hechas solo para el use del componente en el admin dashboard
  const handleAdminSelectDay = (day) => {
    setFilterDay(day.format('YYYY-MM-DD'))
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
      handleNextMonth,
      // Admin functions
      handleAdminSelectDay
    }
  )
}
