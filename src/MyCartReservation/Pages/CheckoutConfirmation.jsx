import React, { useEffect } from 'react'
import { Courts } from '../components/Courts'
import { Refreshments } from '../components/Refreshments'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useStartContext } from '../../context/StartCountdownContext'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useCountdown } from '../../Hooks/useCountdown'
// import { axios } from 'axios'

export const CheckOutConfirmation = () => {
  const { getGrandTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')

  const { setStart } = useStartContext()
  const { resetCountdown } = useCountdown()
  const { bookCourt } = useBookYourCourtContext()
  const navigate = useNavigate()

  useEffect(() => {
    setStart(true)
    if (bookCourt.location === null) {
      resetCountdown()
      setStart(false)
      navigate('/LocationSelection')
    }
  }, [])

  // const urlParams = new URLSearchParams(window.location.search)
  // const refPayco = urlParams.get('ref_payco')
  // const apiUrl = `https://secure.epayco.co/validation/v1/reference/${refPayco}`

  // useEffect(() => {
  //   const response = axios.get(apiUrl)
  //     .then(response => {
  //       const data = response.data
  //       // Aquí puedes procesar la información obtenida
  //       console.log('Información de la transacción:', data)
  //     })
  //     .catch(error => {
  //       console.error('Error al obtener la información de la transacción:', error.message)
  //     })
  // }, [refPayco])

  return (
    <div className='flex flex-col items-center px-5'>
        <div className='max-w-[64.75rem] w-[100%] flex justify-center md:justify-start'>
            <h1 className='font-inter text-[#2E2E2E] text-[24px] font-[800] text-center mt-5 md:text-[45px] md:font-[700]'>{t('MyCartReservation.ConfirmYourSelections')}</h1>
        </div>
        <div className='max-w-[64.75rem] w-[100%] flex justify-center md:justify-start gap-2'>
            <button className='bg-[#29845A] rounded-lg py-1 px-2 text-[#FFFFFF] font-inter font-[600] text-[12px]'>Sign in</button>
            <span className='text-[#2E2E2E] font-inter font-[600]'>to manage reservations</span>
        </div>
        <Courts isCheckOut={true}/>
        <Refreshments isCheckOut={true}/>
        <div className="w-[100%] max-w-[52.5rem] flex justify-end items-center">
            <div className='bg-black flex gap-5 px-3 rounded-md mt-2 h-[26px]'>
            <h1 className="font-[700] font-inter text-[14px] text-white ">{t('MyCartReservation.Grandtotal')}</h1>
            <p className="text-[14px] font-inter text-white font-[400]">{getGrandTotalPrice()} COP</p>
            </div>
        </div>
        <div className="w-full flex justify-end max-w-[64.75rem]">
        <div className="flex gap-3 ">
          <Link className="border-[1px] rounded-lg font-inter font-[550] px-2 py-1 shadow-md text-[14px] h-fit"
           to={'/'}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
