import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import DropCard from "./DropCard";

const numberMapping = {
  1: { word: "PROCESSING", color: "bg-[#FFF0B3]", text: "text-[#5B4C0D]" },
  2: { word: "PROCESSED", color: "bg-[#FFF0B3]", text: "text-[#5B4C0D]" },
  3: { word: "AT EMBASSY/VFS", color: "bg-[#EAE6FF]", text: "text-[#403294]" },
  4: { word: "APPROVED", color: "bg-[#E3FCEF]", text: "text-[#006644]" },
  5: { word: "REJECTED", color: "bg-[#FFEBE6]", text: "text-[#BF2600]" },
};

function Card({ no }) {
  const [clickDetails, setClickDetails] = useState(false);
  const handleDetailsClick = () => {
    setClickDetails(!clickDetails);
  };

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-[0.25fr_1fr_1fr] p-2 py-4 md:p-6 md:grid-cols-[0.25fr_1fr_1fr_1fr_1fr_0.15fr] md:grid-rows-1">
        <img
          src="https://images.emojiterra.com/google/noto-emoji/v2.034/128px/1f1ec-1f1e7.png"
          alt="country-flag"
          className="h-5 col-span-1 row-span-1"
        />
        <div className="col-span-1 row-span-1">
          <div className="">
            <h2 className="font-semibold mb-1 text-[14px]">
              United Kingdom (UK)
            </h2>
            <h3 className="text-sm text-gray-400">#T68791628IJK</h3>
          </div>
        </div>

        <div className="col-span-1 row-span-1 flex flex-col">
          <div className="flex flex-col">
            <div className="flex mb-1">
              <UserGroupIcon className="h-5 mr-3 text-blue-700" />
              <h2 className="text-gray-600 font-medium text-[14px]">
                Amit & Neha
              </h2>
            </div>
            <h3 className="text-sm text-gray-400">Submitted on 14 Dec</h3>
          </div>
        </div>

        <div className="col-span-1 md:row-span-1 col-start-2 md:col-start-auto self-center md:self-auto">
          <div className=" flex flex-col justify-center">
            <div className="w-fit mb-1 flex">
              <h2
                className={`${numberMapping[no].text} font-bold rounded-sm text-[13px] ${numberMapping[no].color} px-1 font-sans`}
              >
                {numberMapping[no].word}
              </h2>
            </div>
            <h3 className="text-sm text-gray-400 hidden md:inline-block">
              As on 14 Dec, 3:35 PM
            </h3>
          </div>
        </div>

        <div
          onClick={handleDetailsClick}
          className="col-span-1 md:row-span-1 col-start-3 md:col-start-auto cursor-pointer self-center md:justify-self-end"
        >
          <div className=" flex w-full">
            <h2 className="text-blue-600 font-semibold">
              {clickDetails ? "Close" : "See details"}
            </h2>
            {clickDetails ? (
              <ChevronUpIcon className="text-blue-800 h-4 ml-3 mt-1" />
            ) : (
              <ChevronDownIcon className="text-blue-800 h-4 ml-3 mt-1" />
            )}
          </div>
        </div>
      </div>

      {clickDetails && <DropCard no={no} />}
    </>
  );
}

export default Card;
