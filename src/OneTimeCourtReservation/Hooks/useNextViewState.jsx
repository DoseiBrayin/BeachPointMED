import { useState } from 'react'

export const nextViewState = () => {
  const [view, setNextView] = useState(false)
  const handleNextView = () => {
    setNextView(true)
  }
  const handlePastView = () => {
    setNextView(false)
  }
  return {
    handleNextView,
    handlePastView,
    view
  }
}
