import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useStartContext } from '../context/StartCountdownContext'
import { useNavigate } from 'react-router-dom'

// The formatTime function is used to format the countdown value
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
}

export const useCountdown = (initialCount = 10) => {
  // The countValue state is used to store the countdown value and the firstTime state
  const { start } = useStartContext()
  const { setItem, getItem } = useLocalStorage({ key: 'countdown' })
  const [countValue, setCountValue] = useState({ countValue: initialCount, firstTime: true })
  const navigate = useNavigate()

  useEffect(() => {
    if (getItem()) {
      setCountValue({ ...countValue, countValue: getItem() })
    }
  }, [])

  if (!start) {
    setItem(0)
    return { countdown: '0:00', countValue: 0 }
  }

  // The setTimeout function is used to decrease the countdown value by 1 every second
  if (countValue.countValue > 0) {
    setTimeout(() => {
      setCountValue({ ...countValue, countValue: countValue.countValue - 1 })
      setItem(countValue.countValue - 1)
    }, 1000)
  } else {
    setTimeout(() => {
      if (countValue.firstTime) {
        setCountValue({ ...countValue, countValue: 10, firstTime: false })
        setItem(countValue.countValue)
      }
    }, 1000)
  }

  // Do something when the countdown reaches 0
  useEffect(() => {
    if (countValue.countValue === 0 && countValue.firstTime === false) {
      navigate('/LocationSelection')
      setItem(0)
    }
  }, [countValue.countValue, countValue.firstTime])

  // The useCountdown hook returns the countdown value and the formatted countdown value
  return { countdown: formatTime(countValue.countValue), countValue: countValue.countValue }
}
