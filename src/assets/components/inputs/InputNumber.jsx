import React from "react";

export default function InputNumber({
  type,
  id,
  label,
  select,
  value,
  onChange,
  onKeyDown,
  error,
}) {
  return (
    <>
      <div className="pb-4">
        <label className="text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] text-[#4A505C] font-sans pb-1">
          {label} <span className="text-red-500">*</span>
        </label>
        <div className="flex">
          <div className="w-11 h-12 border rounded-bl-[10px] rounded-tl-[10px] relative bg-[#F4F5FA] justify-center items-center ">
            <img
              src="https://flagcdn.com/id.svg"
              alt="Indonesia"
              className="max-w-6 h-6 absolute top-3 left-[7px] sm:left-2.5"
            />
          </div>
          <div className="flex gap-4">
            <select className="w-[78px] md:w-[112px] h-[48px] border rounded-br-[10px] pl-1 rounded-tr-[10px] text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px]">
              <option value="+62">+62</option>
              <option value="+1">+1</option>
              <option value="+91">+91</option>
            </select>

            <input
              onKeyDown={onKeyDown}
              onChange={onChange}
              value={value}
              type={type}
              id={id}
              className="w-[146px] sm:w-[300px] md:w-[337.33px] h-[48px] border br-10 rounded-lg p-3 text-[#222325]"
            />
          </div>
        </div>
        {error && (
          <div className="text-red-500 text-sm sm:text-[16px] mt-2">
            {error}
          </div>
        )}
      </div>
    </>
  );
}
