import '../CourtReservation.modules.css'
import { Calendar } from './calendar'
import { calendarHooks } from '../Hooks/calendarHooks'
import { months, days } from '../Hooks/Calendar'
import { ProgressBar } from '../../components/ProgressBar'
import { useTimeCourts } from '../Hooks/useTimeCourts'
import { useStartContext } from '../../context/StartCountdownContext'

export const Main = () => {
  const { todayState } = calendarHooks()

  window.addEventListener('load', () => {
    const { setStart } = useStartContext()
    setStart(true)
  })

  const { data } = useTimeCourts()

  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-[64.75rem] h-full px-[15px]">
        <header>
          <ProgressBar percentage='30%' count={true} />
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
                {
                  data?.data.map((court) => {
                    function formatPrice (numero) {
                      // Convertir el número a una cadena de texto y separar la parte entera de la decimal
                      const partes = numero.toString().split('.')

                      // Formatear la parte entera
                      const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')

                      // Si hay parte decimal
                      if (partes.length === 2) {
                        let parteDecimal = partes[1]

                        // Añadir ceros adicionales si la parte decimal tiene menos de tres dígitos
                        parteDecimal = parteDecimal.padEnd(3, '0')

                        return `${parteEntera}.${parteDecimal}`
                      } else {
                        // Si no hay parte decimal, agregar '.000'
                        return `${parteEntera}.000`
                      }
                    }

                    return (
                    <tr key={court.id} className="rounded-tl-xl rounded-tr-xl">
                      <td className='text-sx p-2 text-center min-[425px]:text-[15px]'>
                        {court.hour}
                      </td>
                      <td className="text-xs p-2 text-center min-[425px]:text-[15px] lg:pl-[3rem]">{`${formatPrice(court.price)} COP`}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  )
}
