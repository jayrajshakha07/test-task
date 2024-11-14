import React from "react";
import ChecKBox from "./CheckBox";

const Paratext = ({ title, text }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[60%] flex flex-col mr-[10%] ">
        <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
          {title}
        </div>
        <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
          {text}
        </div>
      </div>
      <ChecKBox />
    </div>
  );
};

export default Paratext;
