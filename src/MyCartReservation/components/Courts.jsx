import { useTranslation } from 'react-i18next'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { formatPrice } from '../../Hooks/formatPrice'
import { formatTime } from '../../Hooks/formatTime'
import { useCart } from '../hooks/useCart'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const Courts = ({ isCheckOut }) => {
  const { getTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')
  const { getItem } = useLocalStorage({ key: 'order' })
  const { deleteCourts } = useCart()

  const order = getItem()

  return (
      <div className=' mt-4 w-full max-w-[52.5rem]'>
        <h1 className="text-[#2E2E2E] font-[700] text-[20px] md:text-[28px] md:text-[#000]">{t('MyCartReservation.Courts')}</h1>
        <table className='w-full shadow-lg'>
          <thead className='text-left'>
            <tr>
                <th className={'font-[600] font-inter text-[13px] sm:text-[14px] text-center hidden md:block'}>{t('MyCartReservation.CourtTableItems.Location')}</th>
                <th className={'font-[600] font-inter text-[13px] sm:text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Date')}</th>
                <th className={'font-[600] font-inter text-[13px] sm:text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Time')}</th>
                <th className={'font-[600] font-inter text-[13px] sm:text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Court')}</th>
                <th className={'font-[600] font-inter text-[13px] sm:text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Cost')}</th>
                <th></th>
            </tr>
          </thead>
          <tbody className='border-[1px] text-center'>
            {
              order?.courts && Array.isArray(order.courts) && order?.courts?.length > 0
                ? (order?.courts?.map((court, index) => {
                    return (
                      <tr key={index} className={'border-b-[1px] h-[44px]'}>
                        <td className={`${'font-inter text-[14px]'} hidden md:table-cell`}>{order.location.description}</td>
                        <td className={'font-inter text-[12px] sm:text-[14px]'}>{court.date}</td>
                        <td className={'font-inter text-[12px] sm:text-[14px]'}>{formatTime(court.hour)}</td>
                        <td className={'font-inter text-[12px] sm:text-[14px]'}>{court.description.split('-')[0]}</td>
                        <td className={'font-inter text-[12px] sm:text-[14px]'}>{formatPrice(court.price)} COP</td>
                        <td><img onClick={() => deleteCourts(court)} src="/MyCartReservationImages/trash.svg" className={`w-[12px] h-[12px] cursor-pointer ${isCheckOut ? 'hidden' : ''}`} alt="" /></td>
                    </tr>
                    )
                  }))
                : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      There are no courts available
                    </td>
                  </tr>
                  )
            }
          </tbody>
        </table>
        <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">{t('MyCartReservation.Subtotal')}</h1>
            { order?.courts && Array.isArray(order.courts) && order?.courts?.length > 0
              ? (
                  <p className="text-[13px] font-[400]">{formatPrice(getTotalPrice({ list: order.courts }))} COP</p>
                )
              : (
                  <p className="text-[13px] font-[400]"> -- COP</p>
                )}
        </div>
      </div>
  )
}
