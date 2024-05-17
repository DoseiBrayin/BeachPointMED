import { useTranslation } from 'react-i18next'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { formatPrice } from '../../Hooks/formatPrice'
import { formatTime } from '../../Hooks/formatTime'
import { useCart } from '../hooks/useCart'
export const Courts = ({ isCheckOut }) => {
  const { getTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')
  const { bookCourt } = useBookYourCourtContext()
  const { deleteCourts } = useCart()

  return (
      <div className=' mt-4 w-full max-w-[52.5rem]'>
        <h1 className="text-[#2E2E2E] font-[700] text-[20px] md:text-[28px] md:text-[#000]">{t('MyCartReservation.Courts')}</h1>
        <table className='w-full shadow-lg'>
          <thead className='text-left'>
            <tr>
                <th className={'font-[600] font-inter text-[14px] text-center hidden md:block'}>{t('MyCartReservation.CourtTableItems.Location')}</th>
                <th className={'font-[600] font-inter text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Date')}</th>
                <th className={'font-[600] font-inter text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Time')}</th>
                <th className={'font-[600] font-inter text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Court')}</th>
                <th className={'font-[600] font-inter text-[14px] text-center'}>{t('MyCartReservation.CourtTableItems.Cost')}</th>
                <th></th>
            </tr>
          </thead>
          <tbody className='border-[1px] text-center'>
            {
              bookCourt.courts && bookCourt.courts.length > 0
                ? (bookCourt.courts.map((court, index) => {
                    return (
                      <tr key={index} className={'border-b-[1px] h-[44px]'}>
                        <td className={`${'font-inter text-[14px]'} hidden md:table-cell`}>{bookCourt.location.description}</td>
                        <td className={'font-inter text-[14px]'}>{court.date}</td>
                        <td className={'font-inter text-[14px]'}>{formatTime(court.hour)}</td>
                        <td className={'font-inter text-[14px]'}>{court.description.split('-')[0]}</td>
                        <td className={'font-inter text-[14px]'}>{formatPrice(court.price)} COP</td>
                        <td><img onClick={() => deleteCourts(court)} src="/MyCartReservationImages/trash.svg" className={`w-[12px] h-[12px] ${isCheckOut ? 'hidden' : ''}`} alt="" /></td>
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
            { bookCourt.courts && bookCourt.courts.length > 0
              ? (
                  <p className="text-[14px] font-[400]">{formatPrice(getTotalPrice({ list: bookCourt.courts }))} COP</p>
                )
              : (
                  <p className="text-[14px] font-[400]"> -- COP</p>
                )}
        </div>
      </div>
  )
}
