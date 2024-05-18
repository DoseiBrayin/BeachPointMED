import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const useCart = () => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const { setItem } = useLocalStorage({ key: 'order' })

  const deleteCourts = (court) => {
    const filteredCourts = bookCourt.courts.filter((courtItem) => court.id !== courtItem.id)
    setBookCourt({ ...bookCourt, courts: filteredCourts })
    setItem({ ...bookCourt, courts: filteredCourts })
  }

  const deleteRefreshments = (refreshment) => {
    const filteredRefreshments = bookCourt.Refreshments.map((refreshmentItem) => {
      if (refreshment.id === refreshmentItem.id) {
        return { ...refreshmentItem, quantity: 0 }
      }
      return refreshmentItem
    })
    setBookCourt({ ...bookCourt, Refreshments: filteredRefreshments })
    setItem({ ...bookCourt, Refreshments: filteredRefreshments })
  }

  const handleMinus = (event) => {
    const idToMinus = event.target.closest('tr').id
    setBookCourt(prevState => {
      const updatedRefreshments = prevState.Refreshments.map(item => {
        if (item.id === idToMinus) {
          const newQuantity = Math.max(0, parseInt(item.quantity) - 1)
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      return { ...prevState, Refreshments: updatedRefreshments }
    })
  }

  const handlePlus = (event) => {
    const idToPlus = event.target.closest('tr').id
    setBookCourt(prevState => {
      const updatedRefreshments = prevState.Refreshments.map(item => {
        if (item.id === idToPlus) {
          return { ...item, quantity: parseInt(item.quantity) + 1 }
        }
        return item
      })
      return { ...prevState, Refreshments: updatedRefreshments }
    })
  }
  return {
    handleMinus,
    handlePlus,
    deleteCourts,
    deleteRefreshments
  }
}
