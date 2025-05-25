import React from "react";

export default function ButtonSave({ onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#3ECF4C] hover:bg-green-600 active:bg-green-700 transition duration-200 rounded-lg text-white font-sans text-[16px] font-medium leading w-full md:w-[112px] h-[34px] md:h-[46px] "
      >
        Simpan
      </button>
    </div>
  );
}
