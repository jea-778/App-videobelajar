import React from "react";

export default function Select() {
  return (
    <>
      <div>
        <div className="relative">
          <svg
            className="absolute top-[22px] left-[63px] peer-focus:fill-[#3ECF4C] cursor-pointer"
            width="10"
            height="5"
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0L5 5L10 0H0Z"
              fill="#333333"
              fill-opacity="0.68"
              className="peer-focus:fill-[#3ECF4C] peer-focus:fill-opacity-100"
            />
          </svg>
        </div>
        <select className="block sm:w-[90px] w-[96px] h-[48px] px-4 py-2.5 text-[16px] text-[#3A3541AD] bg-white rounded-[10px] border border-grey-500 appearance-none focus:outline-none focus:border-[#3ECF4C] focus:text-[#3ECF4C] peer cursor-pointer">
          <option
            className="absolute text-[16px] leading-[140%] tracking-[0.2px] text-[#3A3541AD] duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3ECF4C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5 pointer-events-none cursor-pointer"
            value="+62"
          >
            +62
          </option>
          <option
            className="absolute text-[16px] leading-[140%] tracking-[0.2px] text-[#3A3541AD] duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3ECF4C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5 pointer-events-none cursor-pointer"
            value="+199"
          >
            +199
          </option>
          <option
            className="absolute text-[16px] leading-[140%] tracking-[0.2px] text-[#3A3541AD] duration-300 transform -translate-y-4 scale-75 top-1.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#3ECF4C] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 left-2.5 pointer-events-none cursor-pointer"
            value="+1"
          >
            +1
          </option>
        </select>
      </div>
    </>
  );
}
