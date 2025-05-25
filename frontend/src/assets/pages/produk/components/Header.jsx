import React from 'react'

export default function Header() {
    return (
        <div>
            <div className='flex flex-col items-start xl:items-start sm:items-center pt-[28px] sm:pt-[64px] pb-[36px]'>
                <h1 className='text-[24px] sm:text-[28px] md:text-[32px] font-poppins font-[600] tracking-[0%] leading-[110.00000000000001%] pb-[10px]  '>Koleksi Video Pembelajaran Unggulan</h1>
                <p className='text-[14px] whitespace-nowrap sm:whitespace-normal md:text-[16px] text-[#333333AD] font-sans font-[400] tracking-[0.2px] leading-[140%] '>Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            </div>
        </div>
    )
}
