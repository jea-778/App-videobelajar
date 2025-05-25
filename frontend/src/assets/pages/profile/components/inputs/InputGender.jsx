import React from "react";

export default function InputGender({ value, type, id }) {
  return (
    <div className="block sm:hidden relative w-full">
      <div className="relative">
        <select
          className="block w-full h-[48px] pl-4 pr-8 py-3 text-[16px] text-[#222325] bg-white rounded-[10px] border border-gray-300 appearance-none focus:outline-none focus:border-[#3ECF4C] peer"
        >
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <div className="absolute right-3 top-1/2 pointer-events-none">
          <svg
            className="absolute top-1/2 right-2 peer-focus:fill-[#3ECF4C] cursor-pointer"
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

        <label
          htmlFor="gender-select"
          className="absolute left-3 top-3 px-1 bg-white text-[16px] text-[#3A3541AD] font-semibold font-sans
                    duration-300 transform origin-left
                    -translate-y-6 scale-75
                    peer-focus:text-[#3ECF4C]"
        >
          Jenis Kelamin
        </label>
      </div>
    </div>
  );
}
