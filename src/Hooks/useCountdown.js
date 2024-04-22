import { useState } from 'react'

export const useCountdown = (initialCount = 10) => {
  // The countValue state is used to store the countdown value and the firstTime state
  const [countValue, setCountValue] = useState({ countValue: initialCount, firstTime: true })

  // The formatTime function is used to format the countdown value
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
  }

  // The setTimeout function is used to decrease the countdown value by 1 every second
  if (countValue.countValue > 0) {
    setTimeout(() => {
      setCountValue({ ...countValue, countValue: countValue.countValue - 1 })
    }, 1000)
  } else {
    setTimeout(() => {
      if (countValue.firstTime) {
        setCountValue({ ...countValue, countValue: 60, firstTime: false })
      }
    }, 1000)
  }

  if (countValue.countValue === 0 && countValue.firstTime === false) {
    // Do something when the countdown reaches 0
  }

  // The useCountdown hook returns the countdown value and the formatted countdown value
  return { countdown: formatTime(countValue.countValue), countValue: countValue.countValue }
}
