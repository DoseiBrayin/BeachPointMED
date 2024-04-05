import React from 'react'

export const Instagram = () => {
  return (
    <section className='flex flex-col items-center p-5'>
        <h1 className='bold-heading-mobile italic '>Beach Point Moments</h1>
        <h3 className='mb-5 font-[400]'>@beachpointmed</h3>
        <div className='grid grid-cols-2 grid-rows-2 gap-4
        md:grid-cols-4

        '>
            <img src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img className='hidden md:block' src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img className='hidden md:block' src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img className='hidden md:block' src="/LandingImages/instagram/instagram1.svg" alt="" />
            <img className='hidden md:block' src="/LandingImages/instagram/instagram1.svg" alt="" />
        </div>
    </section>
  )
}
