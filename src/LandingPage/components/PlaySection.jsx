import React from "react";
import { PlayCard } from "./PlayCard";

export function PlaySection({ img, header, paragraph }) {
  return (
    <>
      <section className="flex flex-col items-center mt-[25px]">
      <h2 className="bold-heading-mobile font-[700] text-[25px] md:text-[32px]">Why Play With Us?</h2>
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
