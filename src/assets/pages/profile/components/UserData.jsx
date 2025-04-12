import React from "react";

export default function UserData({ email = "", name = "", onClick }) {
  return (
    <div>
      <div className="flex gap-4 pb-6">
        <img
          className="w-[92px] h-[92px] rounded-[4px] object-cover cursor-pointer"
          src="./public/images/poster/card1.png"
          alt=""
        />
        <div className="flex flex-col justify-center gap-2">
          <h5 className="text-[20px] font-[600] font-poppins leading-[120%] tracking-[0%]">
            {name}
          </h5>
          <p className="text-[18px] font-[400] font-sans leading-[120%] tracking-[0%]">
            {email}
          </p>
          <div>
            <button
              onClick={onClick}
              className="text-[16px] font-[600] font-sans leading-[120%] tracking-[0%] text-[#F64920] cursor-pointer"
            >
              Ganti Foto Profil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
