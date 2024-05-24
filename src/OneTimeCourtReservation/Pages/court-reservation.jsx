import { calendarHooks } from '../Hooks/calendarHooks'
import { CourtsTable } from '../components/CourtsTable'
import { Calendar } from '../components/calendar'
import { Link } from 'react-router-dom'
import { nextViewState } from '../Hooks/useNextViewState'
import { useCountdown } from '../../Hooks/useCountdown'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useCourtDateContext } from '../../context/CourtsDateContext'
import { useEffect, useState } from 'react'
import { useModalCourtReservationContext } from '../../context/ModalCourtReservationContext'
import { ModalCourtReservation } from '../../components/ModalCourtReservation'

export const CourtReservationCalendar = () => {
  const { handleNextView, view, handlePastView } = nextViewState()
  const { resetCountdown } = useCountdown()
  const { todayState, handleNextDay, handlePastDay } = calendarHooks()
  const { removeItem } = useLocalStorage({ key: 'order' })
  const { setBookCourt, bookCourt } = useBookYourCourtContext()
  const { setDataCourtDate } = useCourtDateContext()
  const [notCourtSelected, setNotCourtSelected] = useState(false)
  const { isOpen, onOpen, setApproved, setNotApproved, isApproved } = useModalCourtReservationContext()

  useEffect(() => {
    if (bookCourt.courts.length > 0) {
      setNotCourtSelected(false)
    }
  }, [bookCourt.courts])

  const nextPage = () => {
    handleNextView()
    if (bookCourt.courts.length === 0) {
      setNotCourtSelected(true)
      return
    }

    // Here we should send the request to the server with the list of ids of the selected courts
    // const orderIds = bookCourt.courts.map((court) => court.id)

    const isOk = true
    if (isOk) {
      setTimeout(() => {
        onOpen()
        setApproved()
        // setTimeout(() => {
        //   navigate('/MyCart')
        // }, 2000)
      }, 500)
    } else {
      setTimeout(() => {
        onOpen()
        setNotApproved()
      }, 500)
    }
  }

  return (
    <>
      {
        isOpen && <ModalCourtReservation isApproved={isApproved} />
      }
      <section className="hidden md:block">
        <CourtsTable />
      </section>
      <section className="md:hidden flex flex-col w-full h-[90vh] items-center justify-between">
        <header>
          <h1 className="text-2xl font-inter text-[#2E2E2E] font-[800] ">
            {view ? 'Select playing time' : 'Select Date'}
          </h1>
        </header>

        <main>
          <section
            className={`flex flex-col items-center max-[320px]:w-[14rem] max-w-[15rem] w-[15rem] rounded-2xl shadow-2xl borderborder-gray-200
            ${view ? 'hidden' : ''}`}
          >
            <Calendar />
          </section>
          <section
            className={`max-[320px]:w-[100%]
            ${view ? '' : 'hidden'}`}
          >
            <div className="my-3 md:hidden border border-black h-[1rem] w-[100%] rounded-full flex items-center justify-between">
              <img
                className={'w-5 h-5 cursor-pointer'}
                src="/OneTimeCourReservation/ArrowLeft.svg"
                alt=""
                onClick={handlePastDay}
              />
              <span className="text-xs">
                {todayState.format('ddd MMMM D YYYY')}
              </span>
              <img
                className={'w-5 h-5 rotate-180 cursor-pointer'}
                src="/OneTimeCourReservation/ArrowLeft.svg"
                alt=""
                onClick={handleNextDay}
              />
            </div>
            <CourtsTable />
          </section>
        </main>
        <div className={`text-center text-red-500 ${notCourtSelected ? '' : 'opacity-0'}`}>
                  Please select a court
        </div>
        <footer className="w-[80%]">
          <div className="w-full flex justify-end max-w-[64.75rem]">
            <div
              className={`flex gap-3 
            ${view ? 'hidden' : 'block'}`}
            >
              <Link
                className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit"
                to={'/LocationSelection'}
                onClick={() => {
                  resetCountdown()
                  handlePastView()
                  removeItem()
                  setBookCourt({ location: null, courts: [], Refreshments: [], GrandTotal: null })
                  setDataCourtDate([])
                }}
              >
                Back
              </Link>
              <button
                className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
                onClick={handleNextView}
              >
                Next
              </button>
            </div>

            <div
              className={`flex gap-3 
            ${view ? 'block' : 'hidden'}`}
            >
              <button
                className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit"
                onClick={handlePastView}
              >
                Back
              </button>
              <button
                className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
                onClick={() => nextPage()}
              >
                Nextf
              </button>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
