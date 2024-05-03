import { useTranslation } from 'react-i18next'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { mockCourts } from '../mocks/courts.json'

export const Courts = () => {
  const { getTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')

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
                mockCourts.map((court, index) => {
                  return (
                      <tr key={index} className={'border-b-[1px] h-[44px]'}>
                        <td className={`${'font-inter text-[14px]'} hidden md:table-cell`}>{court.location}</td>
                        <td className={'font-inter text-[14px]'}>{court.date}</td>
                        <td className={'font-inter text-[14px]'}>{court.time}</td>
                        <td className={'font-inter text-[14px]'}>{court.court}</td>
                        <td className={'font-inter text-[14px]'}>{court.cost} COP</td>
                        <td><img src="/MyCartReservationImages/trash.svg" className="w-[12px] h-[12px] " alt="" /></td>
                    </tr>
                  )
                })
            }
          </tbody>
        </table>
        <div className="flex justify-end gap-5 pr-5 mt-2">
            <h1 className="font-[600] text-[14px]">{t('MyCartReservation.Subtotal')}</h1>
            <p className="text-[14px] font-[400]">{getTotalPrice({ list: mockCourts })} COP</p>
        </div>
      </div>
  )
}
