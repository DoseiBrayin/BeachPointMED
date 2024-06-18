import { Footer } from '../../../LandingPage/components/Footer'
import { InputElement } from '../../components/InputElement'
import { InputPassword } from '../../components/InputPassword'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getValidationRules } from '../../validations/validations'
import { useLoginUserMutation } from '../../Services/authApi'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'
import { setUser } from '../../AuthSlices/authSlice'
import { useDispatch } from 'react-redux'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const validationRules = getValidationRules()
  const [loginUser, { data, isSuccess, isError, error, isLoading }] = useLoginUserMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = handleSubmit((data) => {
    handleLogin(data)
  })

  const handleLogin = async (formData) => {
    try {
      await loginUser(formData)
    } catch (err) {
      toast.error('Failed to login', err)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('User loged in successfully')
      dispatch(
        setUser({ token: data.data })
      )
      navigate('/AdminDashboard')
    }
    if (isError) {
      toast.error(error?.data?.detail?.message || 'An error has ocurred in the login')
    }
  }, [isSuccess, isError, error, dispatch, navigate])

  return (
    <section className='flex flex-col justify-between h-auto '>
      <div><Toaster/></div>
    <main className='flex justify-center items-center h-[100%] gap-10 my-10 lg:h-[45rem] lg:m-10 lg:mx-20 lg:justify-between'>
        <div className='w-[90%] border-[1px] border-[#878787] p-3 rounded-lg lg:h-full lg:w-[50%] lg:p-7'>
            <h2 className='text-lg lg:text-2xl mb-4 mt-1 font-poppins font-normal'>Welcome !</h2>
            <h1 className='text-[23px] lg:text-3xl font-poppins font-medium'>Login to Beach Point</h1>
            <h3 className='mb-3 lg:mb-5 lg:text-lg'>To manage your reservations</h3>
            <form action="" onSubmit={onSubmit} className='flex flex-col justify-center gap-5 mt-10 lg:gap-4 lg:h-auto'>

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

                <div className='flex w-full justify-between'>
                <div className='flex gap-2'>
                    <input type="checkbox" />
                    <p>Remember me</p>
                </div>
                    <Link to={'/forgotPassword'}>Forgot password ?</Link>
                </div>

                <button className={`h-[3rem] bg-black text-white rounded-lg mt-4 ${isLoading ? 'bg-gray-300' : ''}`} type='submit' disabled={isLoading}>Login</button>
                <span className='w-full text-center my-8'>Don&apos;t have an account?<Link to={'/signUp'}><strong className='ml-2'>Sign Up</strong> </Link></span>
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
