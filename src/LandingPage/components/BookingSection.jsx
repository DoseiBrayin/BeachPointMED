import React from "react";

export const BookingSection = () => {
  return (
    <div className='bg-[url("/LandingImages/BookingSection/sand.svg")] my-[3rem] h-[10rem] flex flex-col justify-center items-center gap-5 md:flex-row
    md:h-[13.813rem]'>
      <button className="min-[300px]:max-w-[279px] w-full text-white bg-[#0B6FF4] h-[45px] rounded-[25px]">
        Book Your Court
      </button>
      <button className="min-[300px]:max-w-[279px] w-full text-white h-[45px] border-2 rounded-[25px]">
        Manage Reservation
      </button>
    </div>
  );
};
