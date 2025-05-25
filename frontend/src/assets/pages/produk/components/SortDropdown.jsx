import React, { useState } from 'react';

export default function SortDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <>
            <div
                onClick={toggleDropdown}
                className='flex bg-white border rounded-lg p-[10px] w-[152px] lg:w-[122px] h-[48px] cursor-pointer'>
                <p className='relative left-2 text-[16px] text-[#333333AD] font-sans font-[500] tracking-[0.2%] leading-[140%]'>
                    Urutkan
                </p>
                <svg
                    className="relative top-[10px] lg:-right-[25px] -right-[50px]"
                    width="10"
                    height="5"
                    viewBox="0 0 10 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0L5 5L10 0H0Z"
                        fill="#333333"
                        fillOpacity="0.68"
                    />
                </svg>
            </div>


            {isDropdownOpen && (
                <>
                    <div className='relative'>
                        <div
                            onClick={closeDropdown}
                            className="absolute right-[0px] mt-6 md:mt-3 w-full md:w-[166px] bg-white md:rounded-lg shadow-lg md:border border-gray-200 z-50"
                        >

                            <ul>
                                <li className="border md:rounded-t-lg">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px] text-[#333333AD] hover:bg-gray-100"
                                    >
                                        Harga Rendah
                                    </a>
                                </li>
                                <li className="border">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px] text-[#333333AD] hover:bg-gray-100"
                                    >
                                        Harga Tinggi
                                    </a>
                                </li>
                                <li className="border">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px] text-[#333333AD] hover:bg-gray-100"
                                    >
                                        A to Z
                                    </a>
                                </li>
                                <li className="border">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px]  text-[#333333AD] hover:bg-gray-100"
                                    >
                                        Z to A
                                    </a>
                                </li>
                                <li className="border">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px] text-[#333333AD] hover:bg-gray-100"
                                    >
                                        Rating Tertinggi
                                    </a>
                                </li>
                                <li className="border">
                                    <a
                                        className="block md:px-4 md:py-2 pt-4 pb-4 pl-3 pr-3 font-[500] font-sans text-[14px] text-[#333333AD] hover:bg-gray-100"
                                    >
                                        Rating Terendah
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
