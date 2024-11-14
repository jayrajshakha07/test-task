"use client";

import { useState } from "react";
import DownArrow from "../assets/DownArrow";
import PlusIcon from "../assets/PlusIcon";
import RightIcon from "../assets/RightIcon";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className=" relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between rounded-[4px] items-center border-none w-full px-4 py-2 text-gray-700 bg-white border  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-blue-500"
      >
        <span>Off</span>
        <DownArrow />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-[280px] h-[80px] -left-[206px] top-[38px] mt-2  border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg">
          <ul className="">
            <div className="mt-1">
              <div className="select-none transition-colors duration-[20ms] ease-in cursor-pointer w-[calc(100%_-_8px)] mx-1 rounded-md   hover:bg-[rgba(55,53,47,0.06)]">
                <div className="flex items-center w-full min-h-[28px] text-sm leading-[120%] p-[6px]">
                  <div className="flex-1 mx-3 truncate font-[system-ui]">
                    Off
                  </div>
                  <div className="mr-3 flex-shrink-0">
                    <RightIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-1 shadow-[rgba(55,53,47,0.09)_0px_-1px_0px] mt-1">
              <div className="select-none transition-colors duration-[20ms] ease-in cursor-pointer w-[calc(100%_-_8px)] mx-1 rounded-md hover:bg-[rgba(55,53,47,0.06)]">
                <div className="flex items-center w-full min-h-[28px] text-sm leading-[120%] p-[6px]">
                  <div>
                    <PlusIcon />
                  </div>
                  <div className="flex-1 mx-3 truncate font-[system-ui]">
                    Add new account
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}
