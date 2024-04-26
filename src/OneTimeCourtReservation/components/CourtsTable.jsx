import '../CourtReservation.modules.css'
import { Calendar } from './calendar'
import { ProgressBar } from '../../components/ProgressBar'
import { useTimeCourts } from '../Hooks/useTimeCourts'
import { useStartContext } from '../../context/StartCountdownContext'
import dayjs from 'dayjs'
import {ButtonAddCart} from "./ButtonAddCart"
import { ButtonUnavailable } from './ButtonUnavailable'


export const CourtsTable = () => {

  window.addEventListener('load', () => {
    const { setStart } = useStartContext()
    setStart(true)
  })



  function formatPrice(numero) {
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

  const { data } = useTimeCourts(dayjs().format('YYYY-MM-DD'))
  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-[64.75rem] h-full px-[15px]">
        <header>
          <ProgressBar percentage='30%' count={true} />
        </header>
        <main
          className="flex flex-col items-center
              md:flex-row md:justify-between md:items-start
              md:h-full
        "
        >
          <aside className="hidden md:w-[25%] md:h-fit md:flex md:flex-col items-center m-2 md:mt-4 md:rounded-2xl shadow-lg md:border md:border-gray-200">
            <Calendar />
          </aside>
          <div
            className="flex flex-col items-center pb-3
             min-h-[4rem]
             max-h-[100%] overflow-y-scroll
             h-[25rem]
             sm:w-[100%]
             md:w-[60%]
             md:h-[28rem]"
          > <table className="w-full h-full">
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
                  data && Array.isArray(data.data) && data.data.length > 0
                    ? data?.data.map((court) => {
                      return (
                        <tr key={court.id} className="rounded-tl-xl rounded-tr-xl">
                          <td className='text-sx p-2 text-center min-[425px]:text-[15px]'>
                            {court.hour}
                          </td>
                          <td className="text-xs p-2 text-center min-[425px]:text-[15px] lg:pl-[3rem]">{`${formatPrice(court.price)} COP`}</td>
                          <td>{court.state == "Unavailable" 
                            ? <ButtonUnavailable />
                            :<ButtonAddCart/>}</td>
                          <td>{court.state == "Unavailable"
                            ? <ButtonUnavailable />
                            :<ButtonAddCart/>}</td>
                        </tr>
                      )
                    })
                    : <tr>
                      <td colSpan="4" className="text-center">No courts available in this date</td>
                    </tr>
                }
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </section>
  )
}
