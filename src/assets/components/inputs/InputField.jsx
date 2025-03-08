import React from 'react'

export default function Input(props) {
  return (
    <>
      <form className='flex justify-center align-center flex-col pb-4'>
        <label className='text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] text-[#4A505C] font-sans pb-1'>{props.labelEmail || props.labelPass || props.labelName} <span className="text-red-500">*</span></label>
        <input type={props.type} id={props.id} className="w-[518] h-[48px] border br-10 rounded-lg pb-1 pt-1 pl-2.5 pr-2.5 text-[#4A505C]" />
      </form>
    </>
  )
}
