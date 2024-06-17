export const InputElement = ({ type, label, name, placeholder, hasError, id, register, validation }) => {
  return (
    <>
    <label htmlFor={id} className='font-inter font-normal'>{label}</label>
        <input
            className='border border-[#282828] p-2 h-[3rem] rounded-[5px]'
            id={id}
            type={type}
            placeholder={placeholder}
            name={name}
            autoComplete={name}
            {...register(name, validation)}/>
            {hasError && <span className='text-red-500 text-sm'>{hasError.message}</span>}
    </>
  )
}
