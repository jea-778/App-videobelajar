import React from 'react'

export default function IntroStart({ title, desc, buttonText }) {

  return (
    <div className='md:pt-[64px] pt-[28px] md:pb-[64px] pb-[28px]'>
  <div className="w-[320px] h-[400px] sm md:w-[700px] lg:w-[980px] xl:w-[1200px] xl:h-[400px] mx-auto text-center rounded-xl flex flex-col justify-center items-center bg-[url('./images/poster/bg.jpeg')] bg-cover bg-center bg-no-repeat">
    <div className="w-full h-full rounded-xl flex flex-col justify-center items-center bg-gradient-to-b from-black/80 to-black/80">
      <div className='flex flex-col w-[280px] md:w-[525px] lg:w-[780px] xl:w-[920px] items-center gap-3'>
        <h1 className='text-white text-center text-[24px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[700] font-poppins leading-[26.4px] md:leading-[36px] lg:leading-[42px] xl:leading-[52.8px] tracking-[0%] md:tracking-[0%] pt-[37px] md:pt-[68.5px]'>
          {title}
        </h1>
        <p className='text-[#FFFFFF] text-[14px] md:text-[16px] font-sans font-[400] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] pb-6'>
          {desc}
        </p>
      </div>

      <div className='pb-[50.8px] text-center'>
        <button className='w-[280px] md:w-[369px] h-[40px] md:h-[42px] rounded-lg bg-[#3ECF4C]'>
          <a className='text-[#FFFFFF] text-[14px] md:text-[16px] font-sans font-[400] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px]' href="#">{buttonText}</a>
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

