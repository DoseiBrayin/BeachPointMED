import { useEffect } from 'react'
import { useLeguageSelector } from '../Hooks/useLenguageSelector'

export const LenguageSelector = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    handleLanguageSelection,
    lengugesFiltered,
    sources
  } = useLeguageSelector()

  // Close the selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('#selector')) {
        setSelectedLanguage({ ...selectedLanguage, open: false })
        console.log('cerrado')
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [selectedLanguage, setSelectedLanguage])

  return (
    <div className={`
    flex 
    menu
    items-center 
    w-[47px] 
    md:w-[60px] 
    flex-col 
    ${selectedLanguage.open
    ? 'bg-[#EAEAEA] w-[47px] md:w-[60px] py-[8px] md:py-[10px] rounded-t-[5px]'
    : ''}`}
    >
      <img id='selector' onClick={() => setSelectedLanguage({ ...selectedLanguage, open: !selectedLanguage.open })} src={selectedLanguage.src} className='cursor-pointer w-[31px] h-[31px] md:w-[40px] md:h-[40px]' alt="" />
      {selectedLanguage.open && (
        <div className="absolute items-center mt-[35px] md:mt-[40px] gap-[10px] pt-[10px] w-[47px] md:w-[60px] bg-[#EAEAEA] rounded-[5px] h-[340px] md:h-[410px] flex flex-col">
          {
            lengugesFiltered.map((key) => (
              <img
                onClick={(e) => handleLanguageSelection(e)}
                key={key}
                src={sources[key]}
                className='cursor-pointer w-[31px] h-[31px] md:w-[40px] md:h-[40px]'
                id={key}
              />
            ))
          }
        </div>
      )}
    </div>
  )
}
