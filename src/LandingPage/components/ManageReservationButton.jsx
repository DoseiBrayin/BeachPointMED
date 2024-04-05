export const ManageReservationButton = ({ backgroundBlack = false }) => {
  const style = backgroundBlack
    ? 'border-2 border-[#fff] rounded-[25px] max-w-[279px] w-full flex justify-center h-[45px] items-center gap-2 text-white'
    : 'border-2 border-[#000] rounded-[25px] max-w-[279px] w-full flex justify-center h-[45px] items-center gap-2 text-[#000] md:border-[#fff] md:text-white'
  const image = window.innerWidth < 768 ? '../../../../public/LandingImages/ManageReservationsMobile.webp' : '../../../../public/LandingImages/ManageReservations.webp'
  const BackgroundImage = backgroundBlack ? '../../../../public/LandingImages/ManageReservations.webp' : image
  return (
      <button className={style}>
          <img className="w-[29px] h-[29px]" src={BackgroundImage} alt="" />
          Manage Reservation
      </button>
  )
}
