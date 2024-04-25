import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '../components/ErrorMessage'

export const ConfirmationPage = () => {
  const inputStyle = 'border border-[#8A8A8A] rounded-md p-2 h-[32px] w-full text-[13px]'
  const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  console.log(errors)
  return (
    <div className='w-full h-screen flex flex-col items-center'>
        <h1 className='text-[#2E2E2E] text-[24px] font-[800] mt-4 mb-4'>Verify Your Personal Data</h1>

        <form onSubmit={handleSubmit((data) => {
          console.log(data)
        })} className='w-full flex flex-col justify-center items-center'>
            <div className='max-w-[330px] w-full'>
                <div className='flex gap-3'>
                    <div className=''>
                        <label className='text-[14px]'>First Name</label>
                        <input
                            type='text'
                            className={inputStyle}
                            {...register('firstName', {
                              required: 'First name is required',
                              minLength: {
                                value: 3,
                                message: 'First name should be at least 2 characters'
                              }
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-[14px]'>Last Name</label>
                        <input
                            type='text'
                            className={inputStyle}
                            {...register('lastName', {
                              required: 'Last name is required'
                            })}
                        />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='text-[14px]'>Email</label>
                    <input
                        type='email'
                        className={inputStyle}
                        {...register('email', {
                          required: 'Email is required'
                        })}
                    />
                </div>
                <div className='flex gap-3'>
                    <div className='max-w-[96px]'>
                        <label className='text-[14px]'>Country Code</label>
                        <input
                            type='text'
                            className={inputStyle}
                            {...register('countryCode', {
                              required: 'Country code is required'
                            })}
                        />
                    </div>
                    <div>
                        <label className='text-[14px]'>Phone Number</label>
                        <input
                            type='text'
                            className={inputStyle}
                            {...register('phoneNumber', {
                              required: 'Phone number is required'
                            })}
                        />
                    </div>
                </div>
            </div>

            <button>Send</button>
        </form>
        {
            errors.firstName && <ErrorMessage message={errors.firstName.message} />
        }
        {
            errors.lastName && <ErrorMessage message={errors.lastName.message} />
        }
        {
            errors.email && <ErrorMessage message={errors.email.message} />
        }
        {
            errors.countryCode && <ErrorMessage message={errors.countryCode.message} />
        }
        {
            errors.phoneNumber && <ErrorMessage message={errors.phoneNumber.message} />
        }
    </div>
  )
}
