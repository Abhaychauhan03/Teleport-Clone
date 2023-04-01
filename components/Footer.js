import React, { useEffect, useState } from "react";

function Footer() {
  return (
    <div className="bg-body-gray w-full min-h-[101px] grid grid-cols-5">
      <div className="bg-whatsapp-background border border-whatsapp-border flex justify-center self-end cursor-pointer col-span-1 w-fit h-fit p-2 m-2 md:mx-auto md:my-0 rounded-full md:rounded-none md:rounded-t-2xl">
        <img src="/whatsapp.png" className="h-6" />
        <h4 className="text-white hidden md:inline-flex ml-2">Ask for help</h4>
      </div>
    </div>
  );
}

export default Footer;
