import '../CourtReservation.modules.css'
import { Calendar } from './calendar'
import { ProgressBar } from '../../components/ProgressBar'
import { useStartContext } from '../../context/StartCountdownContext'
import { ButtonUnavailable } from './ButtonUnavailable'
import { Link, useNavigate } from 'react-router-dom'
import { useCountdown } from '../../Hooks/useCountdown'
import { useEffect, useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { formatPriceCourts } from '../Hooks/formatPriceCourts'
import { formatTimeCourts } from '../Hooks/formatTimeCourts'
import { ButtonAddCart } from './ButtonAddCart'
import { useCourtDateContext } from '../../context/CourtsDateContext'
import { ModalCourtReservation } from '../../components/ModalCourtReservation'
import { useModalCourtReservationContext } from '../../context/ModalCourtReservationContext'
import axios from 'axios'

export const CourtsTable = () => {
  const { resetCountdown } = useCountdown()
  const navigate = useNavigate()
  const { removeItem, getItem, setItem } = useLocalStorage({ key: 'order' })
  const { setBookCourt, bookCourt } = useBookYourCourtContext()
  const { dataCourtDate } = useCourtDateContext()
  const { setStart } = useStartContext()
  const { isOpen, onOpen, setClose, setApproved, setNotApproved, isApproved } = useModalCourtReservationContext()
  const [notCourtSelected, setNotCourtSelected] = useState(false)

  const handleBackPage = () => {
    removeItem()
    resetCountdown()
  }
  useEffect(() => {
    // If there is no location selected, the user is redirected to the location selection page
    // or there is no order, the user is redirected to the location selection page
    const order = getItem()
    setClose()

    setBookCourt(order)
    setStart(true)
    if (!order || order.location === null) {
      resetCountdown()
      setStart(false)
      navigate('/LocationSelection')
    }
    setBookCourt({ ...order, courts: [] })
    setStart(true)
  }, [])

  useEffect(() => {
    if (bookCourt.courts.length > 0) {
      setNotCourtSelected(false)
    }
  }, [bookCourt.courts])

  const nextPage = async () => {
    if (bookCourt.courts.length === 0) {
      setNotCourtSelected(true)
      return
    }

    const url = import.meta.env.VITE_BEACHPOINT_API_URL
    const token = import.meta.env.VITE_BEACHPOINT_API_TOKEN
    const orderIds = bookCourt.courts.map((court) => court.id).join(',')
    try {
      const reserveCourt = await axios.get(
        `${url}timeCourts/Reserverd/${orderIds}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      setBookCourt({ ...bookCourt, reservedCourts: reserveCourt.data.data[1].task_id })
      setItem({ ...bookCourt })
    } catch (error) {
      console.log(error)
    }

    const isOk = true
    if (isOk) {
      setTimeout(() => {
        onOpen()
        setApproved()
        setTimeout(() => {
          navigate('/MyCart')
        }, 1000)
      }, 500)
    } else {
      setTimeout(() => {
        onOpen()
        setNotApproved()
      }, 500)
    }
  }

  return (
    <section className="flex justify-center items-center">
      {
        isOpen && <ModalCourtReservation isApproved={isApproved} />
      }
      <div className="w-full max-w-[64.75rem] h-full px-[15px]">
        <header>
          <ProgressBar percentage="20%" count={true} />
        </header>
        <main
          className="flex flex-col items-center
              md:flex-row md:justify-between md:items-start
              md:h-full"
        >
          <aside className="hidden md:w-[25%] md:h-fit md:flex md:flex-col items-center m-2 md:mt-4 md:rounded-2xl shadow-lg md:border md:border-gray-200">
            <Calendar />
          </aside>
          <div
            className="flex flex-col items-center pb-3
             min-h-[4rem]
             max-h-[100%]
             h-[25rem]
             w-[100%]
             mt-[20px]
             md:w-[60%]
             md:h-[28rem]"
          >
            {' '}
            <table className="w-[100%] h-full md:w-full">
              <thead>
                <tr>
                  <th className="text-sm font-[600] font-inter text-center ">
                    Time
                  </th>
                  <th className="text-sm font-[600] font-inter text-center lg:pl-[3rem] ">
                    Cost
                  </th>
                  <th className="text-sm font-[600] font-inter text-center">
                    Court #1
                  </th>
                  <th className="text-sm font-[600] font-inter text-center ">
                    Court #2
                  </th>
                </tr>
              </thead>
              <tbody className="shadow-[-0px_0px_1px_1px_rgba(0,0,0,0.1)] divide-y-2 divide-[#EBEBEB]  shadow-gray-200  rounded-2xl">

                {dataCourtDate.data &&
                Array.isArray(dataCourtDate.data.data) &&
                dataCourtDate.data.data.length > 0
                  ? (
                      dataCourtDate?.data.data.map((court) => {
                        return (
                      <tr
                        key={court.id}
                        className="rounded-tl-xl rounded-tr-xl h-[2rem]"
                      >
                        <td className="text-sx px-2 text-center min-[425px]:text-[15px]">
                        {formatTimeCourts(court.hour)}
                        </td>
                        <td className="text-xs px-2 text-center min-[425px]:text-[15px] lg:pl-[3rem]">{`${formatPriceCourts(
                          court.price
                        )} COP`}</td>
                        <td className=''>
                          {
                            court.state === 'Available'
                              ? <ButtonAddCart court={{
                                id: court.id,
                                hour: court.hour,
                                price: court.price,
                                fk_court: court.fk_court,
                                description: court.description,
                                state: court.state,
                                date: court.date
                              }} />
                              : <ButtonUnavailable />
                          }
                        </td>
                        <td className=''>
                          {
                            court['state-2'] === 'Available'
                              ? <ButtonAddCart court={{
                                id: court['id-2'],
                                hour: court.hour,
                                price: court.price,
                                fk_court: court['fk_court-2'],
                                description: court['description-2'],
                                state: court['state-2'],
                                date: court.date
                              }} />
                              : <ButtonUnavailable />
                          }
                        </td>
                      </tr>
                        )
                      })
                    )
                  : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No courts available in this date
                    </td>
                  </tr>
                    )}
              </tbody>
            </table>
          </div>
        </main>
        <div className={`text-center text-red-500 ${notCourtSelected ? '' : 'opacity-0'}`}>
                  Please select a court
        </div>
        <footer className="hidden md:block">
          <div className="flex gap-3 w-full place-content-end ">
            <Link
                className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit"
                to={'/LocationSelection'}
                onClick={() => handleBackPage()}
              >
                Back
              </Link>
              <button
                className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
                onClick={() => nextPage()}
              >
                Next
              </button>
            </div>
        </footer>
      </div>
    </section>
  )
}
