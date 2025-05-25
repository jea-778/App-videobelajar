import React from "react";

export default function ButtonDelete({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#F64920] hover:bg-red-600 active:bg-red-700 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
      >
        Hapus
      </button>
    </div>
  );
}
