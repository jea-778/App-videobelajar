import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({
  starNames,
  imageName,
  title,
  text,
  avatarName,
  name,
  job,
  company,
  at,
  rate,
  price,
  diskonPrice,
  onClick,
}) {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate("/detail");
  };

  return (
    <>
      <div
        onClick={navigateDetail}
        className="w-full sm:w-[384px] h-[147px] sm:h-[426px] bg-white p-4 sm:p-5 rounded-xl border-[#3A35411F] border cursor-pointer"
      >
        <div className="flex sm:flex sm:flex-col align-start">
          <img
            className="w-[82px] h-[82px] sm:w-[344px] sm:h-[193px] object-cover rounded-xl"
            src={`./images/poster/${imageName}`}
            alt=""
          />

          <div className="sm:flex sm:flex-col justify-start text-left pl-3 md:pl-0">
            <div className="flex flex-col pt-0 sm:pt-4">
              <div className="flex flex-col gap-0 sm:gap-2">
                <h6 className="font-poppins text-[16px] sm:text-[18px] font-[600] leading-[120%] tracking-[0%] text-[#222325]">
                  {title}
                </h6>
                <p className="font-sans font-[500] leading-[22.4px] tracking-[0.2px] text-[#333333AD] sm:block hidden">
                  {text}
                </p>
              </div>
            </div>

            <div className="flex pt-2 sm:pt-4">
              <img
                className="w-9 h-9 sm:w-10 sm:h-10 object-cover rounded-lg"
                src={`./images/icons/${avatarName}`}
                alt=""
              />

              <div className="flex flex-col pl-3">
                <p className="xl:text-[16px] text-[14px] font-sans font-[500] leading-[140%] tracking-[0.2px] text-[#222325]">
                  {name}
                </p>
                <p className="xl:flex xl:items-center xl:text-[14px] text-[12px] font-sans font-[400] leading-[140%] tracking-[0.2px] text-[#333333AD]">
                  {job}
                  <p className="hidden xl:inline ml-1">{at}</p>{" "}
                  <strong className="hidden xl:inline ml-1">{company}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center align-center pt-2 md:pt-4">
          <div className="flex items-center">
            {starNames.map((star, index) => (
              <img key={index} src={star} className="w-[18px] h-[18px]" />
            ))}
            <p
              className="font-sans text-[12px] xl:text-[14px] text-[#333333AD] font-[500] leading-[19.6px] tracking-[0.2px] underline pl-2"
              href=""
            >
              {rate}
            </p>
          </div>
          <h4 className="font-sans font-[400] text-[14px] sm:text-[12px] text-[#F64920] leading-[140%] tracking-[0.2px] line-through">
            {diskonPrice}
          </h4>
          <h4 className="font-poppins text-[20px] sm:text-[24px] text-[#3ECF4C] leading-[120%] tracking-[0%] font-[600]">
            {price}
          </h4>
        </div>
      </div>
    </>
  );
}
