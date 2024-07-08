import '../styles/customCheckbox.css'
import { useGetReservationsQuery } from '../Admin/Reservations/services/reservationApi'

const locations = ['Barranquilla', 'Bogota', 'Bucaramanga']
export const LocationFilter = () => {
  const { data: reservaciones, isError, isLoading, error } = useGetReservationsQuery()
  if (isLoading) {
    return <div>Cargando...</div>
  }
  if (isError) {
    return <div>{error}</div>
  }
  return (
    <section className="w-[30rem]">
        <div className="flex flex-col">
          <div className='flex gap-2 items-center'>
            <input type="checkbox" className='custom-checkbox' />
            <span>All locations</span>
          </div>
            {reservaciones.data.map(location => (
            <div key={location.id} className='flex gap-2 items-center'>
              <input type="checkbox" className="custom-checkbox" />
              <span>{location.address}</span>
            </div>
            ))}
        </div>
    </section>
  )
}
