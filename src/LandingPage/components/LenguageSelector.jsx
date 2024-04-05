import React, { useState } from 'react'

export const LenguageSelector = () => {
  const sources = [
    '/LandingImages/Countries/English.webp',
    '/LandingImages/Countries/French.webp',
    '/LandingImages/Countries/Portugese.webp',
    '/LandingImages/Countries/Mandarin.webp',
    '/LandingImages/Countries/Hindi.webp',
    '/LandingImages/Countries/Arabic.webp',
    '/LandingImages/Countries/Russian.webp',
    '/LandingImages/Countries/German.webp',
    '/LandingImages/Countries/colombia.png'
  ]

  const [selectedLanguage, setSelectedLanguage] = useState({ src: sources[0], open: false })

  const newListOfSources = sources.filter((source) => source !== selectedLanguage.src)

  const handleLanguageSelection = (source) => {
    setSelectedLanguage({ src: source, open: !selectedLanguage.open })
  }

  const ImageStyle = 'w-[31px] h-[31px] md:w-[40px] md:h-[40px]'

  return (
    <div className={`flex items-center w-[47px] md:w-[60px] flex-col ${selectedLanguage.open ? 'bg-[#EAEAEA] w-[47px] md:w-[60px] py-[10px] rounded-t-[5px]' : ''}`}>
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
