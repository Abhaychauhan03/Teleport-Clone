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

function DropCard() {
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

      <div className="grid grid-rows-2 grid-cols-[0.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.5fr]">
        <div className="col-span-6 col-start-2 row-span-1 flex space-x-4">
          <div className="flex items-center">
            <DocumentFilledIcon size="medium" />
          </div>
          <div className="flex-grow h-full flex items-center">
            <div className="h-[2px] flex-grow bg-line-color"></div>
          </div>
          <div className="flex items-center">
            <PortfolioIcon size="medium" />
          </div>
          <div className="flex-grow h-full flex items-center">
            <div className="h-[2px] flex-grow bg-line-color"></div>
          </div>
          <div className="flex items-center">
            <MediaServicesSpreadsheetIcon size="medium" />
          </div>
          <div className="flex-grow h-full flex items-center">
            <div className="h-[2px] flex-grow bg-line-color"></div>
          </div>
          <div className="flex items-center">
            <CalendarFilledIcon size="medium" />
          </div>
          <div className="flex-grow h-full flex items-center">
            <div className="h-[2px] flex-grow bg-line-color"></div>
          </div>
          <div className="flex items-center">
            <OfficeBuildingFilledIcon size="medium" />
          </div>
          <div className="flex-grow h-full flex items-center">
            <div className="h-[2px] flex-grow bg-line-color"></div>
          </div>
          <div className="flex items-center">
            <QuestionCircleIcon size="medium" />
          </div>
        </div>
        <div className=" row-start-2 col-span-8 p-4">
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

      <div className="hidden md:flex items-center justify-end px-5 space-x-1">
        <Toggle id="toggle-default" />
        <label htmlFor="toggle-default" className="text-sm font-medium">
          Send status updates on Whatsapp (+91 8800726381)
        </label>
      </div>

      {/* section */}

      <div className="p-4 md:px-10 space-y-3">
        <div className="flex justify-between">
          <UserCircleIcon className="h-6" />
          <h3>Amit Patel</h3>
          <h3>27 yrs</h3>
          <h3 className="hidden md:inline-flex">amitpatel@gmail.com</h3>
          <div className="w-fit flex justify-center items-center">
            <h2 className="text-gray-600 font-bold rounded-sm text-[13px] bg-yellow-200 px-1 font-sans">
              PROCESSING
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
            <h2 className="text-gray-600 font-bold rounded-sm text-[13px] bg-yellow-200 px-1 font-sans">
              PROCESSING
            </h2>
          </div>
          <h3 className="hidden md:inline-flex">8800726382</h3>
        </div>
      </div>
    </div>
  );
}

export default DropCard;
