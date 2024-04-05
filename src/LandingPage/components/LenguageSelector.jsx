import React, { useEffect, useState } from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const LenguageSelector = () => {
  // Array of images to be displayed in the selector
  const sources = [
    'LandingImages/Countries/English.webp',
    'LandingImages/Countries/French.webp',
    'LandingImages/Countries/Portugese.webp',
    'LandingImages/Countries/Mandarin.webp',
    'LandingImages/Countries/Hindi.webp',
    'LandingImages/Countries/Arabic.webp',
    'LandingImages/Countries/Russian.webp',
    'LandingImages/Countries/German.webp',
    'LandingImages/Countries/colombia.png'
  ]

  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState({ src: sources[0], open: false })
  const newListOfSources = sources.filter((source) => source !== selectedLanguage.src)

  // Custom hook to manage the local storage of the selected language
  const { setItem, getItem } = useLocalStorage({ key: 'language' })

  // Function to handle the selection of the language and save it in the local storage
  const handleLanguageSelection = (source) => {
    setSelectedLanguage({ src: source, open: !selectedLanguage.open })
    setItem(source)
  }

  // Effect to get the selected language from the local storage
  useEffect(() => {
    const item = getItem()
    if (item) {
      setSelectedLanguage({ src: item, open: false })
    }
  }, [])

  const ImageStyle = 'w-[31px] h-[31px] md:w-[40px] md:h-[40px]'

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
      <img onClick={() => handleLanguageSelection(selectedLanguage.src)} src={selectedLanguage.src} className={ImageStyle} alt="" />
      {selectedLanguage.open && (
        <div className="absolute items-center mt-[35px] md:mt-[40px] gap-[10px] pt-[10px] w-[47px] md:w-[60px] bg-[#EAEAEA] rounded-[5px] h-[340px] md:h-[410px] flex flex-col">
          {newListOfSources.map((source) => (
            <img key={source} onClick={() => handleLanguageSelection(source)} src={source} className={ImageStyle} alt="" />
          ))}
        </div>
      )}
    </div>
  )
}
