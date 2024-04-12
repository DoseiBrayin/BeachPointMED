import fakeData from "../Mocks/MOCK_DATA.json";
import { ButtonAddCart } from "./ButtonAddCart";
import { ButtonUnavailable } from "./ButtonUnavailable";
import "../CourtReservation.modules.css";
import { Calendar } from "./calendar";
import { calendarHooks } from "../Hooks/calendarHooks";
import { generateDate, months, days } from "../Hooks/Calendar";
import dayjs from "dayjs";

export const Main = () => {

  const {todayState} = calendarHooks()

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
          <div className="my-3 md:hidden border border-black h-[1rem] w-[100%] rounded-full flex items-center justify-center">
            <span className="text-xs">{days[todayState.day()]} {months[todayState.month()]} {todayState.day()} {todayState.year()}</span>
          </div>
          <aside className="hidden md:w-[25%] md:h-fit md:flex md:flex-col items-center m-2 md:mt-4 md:rounded-2xl shadow-lg md:border md:border-gray-200">
            <Calendar />
          </aside>
          <div
            className="flex flex-col items-center pb-3
             min-h-[4rem]
             max-h-[100%] overflow-y-scroll
             sm:w-[100%]
             md:w-[60%]
             md:h-[28rem]"
          >
            <table className="w-full h-full">
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
