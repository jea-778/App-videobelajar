import React from "react";

export default function InputNumber({
  type,
  id,
  value,
  onChange,
  onKeyDown,
  error,
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        <input
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
          type={type}
          id={id}
          className="block w-full md:w-[158px] h-[48px] px-4 py-3 border border-gray-300 rounded-[10px] text-[#222325] focus:outline-none focus:border-[#3ECF4C] peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute font-semibold font-sans text-[16px] text-[#3A3541AD] duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] bg-white px-1
                    peer-focus:px-1 peer-focus:text-[#3ECF4C] 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 
                    peer-focus:-translate-y-5 left-2 pointer-events-none"
        >
          No. Hp
        </label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
    </div>
  );
}
