import React from "react";
import Eye from "../Eye";

export default function InputPass({
  name,
  id,
  value,
  onChange,
  onKeyDown,
  error,
  labelName,
  showPass,
  showConfirmPass,
  togglePassVisibility,
}) {
  return (
    <div className="sm:hidden flex flex-col w-full">
      <div className="relative">
        <div className="flex justify-center align-center flex-col">
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
              placeholder=" "
            />
            <Eye
              showPass={showPass || showConfirmPass}
              onClick={togglePassVisibility}
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
          {error && (
            <p className="text-red-500 text-sm sm:text-[16px] mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
