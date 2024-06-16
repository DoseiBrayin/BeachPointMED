import { Footer } from '../../../LandingPage/components/Footer'
import { InputElement } from '../../components/InputElement'
import { InputPassword } from '../../components/InputPassword'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getValidationRules } from '../../validations/validations'
import { useLoginUserMutation } from '../../Services/authApi'
import toast from 'react-hot-toast'
import { useEffect } from 'react'

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const validationRules = getValidationRules()
  const [loginUser, { data, isSuccess, isError, error }] = useLoginUserMutation()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    handleLogin(data)
  })

  const handleLogin = async (formData) => {
    try {
      await loginUser(formData)
    } catch (error) {
      toast.error('An error has ocurred in the login', error)
    }
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('User loged in successfully')
      navigate('/')
    }
  }, [isSuccess])

  return (
    <section className='flex flex-col justify-between h-auto '>
    <main className='flex justify-center items-center h-[100%] gap-10 my-10 md:h-[45rem] md:m-10 md:mx-20 md:justify-between'>
        <div className='w-[90%] border-[1px] border-[#878787] h-[a95%] p-3 rounded-lg md:h-full md:w-[50%] md:p-7'>
            <h2 className='text-lg md:text-2xl mb-4 mt-1 font-poppins font-normal'>Welcome !</h2>
            <h1 className='text-[23px] md:text-3xl font-poppins font-medium'>Login to Beach Point</h1>
            <h3 className='mb-3 md:mb-5 md:text-lg'>To manage your reservations</h3>
            <form action="" onSubmit={onSubmit} className='flex flex-col justify-center gap-5 mt-10 md:gap-4 md:h-auto'>

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

                <button className='h-[3rem] bg-black text-white rounded-lg mt-4' type='submit'>Login</button>
                <span className='w-full text-center my-8'>Don&apos;t have an account?<Link to={'/signUp'}><strong className='ml-2'>Sign Up</strong> </Link></span>
            </form>
        </div>
        <div className='w-[50%] hidden md:block md:h-full md:w-[75%]'>
            <img src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/Sign-up-image.webp" className='h-full w-full' alt="" />
        </div>
    </main>
    <Footer />
</section>
  )
}
