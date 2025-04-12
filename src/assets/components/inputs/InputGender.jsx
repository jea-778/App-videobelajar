import React from "react";

export default function InputGender(props) {
  return (
    <>
      <form className="flex justify-center align-center flex-col pb-4 md:hidden">
        <label className="text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px] text-[#4A505C] font-sans pb-1">
          {props.children} <span className="text-red-500">*</span>
        </label>
        <select
          className="border rounded-lg p-4"
          name="gender"
          id="gender text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] tracking-[0.2px] md:tracking-[0.2px]"
        >
          <option value="male">Laki-laki</option>
          <option value="female">Perempuan</option>
        </select>
      </form>
    </>
  );
}
