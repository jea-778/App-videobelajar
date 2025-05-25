import React from "react";

export default function InputFields({
  name,
  type,
  value,
  id,
  onChange,
  onKeyDown,
  error,
  labelName,
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative">
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="block w-full h-[48px] px-4 py-3 text-[16px] text-gray-900 bg-white rounded-[10px] border border-gray-300 appearance-none focus:outline-none focus:border-[#3ECF4C] peer"
          placeholder=" "
        />
        <label
          htmlFor={id}
          className="absolute font-semibold font-sans text-[16px] text-[#3A3541AD] duration-300 transform 
                    -translate-y-6 scale-75 top-3 z-10 origin-[0] bg-white px-1
                    peer-focus:px-1 peer-focus:text-[#3ECF4C] 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
                    peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
                    peer-focus:-translate-y-5 left-2 pointer-events-none"
        >
          {labelName}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
    </div>
  );
}
