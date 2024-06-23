import React, { useState, useEffect } from 'react'
import { Courts } from '../components/Courts'
import { Refreshments } from '../components/Refreshments'
import { useFormatePrices } from '../hooks/useFormatPrices'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { formatPrice } from '../../Hooks/formatPrice'
import axios from 'axios'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const CheckOutConfirmation = () => {
  const { getGrandTotalPrice } = useFormatePrices()
  const { t } = useTranslation('global')
  const { bookCourt } = useBookYourCourtContext()

  const PaymentStatus = () => {
    const [paymentData, setPaymentData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const location = useLocation()
    const { getItem } = useLocalStorage({ key: 'order' })
    const order = getItem()

    const getQueryParam = (param) => {
      const searchParams = new URLSearchParams(location.search)
      return searchParams.get(param)
    }

    useEffect(() => {
      const refPayco = getQueryParam('ref_payco')
      console.log(order)

      if (!refPayco) {
        setError('Referencia de pago no encontrada')
        setLoading(false)
        return
      }

      const urlapp = `https://secure.epayco.co/validation/v1/reference/${refPayco}`
      const url = import.meta.env.VITE_BEACHPOINT_API_URL
      const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN

      axios.get(urlapp)
        .then(async (response) => {
          const data = response.data.data
          if (data && data.x_response) {
            setPaymentData(data)
            if (data.x_response === 'Aceptada') {
              // Cambio del estado de la court a unavailable
              try {
                await axios.get(
                  `${url}timeCourts/Unavalible/${order.reservedCourts}`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  }
                )
              } catch (error) {
              }
            }
          } else {
            setError('Error consultando la información')
          }
          setLoading(false)
        })
        .catch((error) => {
          setError('Error en la solicitud')
          console.log(error)
          setLoading(false)
        })
    }, [location.search])

    if (loading) {
      return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="mt-6 text-base leading-7 text-gray-600">Cargando</p>
          </div>
        </main>
      )
    }

    if (error) {
      return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">It seems an error occurred!</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">{error}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
      )
    }

    const renderPaymentStatus = (status) => {
      switch (status) {
        case 'Aceptada':
          return <h3 className="text-green-500 text-xl">Transacción aceptada</h3>
        case 'Rechazada':
          return <h3 className="text-red-500 text-xl">Transacción rechazada</h3>
        case 'Fallida':
          return <h3 className="text-yellow-500 text-xl">Transacción fallida</h3>
        case 'Pendiente':
          return <h3 className="text-blue-500 text-xl">Transacción pendiente</h3>
        default:
          return <h3 className="text-gray-500 text-xl">Estado desconocido</h3>
      }
    }

    return (
      <div className='flex flex-col items-center px-5'>
        {paymentData && (
          <>
            <div className='max-w-[64.75rem] w-[100%] flex justify-center md:justify-start'>
              <h1 className='font-inter text-[#2E2E2E] text-[24px] font-[800] text-center mt-5 md:text-[45px] md:font-[700]'>
                {t('MyCartReservation.ConfirmYourSelections')}
              </h1>
            </div>
            <div className='max-w-[64.75rem] w-[100%] hidden justify-center md:justify-start gap-2 '>
              <button className='bg-[#29845A] rounded-lg py-1 px-2 text-[#FFFFFF] font-inter font-[600] text-[12px]'>
                Sign in
              </button>
              <span className='text-[#2E2E2E] font-inter font-[600]'>to manage reservations</span>
            </div>
            {renderPaymentStatus(paymentData.x_response)} {/* Muestra el estado de la transacción */}
            <Courts isCheckOut={true} />
            <Refreshments isCheckOut={true} />
            <div className="w-[100%] max-w-[52.5rem] flex justify-end items-center">
              <div className='bg-black flex gap-5 px-3 rounded-md mt-2 h-[26px]'>
                <h1 className="font-[700] font-inter text-[14px] text-white ">
                  {t('MyCartReservation.Grandtotal')}
                </h1>
                <p className="text-[14px] font-inter text-white font-[400]">
                  {bookCourt.Refreshments.length > 0 ? formatPrice(getGrandTotalPrice(bookCourt.Refreshments)) : '--'} COP
                </p>
              </div>
            </div>
            <div className="w-full flex justify-end max-w-[64.75rem]">
              <div className="flex gap-3 ">
                <Link className="border-[1px] rounded-lg font-inter font-[550] px-2 py-1 shadow-md text-[14px] h-fit" to={'/'}>
                  Home
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return <PaymentStatus />
}
