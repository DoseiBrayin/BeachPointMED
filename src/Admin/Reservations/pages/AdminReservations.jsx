import { TableReservations } from '../components/TableReservations'
import mockReservations from '../../mocks/reserveData.json'

export const AdminReservations = () => {
  return (
    <div>
      <TableReservations reservations={mockReservations} itemsPerPage={8} />
    </div>
  )
}
