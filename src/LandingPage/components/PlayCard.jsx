import React from "react";

export function PlayCard({ img, header, paragraph }) {
  return (
    <div 
    className="w-[80%] h-[17rem] rounded-xl p-6 flex flex-col items-center justify-around bg-[#EAEAEA] 
    min-[530px]:h-[20rem]
    md:w-[100%]
    md:h-[14rem]
    lg:h-[16rem]
    ">
      <img
        className="w-[50%] 
        sm:w-[40%] 
        md:w-[30%] 
        lg:w-[8rem] lg:h-[8rem]"
        src={`/LandingImages/Play_with_us/${img}`}
        alt=""
      />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">{header}</h2>
        <p className="text-center">{paragraph}</p>
      </div>
    </div>
  );
}
