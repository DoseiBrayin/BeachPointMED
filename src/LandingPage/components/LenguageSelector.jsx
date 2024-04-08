import { useLeguageSelector } from '../hooks/useLenguageSelector'

export const LenguageSelector = () => {
  const {
    selectedLanguage,
    setSelectedLanguage,
    handleLanguageSelection,
    lengugesFiltered,
    sources
  } = useLeguageSelector()

  return (
    <div className={`
    flex 
    items-center 
    w-[47px] 
    md:w-[60px] 
    flex-col 
    ${selectedLanguage.open
    ? 'bg-[#EAEAEA] w-[47px] md:w-[60px] py-[8px] md:py-[10px] rounded-t-[5px]'
    : ''}`}
    >
      <img onClick={() => setSelectedLanguage({ ...selectedLanguage, open: !selectedLanguage.open })} src={selectedLanguage.src} className='cursor-pointer w-[31px] h-[31px] md:w-[40px] md:h-[40px]' alt="" />
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
