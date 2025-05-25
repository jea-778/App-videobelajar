import React from 'react';

export default function ResetFeature({ onReset }) {
    return (
        <div className='flex justify-between'>
            <p className='cursor-pointer text-[18px] text-[#333333AD] font-poppins font-[600] tracking-[0%] leading-[120%] '>Filter</p>
            <button
                className='cursor-pointer text-[16px] text-[#FF5C2B] font-poppins font-[500] tracking-[0%] leading-[120%]'
                onClick={onReset}
            >
                Reset
            </button>
        </div>
    );
}
