import React from "react";

export default function Button({ onClick, bg, hover, text }) {
  return (
    <div>
      <div className="flex justify-center lg:justify-end">
        <button
          style={{ backgroundColor: bg, hover: { backgroundColor: hover } }}
          onClick={onClick}
          className="rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
        >
          {text}
        </button>
      </div>
    </div>
  );
}
