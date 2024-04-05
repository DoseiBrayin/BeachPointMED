import React from 'react'

export function WhoWeAre () {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-5">
      <header className="flex flex-col items-center">
        <h1 className="bold-heading-mobile">Who We Are</h1>
        <span className="text-center font-normal font-inter text-[15px]">
          We&apos;re More than just numbers
        </span>
      </header>
      <main className="flex w-full justify-center items-center p-10 md:gap-10 md:justify-between">
        <div className="hidden md:w-[50%] md:flex md:flex-col md:items-center md:justify-center">
          <p
            className="text-center w-[62%] font-inter text-black
            md:block md:text-[18px]
            lg:text-[22px] lg:leading-tight
            xl:text-[28px]"
          >
            At Beach Point we&apos;re more than just a volleyball court rental
            service.
          </p>
          <br />
          <p
            className="text-center md:block w-[62%] place-content-center font-inter text-black md:text-[18px]
            lg:text-[22px] lg:leading-tight
            xl:text-[28px]"
          >
            We&apos;re a passionate community dedicated to providing the ultimate
            beach experience. Learn more about who we are and what sets us
            apart.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%] grid grid-cols-2 grid-rows-2 gap-2">
          <div className="w-[100%] relative">
            <img
              className="w-[100%] md:w-[100%rem] rounded-2xl"
              src="/LandingImages/Who_we_are/volley-1.svg"
              alt=""
            />
            <div className="absolute top-0 left-0 p-2 xl:pt-8 xl:pl-5">
              <h2 className="font-[900] font-inter text-[25px] lg:text-3xl xl:text-[3rem]">110k</h2>
              <span className="font-[600] font-inter text-[16px] lg:text-xl xl:text-2xl">
                Revervations
              </span>
            </div>
          </div>
          <div className="w-[100%] relative">
            <img
              className="w-[100%] md:w-[100%rem] rounded-2xl"
              src="/LandingImages/Who_we_are/volley-1.svg"
              alt=""
            />
            <div className="absolute top-0 left-0 p-2 xl:pt-8 xl:pl-5">
              <h2 className="font-[900] font-inter text-[25px] lg:text-3xl xl:text-[3rem]">110k</h2>
              <span className="font-[600] font-inter text-[16px] lg:text-xl xl:text-2xl">
                Revervations
              </span>
            </div>
          </div>
          <div className="w-[100%] relative">
            <img
              className="w-[100%] md:w-[100%rem] rounded-2xl"
              src="/LandingImages/Who_we_are/volley-1.svg"
              alt=""
            />
            <div className="absolute top-0 left-0 p-2 xl:pt-8 xl:pl-5">
              <h2 className="font-[900] font-inter text-[25px] lg:text-3xl xl:text-[3rem]">110k</h2>
              <span className="font-[600] font-inter text-[16px] lg:text-xl xl:text-2xl">
                Revervations
              </span>
            </div>
          </div>
          <div className="w-[100%] relative">
            <img
              className="w-[100%] md:w-[100%rem] rounded-2xl"
              src="/LandingImages/Who_we_are/volley-1.svg"
              alt=""
            />
            <div className="absolute top-0 left-0 p-2 xl:pt-8 xl:pl-5">
              <h2 className="font-[900] font-inter text-[25px] lg:text-3xl xl:text-[3rem]">110k</h2>
              <span className="font-[600] font-inter text-[16px] lg:text-xl xl:text-2xl">
                Revervations
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
