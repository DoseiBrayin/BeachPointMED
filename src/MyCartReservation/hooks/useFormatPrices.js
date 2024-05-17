import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { formatPrice } from '../../Hooks/formatPrice'

export const useFormatePrices = () => {
  const { bookCourt, setBookCourt } = useBookYourCourtContext()

  const getTotalPrice = ({ list }) => {
    return list.reduce((total, item) => {
      const quantity = item.quantity !== undefined ? parseInt(item.quantity) : 1
      return total + (parseFloat(item.price) * quantity)
    }, 0)
  }
  const getGrandTotalPrice = () => {
    const totalCourts = bookCourt.courts.reduce((total, court) => total + parseFloat(court.price), 0)
    const totalRefreshments = bookCourt.Refreshments.reduce((total, refreshment) => {
      return total + (parseFloat(refreshment.price) * parseInt(refreshment.quantity))
    }, 0)
    const total = totalCourts + totalRefreshments
    return total
  }
  const handleSetContext = () => {
    console.log(getGrandTotalPrice())
    setBookCourt(prevBookCourt => ({
      ...prevBookCourt,
      GrandTotal: formatPrice(getGrandTotalPrice())
    }))
  }

  return {
    getTotalPrice,
    getGrandTotalPrice,
    handleSetContext
  }
}
