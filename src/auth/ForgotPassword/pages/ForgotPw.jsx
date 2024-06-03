import { Footer } from '../../../LandingPage/components/Footer'
import { InputElement } from '../../components/InputElement'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { getValidationRules } from '../../validations/validations'

export const ForgotPw = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    navigate('/resetPassword')
  })

  const validationRules = getValidationRules()

  return (
    <section className='flex flex-col justify-between h-auto '>
    <main className='flex justify-center items-center h-[100%] gap-10 my-10 md:h-[45rem] md:m-10 md:mx-20 md:justify-between'>
        <div className='w-[90%] border-[1px] border-[#878787] h-[95%] p-3 rounded-lg md:h-fit md:w-[50%] md:p-7'>
            <h1 className='text-[23px] md:text-3xl font-poppins font-medium'>Forgot Password ?</h1>
            <h3 className='mb-3 md:mb-5 md:text-lg'>Entered registered email to retrieve your account</h3>
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

                <button className='h-[3rem] bg-black text-white rounded-lg mt-4'>Confirm</button>
                <span className='w-full text-center my-8'>Already have an account?<Link to={'/login'}><strong className='ml-2'>Login</strong> </Link></span>
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
