import DownArrow from "@/imports/notification/assets/DownArrow";
import React from "react";
import Calender from "../assets/Calender";
import UserIcon from "../assets/UserIcon";
import EventIcon from "../assets/EventIcon";
import { TableCo } from "./TableCo";

const Audit = () => {
  const auditData = [
    {
      title: "Date",
      first: <Calender />,
      last: <DownArrow />,
    },
    {
      title: "User",
      first: <UserIcon />,
      last: <DownArrow />,
    },
    {
      title: "Event",
      first: <EventIcon />,
      last: <DownArrow />,
    },
  ];

  return (
    <div className="py-9 px-[60px] overflow-auto flex flex-col gap-3">
      <div className="text-base text-black font-medium font-[system-ui]">
        Audit Log
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex justify-between w-[70%] ">
          {auditData?.map((i, index) => {
            return (
              <div
                key={index}
                className=" cursor-pointer font-[system-ui] border-[#37352f59] px-[15px] py-[5px] rounded-2xl border-[1px] flex items-center  "
              >
                {i?.first} {i?.title} {i?.last}
              </div>
            );
          })}
        </div>
        <div className=" w-full flex items-center justify-end ">
          <div className="bg-sky-500 p-3 rounded-md text-white cursor-pointer w-32 text-center font-[system-ui]">
            Export
          </div>
        </div>
      </div>
      <div className="mt-5">
        <TableCo />
      </div>
    </div>
  );
};

export default Audit;
