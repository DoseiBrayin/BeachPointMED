export const Hero = () => {
    return (
      <div className="
      flex 
      items-center 
      w-full 
      bg-slate-600 
      h-[485px] 
      min-[300px]:px-[15px] 
      min-[300px]:justify-center 
      min-[900px]:justify-start 
      min-[900px]:h-[471px] 
      min-[900px]:px-[115px] 
      ">
        <div className="max-w-[588px] flex flex-col">
          <div className="flex flex-col gap-0 items-center">
            <p className="text-[32px] text-white font-[300]">Make A</p>
            <h1 className="text-[60px] font-[700] leading-[70px] text-[#FB741A]">SPLASH</h1>
          </div>
          <div className="w-full mt-5">
            <p className="min-[300px]:text-[18px] min-[900px]:text-[28px] text-center text-white font-[200] ">Experience the ultimate in beach sports fun and excitement at our premium facilities.</p>
            <div className="min-[300px]:items-center min-[300px]:mt-8 flex mt-5 gap-5 min-[300px]:flex-col min-[550px]:flex-row">
              <button className="min-[300px]:max-w-[279px] w-full text-white bg-[#0B6FF4] h-[45px] rounded-[25px]">Book Your Court</button>
              <button className="min-[300px]:max-w-[279px] w-full text-white h-[45px] border-2 rounded-[25px]">Manage Reservation</button>
            </div>
          </div>
        </div>
      </div>
    )
  }