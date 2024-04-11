import { mockRefreshments } from '../mocks/refreshments.json'
import { useCart } from '../hooks/useCart'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { useTranslation } from 'react-i18next'

export const Refreshments = () => {
  const { handleMinus, handlePlus, refreshments } = useCart()
  const { formatPrice, getTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')

  return (
        <div className='px-[5%] mt-4 w-full max-w-[52.5rem]'>
          <h1 className="text-[#2E2E2E] font-[700] text-[20px] md:text-[28px] md:text-[#000]">{t('MyCartReservation.Refreshments')}</h1>
          <table className='w-full shadow-lg rounded-lg'>
            <thead className='text-left'>
              <tr>
                  <th className={'font-[600] font-inter text-[14px] text-center hidden md:table-cell'}>
                    {t('MyCartReservation.RefreshmentTableItems.Item')}
                  </th>
                  <th className={'font-[600] font-inter text-[14px] text-center hidden md:table-cell'}>
                    {t('MyCartReservation.RefreshmentTableItems.Varient')}
                  </th>
                  <th className={'font-[600] font-inter text-[14px] text-center md:hidden'}>
                    {t('MyCartReservation.RefreshmentTableItems.Item')}/{t('MyCartReservation.RefreshmentTableItems.Varient')}
                  </th>
                  <th className={'font-[600] font-inter text-[14px] text-center'}>
                    {t('MyCartReservation.RefreshmentTableItems.Quantity')}
                  </th>
                  <th className={'font-[600] font-inter text-[14px] text-center'}>
                    {t('MyCartReservation.RefreshmentTableItems.Cost')}
                  </th>
                  <th>
                  </th>
              </tr>
            </thead>
            <tbody className='border-[1px] text-center rounded-lg'>
            {
                  refreshments.map((item, index) => {
                    return (
                      <tr key={index} id={item.id} className={'border-b-[1px] h-[44px]'}>
                          <td className={'font-inter text-[14px] hidden md:table-cell'}>{item.item}</td>
                          <td className={'font-inter text-[14px] hidden md:table-cell'}>{item.varient}</td>
                          <td className={'font-inter text-[14px] md:hidden'}>{item.item} {item.varient}</td>

                          <td className={'font-inter text-[14px] table-cell'}>
                            <div className="flex gap-2 border-[0.031rem] w-fit px-1 border-[#000] justify-center rounded-xl">
                                <button onClick={(e) => handleMinus(e)}>
                                  <img src="/MyCartReservationImages/minus.svg" alt="" />
                                </button>
                                <p>{item.quantity}</p>
                                <button onClick={(e) => handlePlus(e)}>
                                  <img src="/MyCartReservationImages/plus.svg" alt="" />
                                </button>
                            </div>
                          </td>

                          <td className={'font-inter text-[14px]'}>{formatPrice(item.cost)} COP</td>
                          <td><img src="/MyCartReservationImages/trash.svg" className="w-[12px] h-[12px] " alt="" /></td>
                      </tr>
                    )
                  })
            }
            </tbody>
          </table>
          <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">{t('MyCartReservation.Subtotal')}</h1>
            <p className="text-[14px] font-[400]">{getTotalPrice({ list: mockRefreshments })} COP</p>
        </div>
        </div>
  )
}
