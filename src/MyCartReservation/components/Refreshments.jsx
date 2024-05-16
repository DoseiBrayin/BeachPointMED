import { useCart } from '../hooks/useCart'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { useTranslation } from 'react-i18next'
import { formatPrice } from '../../Hooks/formatPrice'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'

export const Refreshments = ({ isCheckOut }) => {
  const { handleMinus, handlePlus } = useCart()
  const { getTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')
  const { bookCourt } = useBookYourCourtContext()
  const { deleteRefreshments } = useCart()

  return (
        <div className='mt-4 w-full max-w-[52.5rem]'>
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
              bookCourt.Refreshments.length > 0
                ? (bookCourt?.Refreshments.map((item, index) => {
                    return (
                      <tr key={index} id={item.id} className={'border-b-[1px] h-[44px]'}>
                          <td className={'font-inter text-[14px] hidden md:table-cell'}>{item.name.split(' ')[0]}</td>
                          <td className={'font-inter text-[14px] hidden md:table-cell'}>{item.name.match(/(\b\w+\b)\s*(?:,|$)/g)}</td>
                          <td className={'font-inter text-[14px] md:hidden'}>{item.name}</td>

                          <td className={'font-inter text-[14px] table-cell'}>
                            <div className='flex justify-center items-center'>
                            <div className="flex gap-2 border-[0.031rem] w-fit px-1 border-[#000] justify-center items-center rounded-xl">
                                <button className={`${isCheckOut ? 'pointer-events-none' : ''}`} onClick={(e) => handleMinus(e)}>
                                  <img src="/MyCartReservationImages/minus.svg" alt="" />
                                </button>
                                <p>1</p>
                                <button className={`${isCheckOut ? 'pointer-events-none' : ''}`} onClick={(e) => handlePlus(e)}>
                                  <img src="/MyCartReservationImages/plus.svg" alt="" />
                                </button>
                            </div>
                            </div>
                          </td>

                          <td className={'font-inter text-[14px]'}>{formatPrice(item.price)} COP</td>
                          <td><img onClick={() => deleteRefreshments(item)} className={`${isCheckOut ? 'hidden' : ''} w-[12px] h-[12px] `} src="/MyCartReservationImages/trash.svg" alt="" /></td>
                      </tr>
                    )
                  }))
                : (
                    <tr>
                      <td colSpan="4" className="text-center">
                        There are no refreshments available
                      </td>
                    </tr>
                  )
            }
            </tbody>
          </table>
          <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">{t('MyCartReservation.Subtotal')}</h1>
            <p className="text-[14px] font-[400]">{
              bookCourt.Refreshments.length > 0
                ? formatPrice(getTotalPrice({ list: bookCourt.Refreshments }))
                : '---' } COP  </p>
        </div>
        </div>
  )
}
