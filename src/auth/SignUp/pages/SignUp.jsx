import { Footer } from '../../../LandingPage/components/Footer'
import { InputElement } from '../../components/InputElement'
import { InputPassword } from '../../components/InputPassword'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getValidationRules } from '../../validations/validations'
import { useRegisterUserMutation } from '../../Services/authApi'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../AuthSlices/authSlice'
import { v4 } from 'uuid'

export const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const validationRules = getValidationRules(getValues)

  const [registerUser, {
    data,
    isSuccess,
    isError,
    error
  }] = useRegisterUserMutation()

  const onSubmit = handleSubmit((data) => {
    handleRegister(data)
  })

  const handleRegister = async (formData) => {
    if (formData.name && formData.password && formData.confirm_pwd && formData.email) {
      await registerUser({ id: v4(), cedula: formData.ID, name: formData.name, password: formData.password, email: formData.email, phone_number: '3013782590', card_id: '', is_employee: false, fk_rol: 'USR' })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      console.log('hola exitoso')
      dispatch(
        setUser({ token: data.data })
      )
      navigate('/AdminDashboard')
    }
    if (isError || error) {
      toast.error('An error has ocurred while sign up, try again later')
    }
  }, [isSuccess, isError, error])

  return (
    <section className='flex flex-col justify-between h-auto '>
        <Toaster />
        <main className={`flex justify-center items-center h-[100%] gap-10 my-10 lg:h-[45rem] lg:m-10 lg:mx-20 lg:justify-between ${errors && Object.keys(errors).length > 0 ? 'lg:h-[50rem]' : ''}`}>
            <div className='w-[90%] border-[1px] border-[#878787] h-[95%] p-3 rounded-lg lg:h-full lg:w-[50%] lg:p-7'>
                <h1 className='text-2xl mb-3 font-poppins font-medium'>Sign Up</h1>
                <h3 className='text-sm mb-5 font-poppins font-normal'>Create an account to manage your reservations</h3>
                <form action="" onSubmit={onSubmit} className='flex flex-col justify-center gap-2 lg:gap-3 lg:h-[38rem]'>

                    <InputElement
                    register={register}
                    validation={validationRules.name}
                    hasError={errors.name} name={'name'}
                    type={'text'}
                    placeholder={'Enter your full name'}
                    id={'name'}
                    label={'Name'} />

                    <InputElement
                    register={register}
                    validation={validationRules.name}
                    hasError={errors.name} name={'ID'}
                    type={'text'}
                    placeholder={'Enter your identification card'}
                    id={'ID'}
                    label={'Identification Card'} />

                    <InputElement
                    register={register}
                    hasError={errors.email}
                    validation={validationRules.email}
                    name={'email'}
                    type={'email'}
                    placeholder={'Enter your email'}
                    id={'email'}
                    label={'Email'} />

                    <InputPassword
                    register={register}
                    validation={validationRules.password}
                    hasError={errors.password}
                    name={'password'}
                    type={'password'}
                    placeholder={'Enter your password'}
                    id={'password'}
                    label={'Password'} />

                    <InputPassword
                    register={register}
                    validation={validationRules.confirm_pwd}
                    hasError={errors.confirm_pwd}
                    name={'confirm_pwd'}
                    type={'password'}
                    placeholder={'Confirm your password'}
                    id={'confirm_pwd'}
                    label={'Confirm password'} />

                    <button className='h-[3rem] bg-black text-white rounded-lg mt-4'>Sign Up</button>
                    <span className='w-full text-center my-8'>Already have an account <Link to={'/login'}><strong>Login</strong> </Link> </span>
                </form>
            </div>
            <div className='w-[50%] hidden lg:block lg:h-full lg:w-[75%]'>
                <img src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/Sign-up-image.webp" className='h-full w-full' alt="" />
            </div>
        </main>
        <Footer />
    </section>
  )
}
