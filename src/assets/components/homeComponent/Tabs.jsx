import React from 'react'

export default function Tabs() {
  return (
    <>
     <div className="flex justify-start">
        <div className=" flex pl-[20px] md:pl-[60px] lg:pl-[10px] pt-11 pb-7 text-[#333333AD] font-[500] leading-[22.4px] tracking-[0.2px]">
            <p className='xl:w-[134px] w-[122px] text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] text-[#F64920] font-sans font-[500]'>Semua Kelas</p>
            <p className='xl:w-[122px] w-[111px] text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] font-sans font-[500]'>Pemasaran</p>
            <p className='xl:w-[89px] w-[82px] text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] font-sans font-[500]'>Desain</p>
            <p className='xl:w-[186px] w-[167px] text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] font-sans font-[500]'>Pengembangan Diri</p>
            <p className='xl:w-[81px] text-[14px] md:text-[16px] leading-[140%] tracking-[0.2px] font-sans font-[500]'>Bisnis</p>
        </div>
     </div>
    </>
  );
};