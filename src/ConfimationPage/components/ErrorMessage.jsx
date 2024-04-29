export const ErrorMessage = ({ message }) => {
  return (
        <div className="flex items-center">
          <img src="../../../public/ConfirmationPage/AlertCircle.svg" alt="" />
          <p className='text-[#8E1F0B] text-[12px]' >{message}</p>
        </div>
  )
}
