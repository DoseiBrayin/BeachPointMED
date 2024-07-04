import MockLocation from '../../mocks/locationData.json'
import LocationModal from '../../../components/Modal'

export const LocationTable = () => {
  const thStyle = 'text-start font-normal text-[12px] text-[#667085]'
  const tdStyle = 'text-start text-[#5D6679] font-inter font-[400] text-[14px]'
  return (
    <section className='h-screen flex flex-col'>
      <header className='w-full flex justify-end'>
        <button className='bg-[#1570EF] text-white text-[14px] px-6 py-2 rounded-lg'>Create Reservation</button>
      </header>

      <main className='w-full h-full flex flex-col rounded-2xl px-5'>
        <table className='w-full border-[1px] border-[#E8F1FD] mt-7 '>
          <thead className='h-[38px] bg-[#F7F9FC]'>
            <tr>
              <th className={`${thStyle} pl-4`}>Location</th>
              <th className={thStyle}>Court #</th>
              <th className={thStyle}>Date</th>
              <th className={thStyle}>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {MockLocation.map((reservation) => (
              <tr key={reservation.id} className='border-[1px] border-[#E8F1FD] h-[55px]'>
                <td className={`${tdStyle} pl-4`}>{reservation.location}</td>
                <td className={tdStyle}>{reservation.court}</td>
                <td className={tdStyle}>{reservation.initial_hour} - {reservation.final_hour}</td>
                <td className={tdStyle}>{reservation.status}</td>
                <td className={`${tdStyle} cursor-pointer`}><img src="/three_dots.svg" alt="" /></td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className='h-[4rem] mt-2'>
              <td colSpan="7">
                <div className='flex justify-between mx-3'>
                  <button>Previous</button>
                  <button>Next</button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
        <LocationModal isOpen={false} onClose={() => false}>
          <LocationModal.Header>Header del modelo</LocationModal.Header>
          <LocationModal.Body classNamePadre='flex justify-center' classNameHijo='border border-gray-300 rounded-lg flex flex-col justify-center items-center ' >
          </LocationModal.Body>
          <LocationModal.Footer className='gap-4 flex items-center'>
          </LocationModal.Footer>
        </LocationModal>

    </section>
  )
}
