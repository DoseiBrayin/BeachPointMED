import { formatPrice } from '../hooks/formatPrice'
import { getTotalsCOP } from '../hooks/getTotalPrice'
import { mockCourts } from '../mocks/courts.json'

export const Courts = () => {
  const thStyle = 'font-[600] font-inter text-[14px] text-center'
  const trStyle = 'border-b-[1px] h-[44px]'
  const tdStyle = 'font-inter text-[14px]'

  return (
      <div className='px-[5%] mt-4 w-full max-w-[52.5rem]'>
        <h1 className="text-[#2E2E2E] font-[700] text-[20px] md:text-[28px] md:text-[#000]">Courts</h1>
        <table className='w-full shadow-lg'>
          <thead className='text-left'>
            <tr>
                <th className={`${thStyle} hidden md:block`}>Location</th>
                <th className={thStyle}>Date</th>
                <th className={thStyle}>Time</th>
                <th className={thStyle}>Court #</th>
                <th className={thStyle}>Cost</th>
                <th></th>
            </tr>
          </thead>
          <tbody className='border-[1px] text-center'>
            {
                mockCourts.map((court, index) => {
                  const price = formatPrice(court.cost)
                  return (
                      <tr key={index} className={trStyle}>
                        <td className={`${tdStyle} hidden md:table-cell`}>{court.location}</td>
                        <td className={tdStyle}>{court.date}</td>
                        <td className={tdStyle}>{court.time}</td>
                        <td className={tdStyle}>{court.court}</td>
                        <td className={tdStyle}>{price} COP</td>
                        <td><img src="/MyCartReservationImages/trash.svg" className="w-[12px] h-[12px] " alt="" /></td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
        <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">Subtotal</h1>
            <p className="text-[14px] font-[400]">{getTotalsCOP({ list: mockCourts })} COP</p>
        </div>
      </div>
  )
}
