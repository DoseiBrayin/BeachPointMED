export const InputPassword = ({ type, label, name, placeholder, hasError, id, register, validation }) => {
  return (
    <>
       <label htmlFor={id} className='font-inter font-normal'>{label}</label>
       <div className='border p-1 relative flex h-[3rem] rounded-[5px] border-[#282828]'>
            <input
            className='w-full h-full p-1'
            type={type}
            id={id}
            placeholder={placeholder}
            name={name}
            {...register(name, validation)}/>
            <img src="/AuthImages/closedEye.svg" className='w-6 mr-1' alt="" />
        </div>
        {hasError && <span className='text-red-500 text-sm'>{hasError.message}</span>}
    </>
  )
}
