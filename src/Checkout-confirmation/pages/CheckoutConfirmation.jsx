import { Courts } from '../components/Courts'
import { ProgressBar } from '../../components/ProgressBar'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getGrandTotalPrice } from '../../MyCartReservation/hooks/useFormatPrices'

export const CheckOutConfirmation = () => {
  const { t } = useTranslation('global')
  return (
    <div className='flex flex-col items-center px-5'>
        <div className='w-[100%] flex items-center justify-center'>
            <ProgressBar percentage='40%' count={true}/>
        </div>
        <div className='max-w-[64.75rem] w-[100%] flex justify-center md:justify-start'>
            <h1 className='font-inter text-[#2E2E2E] text-[24px] font-[800] text-center mt-5 md:text-[45px] md:font-[700]'>{t('MyCartReservation.ConfirmYourSelections')}</h1>
        </div>
        <Courts />
        <div className="flex justify-center items-center gap-5 px-3 rounded-md mt-2 h-[26px] bg-black">
            <h1 className="font-[700] font-inter text-[14px] text-white">{t('MyCartReservation.Grandtotal')}</h1>
            <p className="text-[14px] font-inter text-white font-[400]">{getGrandTotalPrice()} COP</p>
        </div>
        <div className="w-full flex justify-end max-w-[64.75rem]">
        <div className="flex gap-3 ">
          <Link className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit" to={'/reserve/:locationId'}
          >
            Back
          </Link>
          <Link
            className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
            to={'/confirmationPage'}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  )
}
