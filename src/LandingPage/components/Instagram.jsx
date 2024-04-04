import React from 'react'
import { useInstagram } from '../hooks/InstagramHook'

export const Instagram = () => {
  const data = useInstagram()
  return (
    <section className='flex flex-col items-center p-5'>
      <h1 className='bold-heading-mobile italic'>Beach Point Moments</h1>
      <h3 className='mb-5'>@beachpointmed</h3>
      <div className='grid grid-cols-2 grid-rows-2 gap-4
        md:grid-cols-4
        '>
        {
          data && data.slice(0, 8).map((item, index) => (
            <img key={index} className={`max-h-[298px] ${index > 3 ? 'hidden md:block' : ''}`} src={item.media_url} alt="" />
          ))
        }
      </div>
    </section>
  )
}