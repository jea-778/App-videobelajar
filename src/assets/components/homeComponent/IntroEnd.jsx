import React from 'react'

export default function IntroEnd({ title, desc, text, buttonText, value, type, name, onKeyDown, onChange, onClick, error, subs }) {
  return (
    <>
    
    <div className='pb-[28px] md:pb-[64px]'>
        <div className="w-[320px] h-[400px] sm md:w-[700px] lg:w-[980px] xl:w-[1200px] xl:h-[400px] mx-auto text-center rounded-xl flex flex-col justify-center items-center bg-[url('./images/poster/banner.jpeg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/80 rounded-xl flex flex-col justify-center items-center">


      <div className='flex flex-col gap-1 w-[280px] md:w-[525px] pt-[48px] xl:pt-[92px]'>

      <p className='text-[#C1C2C4] font-sans font-[500] md:text-[18px] text-[16px] leading-[140%] tracking-[0.2px] '>{text}</p>
      <h3 className='text-white font-semibold font-poppins md:text-[28px] text-[24px] leading-[35.2px] tracking-[0%]'>
        {title}
      </h3>

      <p className='text-[#F4F5FA] font-sans leading-[22.4px] tracking-[0.2px] pb-10'>
        {desc}
      </p>
      </div>

        {error ? <p className='text-red-500 font-poppins text-sm sm:text-[16px] mb-2'>{error}</p> : subs ? <p className='text-white font-poppins text-sm sm:text-[16px] mb-2'>{subs}</p> : null}
      <div className='flex flex-col-reverse md:flex-row static md:relative pb-[50.8px] gap-4 xl:gap-0'>
      <button
      onClick={onClick}
      className='static md:absolute w-[280px] md:w-[132px] h-[40px] md:h-[42px] rounded-lg md:right-[8px] md:top-[7.5px] bg-[#FFBD3A]'>
          <a className='text-[#FFFFFF] text-[14px] xl:text-[16px] font-sans font-[600] leading-[140%] tracking-[0.2px] md:tracking-[0.2px]' href="#">{buttonText}</a>
        </button>
        <input
        value={value}
        name={name}
        type={type}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className='pt-2.5 pb-2.5 md:pt-2 md:pb-2 md:pl-8 text-center md:text-start text-[14px] md:text-[16px] rounded-lg w-[280px] md:w-[525px] h-[40px] md:h-[58px]' placeholder='Masukkan Email'
        />
      </div>

     
          </div>
        </div>
    </div>

      
    
    </>
  )
}
