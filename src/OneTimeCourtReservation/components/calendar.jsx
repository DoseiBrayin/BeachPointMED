import { generateDate, months, days } from "../Hooks/Calendar";
import dayjs from "dayjs";
import condition from "../Hooks/CssConditions";
import { calendarHooks } from "../Hooks/calendarHooks";

export const Calendar = ({ month, year, handlePastMonth, handleNextMonth, left, right }) => {

  return (
    <>
      <ol className="w-full h-full grid grid-cols-7 grid-rows-8">
        <li className="flex col-span-full items-center justify-between w-[95%] ">
          <img
            className={`w-5 h-5 ${left ? "" : "w-0"} `}
            src="/OneTimeCourReservation/ArrowLeft.svg"
            alt=""
            onClick={handlePastMonth}

          />
          <h1>
            {months[month]} { year }
          </h1>
          <img
            className= {`w-5 h-5 rotate-180 ${right? "" : "w-0"} `}
            src="/OneTimeCourReservation/ArrowLeft.svg"
            alt=""
            onClick={handleNextMonth}
          />
        </li>
        {
          //Getting the days, you can use a similar approach to make the months and you just get the current month - 1 and display it
          days.map((day, index) => {
            return (
              <li
                key={`item-${index}`}
                className=" text-[#616161] font-[450] font-inter list-none w-[2rem] flex items-center justify-center text-center h-[2rem"
              >
                {day}
              </li>
            );
          })
        }
        {generateDate(month, year).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <li
                key={`item-${index}`}
                className={condition(
                  today == true
                    ? "bg-black my-1 rounded-full w-[2rem] h-[2rem] flex items-center justify-center text-center text-white list-none"
                    : " my-1 list-none w-[2rem] flex items-center justify-center text-center h-[2rem]",
                  currentMonth ? "" : "text-gray-400  text-sm"
                )}
              >
                {date.date()}
              </li>
            );
          }
        )}
      </ol>
    </>
  );
};
