import { mockCourts } from '../mocks/courts.json'
import { mockRefreshments } from '../mocks/refreshments.json'
import { formatPrice } from './formatPrice'

export const getGrandTotalPrice = () => {
  const totalCourts = mockCourts.map(court => {
    const listOfPrises = parseInt(court.cost)
    return listOfPrises
  })
  const totalRefreshments = mockRefreshments.map(refreshment => {
    const listOfPrises = parseInt(refreshment.cost)
    return listOfPrises
  })
  const court = totalCourts.reduce((acc, value) => acc + value, 0)
  const refreshment = totalRefreshments.reduce((acc, value) => acc + value, 0)
  const grandTotal = court + refreshment
  return formatPrice(grandTotal.toString())
}
