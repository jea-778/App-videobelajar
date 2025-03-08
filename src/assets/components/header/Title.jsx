import React from 'react'

export default function Title(props) {
  return (
    <>
        <div className='flex flex-col items-center md:pb-9 pb-5'>
          <h3 className='font-poppins font-semibold md:leading-[35.2px] tracking-[0%] leading-[26.4px] text-[24px] md:text-[32px] pb-2.5'>{props.title}</h3>
          <p className='text-[#333333AD] font-sans md:leading-[22.4px] tracking-[0.2px] leading-[19.6px] text-[14px] md:text-[16px]'>{props.desc}</p>
        </div>
    </>
  )
}
