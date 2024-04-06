import { formatPrice } from '../hooks/formatPrice'
import { getTotalsCOP } from '../hooks/getTotalPrice'
import { mockRefreshments } from '../mocks/refreshments.json'

export const Refreshments = () => {
  const thStyle = 'font-[600] font-inter text-[14px] text-center'
  const trStyle = 'border-b-[1px] h-[44px]'
  const tdStyle = 'font-inter text-[14px]'

  return (
        <div className='px-[5%] mt-4 w-full max-w-[52.5rem]'>
          <h1 className="text-[#2E2E2E] font-[700] text-[20px] md:text-[28px] md:text-[#000]">Refreshments</h1>
          <table className='w-full shadow-lg'>
            <thead className='text-left'>
              <tr>
                  <th className={`${thStyle} hidden md:table-cell`}>Item</th>
                  <th className={`${thStyle} hidden md:table-cell`}>Varient</th>
                  <th className={`${thStyle} md:hidden`}>Item/Varient</th>
                  <th className={thStyle}>Quantity</th>
                  <th className={thStyle}>Cost</th>
                  <th></th>
              </tr>
            </thead>
            <tbody className='border-[1px] text-center'>
            {
                  mockRefreshments.map((item, index) => {
                    const price = formatPrice(item.cost)
                    return (
                      <tr key={index} className={trStyle}>
                          <td className={`${tdStyle} hidden md:table-cell`}>{item.item}</td>
                          <td className={`${tdStyle} hidden md:table-cell`}>{item.varient}</td>
                          <td className={`${tdStyle} md:hidden`}>{item.item} {item.varient}</td>
                          <td className={`${tdStyle} table-cell`}>
                            <div className="flex gap-2 border-[0.031rem] w-fit px-1 border-[#000] justify-center rounded-xl">
                                <button><img src="/MyCartReservationImages/minus.svg" alt="" /></button>
                                <p>{item.quantity}</p>
                                <button><img src="/MyCartReservationImages/plus.svg" alt="" /></button>
                            </div>
                          </td>
                          <td className={`${tdStyle}`}>{price} COP</td>
                          <td><img src="/MyCartReservationImages/trash.svg" className="w-[12px] h-[12px] " alt="" /></td>
                      </tr>
                    )
                  })
            }
            </tbody>
          </table>
          <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">Subtotal</h1>
            <p className="text-[14px] font-[400]">{getTotalsCOP({ list: mockRefreshments })} COP</p>
        </div>
        </div>
  )
}
