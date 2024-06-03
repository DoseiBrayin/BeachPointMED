import { Footer } from '../../../LandingPage/components/Footer'
import { InputElement } from '../../components/InputElement'
import { InputPassword } from '../../components/InputPassword'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { getValidationRules } from '../../validations/validations'

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors }, getValues } = useForm()

  const onSubmit = handleSubmit((data) => {
  })

  const validationRules = getValidationRules(getValues)

  return (
    <section className='flex flex-col justify-between h-auto '>
        <main className={`flex justify-center items-center h-[100%] gap-10 my-10 md:h-[45rem] md:m-10 md:mx-20 md:justify-between ${errors && Object.keys(errors).length > 0 ? 'md:h-[50rem]' : ''}`}>
            <div className='w-[90%] border-[1px] border-[#878787] h-[95%] p-3 rounded-lg md:h-full md:w-[50%] md:p-7'>
                <h1 className='text-2xl mb-3 font-poppins font-medium'>Sign Up</h1>
                <h3 className='text-sm mb-5 font-poppins font-normal'>Create an account to manage your reservations</h3>
                <form action="" onSubmit={onSubmit} className='flex flex-col justify-center gap-2 md:gap-3 md:h-auto'>

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
            <div className='w-[50%] hidden md:block md:h-full md:w-[75%]'>
                <img src="https://pub-9ce9ae707f414f62ad3249af96d412df.r2.dev/Sign-up-image.webp" className='h-full w-full' alt="" />
            </div>
        </main>
        <Footer />
    </section>
  )
}
