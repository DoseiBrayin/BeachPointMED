import { useEffect, useState } from 'react'

export const useCountdown = () => {
  // Obtener y establecer el estado del contador en localStorage
  const storedCountdown = localStorage.getItem('countdown')
  const initialCountdown = storedCountdown ? JSON.parse(storedCountdown) : { value: 190, firstTime: false }

  // Inicializar el estado del contador
  const [countVal, setCountVal] = useState(initialCountdown)

  useEffect(() => {
    const timerId = setTimeout(() => {
      // Lógica del contador
      if (countVal.value > 0 && !countVal.firstTime) {
        setCountVal((prevState) => ({ value: prevState.value - 1, firstTime: false }))
      } else if (countVal.value === 0 && !countVal.firstTime) {
        setCountVal({ value: 10, firstTime: true })
      } else if (countVal.firstTime && countVal.value > 0) {
        setCountVal((prevState) => ({ value: prevState.value - 1, firstTime: true }))
      }
    }, 1000)

    // Guardar el estado del contador en localStorage
    localStorage.setItem('countdown', JSON.stringify(countVal))

    // Limpiar el temporizador cuando el componente se desmonta
    return () => clearTimeout(timerId)
  }, [countVal])

  // Formatear el tiempo para mostrarlo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`
  }

  return {
    countdown: formatTime(countVal.value),
    countValue: countVal.value
  }
}
