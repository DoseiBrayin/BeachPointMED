import { ProgressBar } from '../../components/ProgressBar'
import { useTranslation } from 'react-i18next'
import { Selector } from '../components/Selector'
import { useSelectorLocation } from '../Hooks/useSelectorLocation'
import { SomethingWentWrong } from '../../components/SomethingWentWrong'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { Link } from 'react-router-dom'
import { useStartContext } from '../../context/StartCountdownContext'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { useState } from 'react'

export const LocationSelection = () => {
  const { t } = useTranslation('global')
  const { error } = useSelectorLocation()
  const { bookCourt, setBookCourt } = useBookYourCourtContext()
  const { setStart } = useStartContext()
  const { removeItem } = useLocalStorage({ key: 'countdown' })
  const [notSelected, setNotSelected] = useState(false)

  const handleClick = () => {
    if (bookCourt.location === null) {
      setNotSelected(true)
      return
    }
    removeItem()
    setStart(true)
  }

  window.addEventListener('load', () => {
    bookCourt.location = null
    setBookCourt({ ...bookCourt, location: null })
  })

  const route = () => {
    let urlToGo = '/reserve'
    if (bookCourt.location === null) {
      return
    } else {
      urlToGo = `/reserve/${bookCourt.location.id}`
    }
    return urlToGo
  }

  return error
    ? (
    <SomethingWentWrong />
      )
    : (
    <div className="flex flex-col justify-between px-[15px] md:px-[15px] h-screen-minus-100px md:h-screen-minus-200px items-center">
      <div className="w-full max-w-[64.75rem] flex flex-col">
        <ProgressBar percentage="0%" count={false} />
        <div className="w-full flex flex-col items-center md:items-start">
          <h1 className="font-bold text-[24px] text-[#2E2E2E] md:text-[45px]">
            {t('LocationSelection.title')}
          </h1>
          <div className="w-full mt-[50px] flex justify-center flex-col items-center">
            <div className='w-[90%] md:w-[600px]'>
              <Selector />
              {
                notSelected && (
                <p className="text-[#F44336] text-[14px] mt-2">
                  {t('LocationSelection.noCountrySelected')}
                </p>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end max-w-[64.75rem]">
        <div className="flex gap-3 ">
          <Link className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit" to={'/'}
          >
            Back
          </Link>
          <Link
            className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
            onClick={() => handleClick()}
            to={route()}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
      )
}
