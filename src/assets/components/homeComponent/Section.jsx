import React from 'react'

export default function Section({title, text}) {
  return (
    <>
        <div className="w-[320px] md:w-[1200px] flex flex-col pl-[20px] md:pl-[60px] lg:pl-[10px] gap-2">
            <h3 className='font-poppins text-[24px] md:text-[32px] md:leading-[35.2px] leading-[110.00000000000001%] tracking-[0%] text-[#222325] font-[600]'>{title}</h3>
            <p className='font-sans text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#333333AD] font-[500]'>{text}</p>
        </div>
    </>
  )
}
