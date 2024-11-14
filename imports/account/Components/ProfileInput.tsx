import React from "react";

export default function ProfileInput({ handleNameChange, name }) {
  return (
    <div className="w-[250px] mx-auto">
      <label className="block text-gray-500 font-normal font-[system-ui] text-sm mb-1 text-[#37352fa6]">
        Preferred name
      </label>
      <input
        type="text"
        onChange={(e) => handleNameChange(e)}
        placeholder="Enter your name"
        value={name}
        className=" w-full p-2 text-[#37352fa6] font-normal text-xs font-[system-ui] text-gray-700 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}
