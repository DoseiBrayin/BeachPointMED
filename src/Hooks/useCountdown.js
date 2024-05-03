import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useStartContext } from '../context/StartCountdownContext'
import { useNavigate } from 'react-router-dom'
import { useBookYourCourtContext } from '../context/BookYourCourtContext'

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
}

export const useCountdown = () => {
  const startValue = 600 // 600
  const oneMinuteInSeconds = 180 // 180
  const { start, setStart } = useStartContext()
  const { setItem, getItem, removeItem } = useLocalStorage({ key: 'countdown' })
  const [countValue, setCountValue] = useState({ countValue: startValue, firstTime: true })
  const { setBookCourt, bookCourt } = useBookYourCourtContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (getItem()) {
      setCountValue({ ...countValue, countValue: getItem() })
    }
  }, [])

  useEffect(() => {
    let timerId

    const handleCountdown = () => {
      // The countdown is decremented by 1 every second
      if (countValue.countValue > 0) {
        timerId = setTimeout(() => {
          setCountValue((prevCountValue) => {
            const newCountValue = prevCountValue.countValue - 1
            setItem(newCountValue)
            return {
              ...prevCountValue,
              countValue: newCountValue
            }
          })
        }, 1000)
      } else {
        if (countValue.firstTime) {
          // The countdown is reset to 1 minute
          setCountValue({ ...countValue, countValue: oneMinuteInSeconds, firstTime: false })
          setItem(countValue.countValue)
        } else {
          // When the countdown reaches 0, the user is redirected to the LocationSelection page
          navigate('/LocationSelection')
          // The countdown is reset to its initial value
          setStart(false)
          // The location is removed from the context
          setBookCourt({ ...bookCourt, location: null })
          // The countdown is reset to 1 minute
          setCountValue({ ...countValue, countValue: startValue, firstTime: true })
          // The countdown is removed from the local storage
          removeItem()
        }
      }
    }

    if (start) {
      handleCountdown()
    }

    return () => clearInterval(timerId)
  }, [start, countValue.countValue])

  const resetCountdown = () => {
    setStart(false)
    setCountValue({ ...countValue, countValue: startValue, firstTime: true })
    setBookCourt({ ...bookCourt, location: null })
    removeItem()
  }

  return { countdown: formatTime(countValue.countValue), countValue: countValue.countValue, setCountValue, startValue, removeItem, resetCountdown }
}
