import { useState } from 'react'

export const InputPassword = ({ type, label, name, placeholder, hasError, id, register, validation }) => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePassword = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <>
       <label htmlFor={id} className='font-inter font-normal'>{label}</label>
       <div className='border p-1 relative flex h-[3rem] rounded-[5px] border-[#282828]'>
            <input
            className='w-full h-full p-1 focus:outline-none focus:ring-0'
            type={showPassword ? 'text ' : 'password'}
            id={id}
            placeholder={placeholder}
            name={name}
            {...register(name, validation)}/>
            <img src="/AuthImages/closedEye.svg" className='w-6 mr-1' alt="" onClick={togglePassword} />
        </div>
        {hasError && <span className='text-red-500 text-sm'>{hasError.message}</span>}
    </>
  )
}
