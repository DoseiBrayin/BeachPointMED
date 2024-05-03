import { calendarHooks } from '../Hooks/calendarHooks'
import { CourtsTable } from '../components/CourtsTable'
import { Calendar } from '../components/calendar'
import { Link } from 'react-router-dom'
import { nextViewState } from '../Hooks/useNextViewState'
import { useCountdown } from '../../Hooks/useCountdown'

export const CourtReservationCalendar = () => {
  const { handleNextView, view, handlePastView } = nextViewState()
  const { resetCountdown } = useCountdown()
  const { todayState, handleNextDay, handlePastDay } = calendarHooks()

  return (
    <>
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
              <Link
                className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
                to={'/MyCart'}
                onClick={handleNextView}
              >
                Next
              </Link>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}
