import { useState } from 'react'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const nextViewState = () => {
  const [view, setNextView] = useState(false)
  const { setBookCourt } = useBookYourCourtContext()

  const handleNextView = () => {
    setNextView(true)
  }
  const handlePastView = () => {
    setBookCourt({ location: null, courts: [] })
    setNextView(false)
  }

  return {
    handleNextView,
    handlePastView,
    setNextView,
    view
  }
}
