import React from 'react'

export default function SearchInput() {
    return (
        <div>
            <div className='relative cursor-pointer '>
                <input
                    className=' w-full h-[48px] text-[#333333AD] font-sans font-[500] tracking-[0,2%] leading-[140%] placeholder:text-[16px] placeholder:text-[#333333AD] placeholder:font-sans placeholder:font-[500] placeholder:tracking-[0,2%] placeholder:leading-[140%] pl-[15px] pb-[3px] border rounded-lg outline-none'
                    type="text"
                    placeholder="Cari Kelas" />
                <svg
                    className='absolute -top-[-15px] -right-[-13px] cursor-pointer'
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="#333333" fill-opacity="0.68" />
                </svg>
            </div>
        </div>
    )
}
