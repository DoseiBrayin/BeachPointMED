import { generateDate, months, days } from '../Hooks/Calendar'
import dayjs from 'dayjs'
import { calendarHooks } from '../Hooks/calendarHooks'
import { generateDate, months, days } from "../Hooks/Calendar";
import dayjs from "dayjs";
import { calendarHooks } from "../Hooks/calendarHooks";

export const Calendar = () => {
  const {
    todayState,
    handlePastMonth,
    handleNextMonth,
    selectDay,
    handleSelectDay
  } = calendarHooks()

  return (
    <>
      <ol className="w-[80%] h-[15rem] grid grid-cols-7 grid-rows-8 m-2">
        <li className="flex col-span-full items-center justify-between w-[55%] ">
          <img
            className={'w-5 h-5 cursor-pointer'}
            src="/OneTimeCourReservation/ArrowLeft.svg"
            alt=""
            onClick={handlePastMonth}
          />
          <h1 className="text-[#616161] font-[450] font-inter gap-1 text-sm w-[2rem] flex items-center justify-center text-center s">
            {months[todayState.month()]}
            <span> {todayState.year()}</span>
          </h1>
      <ol className="w-[80%] h-[15rem] grid grid-cols-7 grid-rows-8 mx-2 mt-2 justify-center items-center">
        <li className="flex col-span-full items-center justify-between w-[100%] ">
          <div className="flex justify-between w-[55%]">
            <img
              className={`w-5 h-5 cursor-pointer`}
              src="/OneTimeCourReservation/ArrowLeft.svg"
              alt=""
              onClick={handlePastMonth}
            />
            <h1 className="text-[#616161] font-[450] font-inter gap-1 text-sm w-[2rem] flex items-center justify-center text-center">
              {months[todayState.month()]}
              <span> {todayState.year()}</span>
            </h1>
          </div>
        </li>
        {
          // Getting the days, you can use a similar approach to make the months and you just get the current month - 1 and display it
          days.map((day, index) => {
            return (
              <li
                key={`item-${index}`}
                className=" text-[#616161] font-[450] font-inter list-none text-sm w-[2rem] flex items-center justify-center text-center h-[2rem]"
              >
                {day}
              </li>
            )
          })
        }
        {generateDate(todayState.month(), todayState.year()).map(
          ({ date, currentMonth, today }, index) => {
            const isSelected = selectDay?.isSame(date, 'day')
            const isToday = today && !isSelected
            return (
              <li
                onClick={() => handleSelectDay(dayjs(date))}
                key={`item-${index}`}
                className={`
          my-[0.2rem] list-none w-[1rem] text-center h-[1rem]
          ${currentMonth ? 'text-sm cursor-pointer' : 'text-gray-400 text-xs opacity-0 cursor-context-menu'}
                className={`my-[0.2rem] list-none w-[1rem] text-center h-[1rem]  
          ${
            currentMonth
              ? "text-sm cursor-pointer"
              : "text-gray-400 text-xs opacity-0 pointer-events-none"
          }
          ${
            isSelected
              ? 'bg-black text-white rounded-lg p-3 cursor-pointer flex justify-center items-center'
              : ''
          }
          ${isToday ? '' : ''}
        `}
              >
                {date.date()}
              </li>
            )
          }
        )}
      </ol>

      <ol className="w-[80%] h-[15rem] grid grid-cols-7 grid-rows-8 mx-2 mb-2  justify-center items-center">
        <li className="flex col-span-full items-center justify-end  w-[100%] ">
          <div className="flex justify-between w-[55%]">
            <h1 className="text-[#616161] font-[450] font-inter gap-1 text-sm w-[2rem] flex items-center justify-center text-center s">
              {months[todayState.month() + 1]}
              <span> {todayState.year()}</span>
            </h1>
            <img
              className={'w-5 h-5 rotate-180 cursor-pointer'}
              src="/OneTimeCourReservation/ArrowLeft.svg"
              alt=""
              onClick={handleNextMonth}
            />
          </div>
        </li>
        {
          // Getting the days, you can use a similar approach to make the months and you just get the current month - 1 and display it
          days.map((day, index) => {
            return (
              <li
                key={`item-${index}`}
                className=" text-[#616161] font-[450] font-inter list-none text-sm w-[2rem] flex items-center justify-center text-center h-[2rem"
              >
                {day}
              </li>
            )
          })
        }
        {generateDate(todayState.month() + 1, todayState.year()).map(
          ({ date, currentMonth, today }, index) => {
            const isSelected = selectDay?.isSame(date, 'day')
            const isToday = today && !isSelected
            return (
              <li
                onClick={() => handleSelectDay(dayjs(date))}
                key={`item-${index}`}
                className={`
        my-[0.2rem] list-none w-[1rem] text-center h-[1rem]
        ${currentMonth ? 'text-sm' : 'text-gray-400 text-xs opacity-0'}
        ${currentMonth ? "text-sm" : "text-gray-400 text-xs opacity-0 pointer-events-none"}
        ${
          isSelected
            ? 'bg-black text-white rounded-lg p-3 cursor-pointer flex justify-center items-center'
            : ''
        }
        ${isToday ? '' : 'cursor-pointer'}
      `}
              >
                {date.date()}
              </li>
            )
          }
        )}
      </ol>
    </>
  )
}
