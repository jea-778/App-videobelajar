import React from "react";

export default function Input({
  name,
  type,
  id,
  value,
  onChange,
  onKeyDown,
  error,
  labelEmail,
  labelName,
}) {
  return (
    <>
      <form className="flex justify-center align-center flex-col pb-4">
        <label className="text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] text-[#4A505C] font-sans pb-1">
          {labelEmail || labelName} <span className="text-red-500">*</span>
        </label>
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="w-[518] h-[48px] border br-10 rounded-lg pb-1 pt-1 pl-2.5 pr-2.5 text-[#4A505C]"
        />
        {error && (
          <p className="text-red-500 text-sm sm:text-[16px] mt-2">{error}</p>
        )}
      </form>
    </>
  );
}
