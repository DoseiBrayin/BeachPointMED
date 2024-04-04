import React from "react";

export function PlayCard({ img, header, paragraph }) {
  return (
    <>
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
    
      <section className="flex flex-col items-center mt-[25px]">
      <h2 className="bold-heading-mobile">Why Play With Us?</h2>
      <h3 className="font-inter font-normal text-[16px] w-[60%] text-center mt-5">Here's what sets beach point apart from the rest.</h3>
      <main className="w-full flex justify-center items-center mt-[25px]">
        <div
        className="w-full flex flex-col justify-center items-center gap-5 
        sm:flex sm:flex-col sm:gap-5  
        md:grid md:grid-rows-2 md:grid-cols-2 md:gap-5 md:w-[70%] md:h-[40%]"
        >
          <PlayCard
            header={"Book Online"}
            paragraph={"Choose your prefered time and place to play."}
            img={"Book_online.svg"}
          />
          <PlayCard
            header={"Pay online or at arrival"}
            paragraph={
              "We offer flexible payment options that meet your needs."
            }
            img={"courts.svg"}
          />
          <PlayCard
            header={"Quality courts"}
            paragraph={
              "We're proud to offer the best facilities in the city."
            }
            img={"payment.svg"}
          />
          <PlayCard
            header={"Exceptional Service"}
            paragraph={
              "Our staff are committed to offering a smooth, memorable experience."
            }
            img={"stars.svg"}
          />
        </div>
      </main>
    </section>
    </>

  );
}
