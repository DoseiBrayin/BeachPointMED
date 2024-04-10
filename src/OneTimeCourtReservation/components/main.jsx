import fakeData from "../Mocks/MOCK_DATA.json";
import "/src/index.css";
import { ButtonAddCart } from "./ButtonAddCart";
import { ButtonUnavailable } from "./ButtonUnavailable";
import "../CourtReservation.modules.css";
import { generateDate } from "../Hooks/Calendar";
import dayjs from "dayjs";
import condition from "../Hooks/CssConditions";

const Calendar = () => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  return (
    <>
      <ol className="w-full h-full grid grid-cols-7 grid-rows-8">

        <li className="flex col-span-full justify-between w-[50%] ">
            <img className="w-5 h-5" src="/OneTimeCourReservation/ArrowLeft.svg" alt="" />
            {dayjs().date()}
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
        {generateDate().map(({ date, currentMonth, today }, index) => {
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
        })}
      </ol>
    </>
  );
};
//De esta forma puedo conseguir la fecha del momento del año que le pase como parametro
// console.log(dayjs().year(2024).month(3).day(4).minute(58).second())

//El objeto dayjs contiene el momento actual y a partir de él se puede acceder a todas las funciones que brinda
// console.log(dayjs())

//En este se pueden acceder a distintos momentos también de esta forma
// dayjs('2018-04-04T16:00:00.000Z')
// dayjs('2018-04-13 19:18:17.040+02:00')
// dayjs('2018-04-13 19:18')

generateDate();

export const Main = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="w-[80%] h-full">
        <header>
          <div className="flex w-full justify-between mb-5">
            <h2 className="text-3xl font-semibold">Progress</h2>
            <h3 className="text-2xl font-semibold">4:59</h3>
          </div>
          <img
            className="w-full"
            src="OneTimeCourReservation/progress.svg"
            alt=""
          />
          <h1 className="text-[24px] text-[#2E2E2E] font-inter font-[800] mt-5">
            Select Playing Time
          </h1>
        </header>
        <main
          className="flex flex-col items-center
              md:flex-row md:justify-between md:items-start 
              md:h-full
        "
        >
          <div className="my-3 md:hidden">Aqui va un calendario de chill</div>
          <aside className="hidden md:w-[30%] md:h-full  md:flex md:mt-4 ">
            {<Calendar />}
          </aside>
          <div
            className="flex flex-col items-center pb-3
             min-h-[4rem]
             max-h-[100%] overflow-y-scroll
             sm:w-[100%]
             md:w-[60%]"
          >
            <table className="w-full">
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
                {fakeData.map((row) => (
                  <tr key={row.id} className="rounded-tl-xl rounded-tr-xl">
                    <td className="text-xs p-2 text-center min-[425px]:text-[15px]">
                      {row.time}
                    </td>
                    <td className="text-xs p-2 text-center min-[425px]:text-[15px] lg:pl-[3rem]">{`${row.price}COP`}</td>
                    <td className="text-xs p-2 text-center min-[425px]:text-[15px]">
                      {row.court ? <ButtonAddCart /> : <ButtonUnavailable />}
                    </td>
                    <td className="text-xs p-2 text-center min-[425px]:text-[15px]">
                      {row.court2 ? <ButtonAddCart /> : <ButtonUnavailable />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  );
};
