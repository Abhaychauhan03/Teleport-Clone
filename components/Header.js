import Image from "next/image";
import React, { useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

function Header() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-50 flex md:justify-between items-center bg-white shadow-sm p-5 md:pl-16">
        <div
          onClick={() => setMobileView(!mobileView)}
          className="flex md:hidden"
        >
          <Bars3Icon className="h-6" />
        </div>
        <div className="relative flex items-center w-24 h-6 cursor-pointer ml-4">
          <Image
            src="/logo.svg"
            fill
            style={{
              objectPosition: "left",
              objectFit: "contain",
            }}
            alt="logo-img"
          />
        </div>
        <div className="hidden md:flex items-center space-x-4 justify-end text-gray-500">
          <div className="flex items-center space-x-4 p-2 cursor-pointer">
            <UserCircleIcon className="h-7" />
            <h2 className="font-normal text-[14px] text-gray-text">
              Hi, Traveller
            </h2>
            <ChevronDownIcon className="h-4 text-black" />
          </div>
        </div>
      </header>
      {mobileView && (
        <div className="bg-white">
          <div className="flex items-center space-x-4 p-5 cursor-pointer">
            <UserCircleIcon className="h-7" />
            <h2 className="font-normal text-[14px] text-gray-text">
              Hi, Traveller
            </h2>
            <ChevronDownIcon className="h-4 text-black" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
