import React, { useState } from 'react'

export const LenguageSelector = () => {
  const [lenguageStatus, setLenguageStatus] = useState(false)

  const handleLenguage = () => {
    setLenguageStatus(!lenguageStatus)
  }
  return (
    <div className={`flex items-center w-[47px] md:w-[60px] flex-col ${lenguageStatus ? 'bg-[#EAEAEA] w-[47px] md:w-[60px] py-[10px] rounded-t-[5px]' : ''}`}>
          <button onClick={() => handleLenguage()} className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]">
            <img src="public/LandingImages/Countries/colombia.png" alt="Spanish" />
          </button>
          {lenguageStatus && (
            <div className="absolute items-center mt-[30px] md:mt-[40px] gap-[10px] pt-[10px] w-[47px] md:w-[60px] bg-[#EAEAEA] rounded-[5px] h-[300px] md:h-[410px] flex flex-col">
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/English.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/French.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/Portugese.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/Mandarin.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/Hindi.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/German.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/Arabic.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
              <button onClick={() => handleLenguage()}>
                <img src="/LandingImages/Countries/Russian.webp" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px] " alt="" />
              </button>
            </div>
          )}
        </div>
  )
}
