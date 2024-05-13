import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../components/ErrorMessage'
import { Link, useNavigate } from 'react-router-dom'
import { ProgressBar } from '../../components/ProgressBar'
import { useStartContext } from '../../context/StartCountdownContext'
import { useBookYourCourtContext } from '../../context/BookYourCourtContext'
import { useCountdown } from '../../Hooks/useCountdown'
import { useLocalStorage } from '../../Hooks/useLocalStorage'
import { Payment } from '../Hooks/payment'

export const ConfirmationPage = () => {
  const inputStyle = 'border border-[#8A8A8A] rounded-md p-2 h-[32px] w-full text-[13px] focus:outline-none'
  const errroInputStyle = 'border border-[#8E1F0B] h-[32px] w-full rounded-md p-2 text-[13px] bg-[#FFEBE8] focus:outline-none'

  const { setStart } = useStartContext()
  const { resetCountdown } = useCountdown()
  const { setBookCourt } = useBookYourCourtContext()
  const { getItem } = useLocalStorage({ key: 'order' })
  const navigate = useNavigate()
  const {createOrder} = Payment()

  useEffect(() => {
    setStart(true)
    const order = getItem()
    setBookCourt(order)
    if (!order || order.location === null) {
      resetCountdown()
      setStart(false)
      navigate('/LocationSelection')
    }
  }, [])

  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState

  // this function will make the API call
  const onSubmit = (data) => {
    return data // this is where you will make the API call
  }

  return (
    <div className="w-full flex flex-col items-center justify-between h-screen-minus-100px md:h-screen-minus-200px ">
      <div className='w-full flex flex-col items-center max-w-[64.75rem] px-5'>
        <div className='w-full flex justify-center'>
            <ProgressBar percentage="60%" count={true} />
        </div>
        <h1 className="text-[#2E2E2E] w-full text-center md:text-left text-[24px] font-[800] mt-4 mb-4 md:text-[45px] md:font-[600]">
          Verify Your Personal Data
        </h1>

        <form className="w-full flex flex-col justify-center items-center px-5">
          <div className="max-w-[330px] md:max-w-[415px] flex flex-col gap-2">
            <div className="flex gap-3">
              <div>
                <label className="text-[14px]">First Name</label>
                <input
                  type="text"
                  className={`${inputStyle} ${errors.firstName ? errroInputStyle : ''}`}
                  {...register('firstName', {
                    required: 'First name is required',
                    minLength: {
                      value: 3,
                      message: 'First name should be at least 2 characters'
                    }
                  })}
                />
                {errors.firstName && (
                  <ErrorMessage message={errors.firstName.message} />
                )}
              </div>
              <div>
                <label className="text-[14px]">Last Name</label>
                <input
                  type="text"
                  className={`${inputStyle} ${errors.firstName ? errroInputStyle : ''}`}
                  {...register('lastName', {
                    required: 'Last name is required'
                  })}
                />
                {errors.lastName && (
                  <ErrorMessage message={errors.lastName.message} />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[14px]">Email</label>
              <input
                type="email"
                className={`${inputStyle} ${errors.firstName ? errroInputStyle : ''}`}
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div className="flex w-full gap-3">
              <div className="max-w-[96px]">
                <label className="text-[14px]">Country Code</label>
                <input
                  type="text"
                  className={`${inputStyle} ${errors.firstName ? errroInputStyle : ''}`}
                  {...register('countryCode', {
                    required: 'Country code is required'
                  })}
                />
                {errors.countryCode && (
                  <ErrorMessage message={errors.countryCode.message} />
                )}
              </div>
              <div className="w-full">
                <label className="text-[14px]">Phone Number</label>
                <input
                  type="text"
                  className={`${inputStyle} ${errors.firstName ? errroInputStyle : ''}`}
                  {...register('phoneNumber', {
                    required: 'Phone number is required'
                  })}
                />
                {errors.phoneNumber && (
                  <ErrorMessage message={errors.phoneNumber.message} />
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full flex justify-end px-5  max-w-[64.75rem]">
        <div className="flex gap-3">
          <Link
            className="border-[1px] rounded-lg px-2 py-1 shadow-md text-[14px] h-fit"
            to={'/myCart'}
          >
            Back
          </Link>
          <Link
            className="border-[1px] rounded-lg px-2 py-1 shadow-md bg-[#29845a] text-white text-[14px] h-fit"
            // onClick={handleSubmit((data) => {
            //   onSubmit(data)
            // })}
            onClick={()=>{
              createOrder()
            }}
            // to={'/CheckOutConfirmation'}
          >
            Pay
          </Link>
        </div>
      </div>
    </div>
  )
}
