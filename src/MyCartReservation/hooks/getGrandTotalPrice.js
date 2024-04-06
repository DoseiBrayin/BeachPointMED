import { mockCourts } from '../mocks/courts.json'
import { mockRefreshments } from '../mocks/refreshments.json'

export const getGrandTotalPrice = () => {
  const totalCourts = mockCourts.map(court => {
    return parseInt(court.cost)
  })
  const totalRefreshments = mockRefreshments.map(refreshment => {
    return parseInt(refreshment.cost)
  })
  const court = totalCourts.reduce((acc, value) => acc + value, 0)
  const refreshment = totalRefreshments.reduce((acc, value) => acc + value, 0)
  return court + refreshment
}
