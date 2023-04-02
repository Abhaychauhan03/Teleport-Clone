import {
  ArrowDownTrayIcon,
  ChevronRightIcon,
  ClockIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Toggle from "@atlaskit/toggle";
import DocumentFilledIcon from "@atlaskit/icon/glyph/document-filled";
import PortfolioIcon from "@atlaskit/icon/glyph/portfolio";
import MediaServicesSpreadsheetIcon from "@atlaskit/icon/glyph/media-services/spreadsheet";
import CalendarFilledIcon from "@atlaskit/icon/glyph/calendar-filled";
import OfficeBuildingFilledIcon from "@atlaskit/icon/glyph/office-building-filled";
import QuestionCircleIcon from "@atlaskit/icon/glyph/question-circle";

const numberMapping = {
  1: { word: "PROCESSING", color: "bg-[#FFF0B3]", text: "text-[#5B4C0D]" },
  2: { word: "PROCESSED", color: "bg-[#FFF0B3]", text: "text-[#5B4C0D]" },
  3: { word: "AT EMBASSY/VFS", color: "bg-[#EAE6FF]", text: "text-[#403294]" },
  4: { word: "APPROVED", color: "bg-[#E3FCEF]", text: "text-[#006644]" },
  5: { word: "REJECTED", color: "bg-[#FFEBE6]", text: "text-[#BF2600]" },
};

function DropCard({ no }) {
  return (
    <div className="bg-card-gray">
      <div className="border-b-2 grid grid-cols-[0.25fr_1fr_1fr] grid-rows-2 md:grid-cols-[0.25fr_1.2fr_1.2fr_1fr_1fr] md:grid-rows-1 py-4 md:p-6 gap-3">
        <div className="col-span-1 row-span-1 col-start-2 self-center justify-self-start text-blue-600 flex items-center">
          <h4 className="font-bold text-sm md:text-base">View application</h4>
          <ChevronRightIcon className="h-4 ml-1" />
        </div>
        <div className="col-span-1 row-span-1 col-start-2 md:col-start-auto self-center justify-self-start text-blue-600 flex items-center">
          <h4 className="font-bold text-sm md:text-base">Upload documents</h4>
          <ChevronRightIcon className="h-4 ml-1" />
        </div>
        <div className="col-span-1 row-span-1 col-start-3 row-start-1 md:col-start-auto md:row-start-auto self-center justify-self-start text-blue-600 flex items-center">
          <ArrowDownTrayIcon className="h-4 mr-2" />
          <h4 className="font-bold text-sm md:text-base">Invoice</h4>
        </div>
        <div className="col-span-1 row-span-1 self-center justify-self-start text-[#254142]">
          <div className="flex justify-center items-center w-full">
            <img src="/whatsapp.png" className="h-6 mr-2" />
            <h4 className="font-bold text-sm md:text-base">Need Help?</h4>
          </div>
        </div>
      </div>

      {/* section */}

      <div className="relative grid grid-rows-1 md:grid-rows-2 grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr]">
        <div className="hidden md:flex col-span-1 md:col-span-6 row-span-6 md:col-start-2 md:row-span-1 flex-col md:flex-row space justify-around">
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray text-center z-10 ">
              <DocumentFilledIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">
              Form completed
            </h3>
          </div>
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray z-10 text-center">
              <PortfolioIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">Processing</h3>
          </div>
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray z-10 text-center">
              <MediaServicesSpreadsheetIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">Processed</h3>
          </div>
          <div className="bg-line-color h-[2px] w-[70%] absolute top-[20%]"></div>
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray z-10 text-center">
              <CalendarFilledIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">
              Appointment booking
            </h3>
          </div>
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray z-10 text-center">
              <OfficeBuildingFilledIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">
              At embassy/ VFS
            </h3>
          </div>
          <div className="flex md:flex-col text-center items-center justify-center">
            <div className="w-8 h-8 bg-card-gray z-10 text-center">
              <QuestionCircleIcon size="medium" />
            </div>
            <h3 className="font-normal text-sm text-[#525F75]">
              Approval/Rejection
            </h3>
          </div>
        </div>
        <div className="col-start-1 col-span-8 md:col-start-auto md:row-start-2 md:col-span-8 p-4">
          <div className="bg-note-yellow p-4 rounded-sm">
            <div className="pb-3 px-4 border-b-2 border-line-yellow">
              <h3 className="text-sm font-medium">
                Our team is filing your application with the embassy We may
                reach out to you if we have any questions.
              </h3>
            </div>
            <div className="flex items-center mt-3">
              <div className="px-4 flex justify-center">
                <ClockIcon className="w-4" />
              </div>
              <h2 className="text-sm font-bold">
                Estimated visa arrival date: 29 Jan 2023
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* section */}

      <div className="hidden md:flex items-center justify-end px-5 space-x-1 mb-4">
        <Toggle id="toggle-default" />
        <label htmlFor="toggle-default" className="text-sm font-medium">
          Send status updates on Whatsapp (+91 8800726381)
        </label>
      </div>

      {/* section */}

      <div className="p-4 md:px-10 space-y-3 border-t-2">
        <div className="flex justify-between">
          <UserCircleIcon className="h-6" />
          <h3>Amit Patel</h3>
          <h3>27 yrs</h3>
          <h3 className="hidden md:inline-flex">amitpatel@gmail.com</h3>
          <div className="w-fit flex justify-center items-center">
            <h2
              className={`${numberMapping[no].text} font-bold rounded-sm text-[13px] ${numberMapping[no].color} px-1 font-sans`}
            >
              {numberMapping[no].word}
            </h2>
          </div>
          <h3 className="hidden md:inline-flex">8800726382</h3>
        </div>
        <div className="flex justify-between">
          <UserCircleIcon className="h-6" />
          <h3>Amit Patel</h3>
          <h3>27 yrs</h3>
          <h3 className="hidden md:inline-flex">amitpatel@gmail.com</h3>
          <div className="w-fit flex justify-center items-center">
            <h2
              className={`${numberMapping[no].text} font-bold rounded-sm text-[13px] ${numberMapping[no].color} px-1 font-sans`}
            >
              {numberMapping[no].word}
            </h2>
          </div>
          <h3 className="hidden md:inline-flex">8800726382</h3>
        </div>
      </div>
    </div>
  );
}

export default DropCard;
