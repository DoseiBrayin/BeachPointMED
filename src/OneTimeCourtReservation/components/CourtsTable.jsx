import '../CourtReservation.modules.css'
import { Calendar } from './calendar'
import { ProgressBar } from '../../components/ProgressBar'
import { useStartContext } from '../../context/StartCountdownContext'
import { ButtonUnavailable } from './ButtonUnavailable'
import { Link, useNavigate } from 'react-router-dom'
import { useCountdown } from '../../Hooks/useCountdown'
import { useEffect } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { formatPriceCourts } from '../Hooks/formatPriceCourts'
import { formatTimeCourts } from '../Hooks/formatTimeCourts'
import { ButtonAddCart } from './ButtonAddCart'
import { useCourtDateContext } from '../../context/CourtsDateContext'

export const CourtsTable = () => {
  const { resetCountdown } = useCountdown()
  const navigate = useNavigate()
  const { removeItem, getItem } = useLocalStorage({ key: 'order' })
  const { setBookCourt } = useBookYourCourtContext()
  const { dataCourtDate, setDataCourtDate } = useCourtDateContext()

  const { setStart } = useStartContext()

  const handleBackPage = () => {
    removeItem()
    resetCountdown()
    setDataCourtDate([])
  }
  useEffect(() => {
    // If there is no location selected, the user is redirected to the location selection page
    // or there is no order, the user is redirected to the location selection page
    const order = getItem()
    if (!order || order.location === null) {
      resetCountdown()
      setStart(false)
      navigate('/LocationSelection')
    }
    setBookCourt({ ...order, courts: [] })
    setStart(true)
  }, [])

  return (
    <section className="flex justify-center items-center">
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
             max-h-[100%] overflow-y-scroll
             h-[25rem]
             w-[100%]
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
              <tbody className="shadow-[-0px_0px_1px_1px_rgba(0,0,0,0.1)] divide-y-2 divide-[#EBEBEB] border border-gray-50  shadow-gray-300 rounded-2xl">

                {dataCourtDate &&
                Array.isArray(dataCourtDate.data) &&
                dataCourtDate.data.length > 0
                  ? (
                      dataCourtDate?.data.map((court) => {
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
                        <td>
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
                        <td>
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
        <footer className="hidden md:block">
          <div className="flex gap-3 w-full place-content-end ">
            <Link
                className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit"
                to={'/LocationSelection'}
                onClick={() => handleBackPage()}
              >
                Back
              </Link>
              <Link
                className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
                to={'/MyCart'}
              >
                Next
              </Link>
            </div>
        </footer>
      </div>
    </section>
  )
}
