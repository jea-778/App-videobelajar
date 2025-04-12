import React from "react";
import Eye from "../ui/Eye";

export default function InputPass({
  name,
  id,
  value,
  onChange,
  onKeyDown,
  error,
  labelPass,
  showPass,
  showConfirmPass,
  togglePassVisibility,
}) {
  return (
    <div className="relative">
      <div className="flex justify-center align-center flex-col pb-4">
        <label className="text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] text-[#4A505C] font-sans pb-1">
          {labelPass} <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            name={name}
            type={
              showPass
                ? "text"
                : "password" && showConfirmPass
                ? "text"
                : "password"
            }
            id={id}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="w-full h-[48px] border br-10 rounded-lg pb-1 pt-1 pl-2.5 pr-10 text-[#4A505C]"
          />
          <Eye
            showPass={showPass || showConfirmPass}
            onClick={togglePassVisibility}
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm sm:text-[16px] mt-2">{error}</p>
        )}
      </div>
    </div>
  );
}
