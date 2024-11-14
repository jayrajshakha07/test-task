"use client";

import Image from "next/image";
import React, { useState } from "react";
import ProfileInput from "./ProfileInput";
import CancelIcon from "../assets/CancelIcon";
import { UserStore } from "@/zustand/UserStore";

const AccountRoot = () => {
  const [name, setName] = useState("Jay Rajshakha");
  const [isHover, setIsHover] = useState(false);
  const [text, setText] = useState("Replace Photo");
  const { setUserData, userData } = UserStore();
  const handleNameChange = (e) => {
    setName(e.target.value);
    setUserData({ ...userData, name: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserData({ ...userData, imageuRL: event?.target?.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handlerRemoveImage = (e) => {
    e.stopPropagation();

    setUserData({ ...userData, imageuRL: null });
  };

  return (
    <div className="py-9 px-[60px] overflow-auto">
      <div className=" flex flex-col gap-12">
        <div className="flex flex-col w-full">
          <div className="mb-4 border-b-[1px] pb-[14px] text-[16px] font-medium text-[#37352f]  border-[#37352f17] font-[system-ui]">
            My profile
          </div>
          <div className="flex w-full ">
            <div className="flex items-center relative">
              <div
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className="relative flex items-center w-[40%] h-24"
              >
                {" "}
                {isHover && (
                  <div
                    onMouseEnter={() => setText("Remove Photo")}
                    onMouseLeave={() => setText("Replace Photo")}
                    onClick={(e) => handlerRemoveImage(e)}
                    className="absolute top-[18px] left-[45px] z-50"
                  >
                    <CancelIcon />
                  </div>
                )}
                <Image
                  src={
                    userData?.imageuRL
                      ? userData?.imageuRL
                      : "https://forum.truckersmp.com/uploads/monthly_2019_09/imported-photo-12263.thumb.png.0a337947bd0458971e73616909a5b1f8.png"
                  }
                  width={60}
                  height={60}
                  alt="Profile"
                  className=" rounded-[50%] w-[60px] h-[60px] object-cover"
                />
                <label
                  htmlFor="upload-photo"
                  className="absolute bottom-[30px] w-[65px] h-[65px] bg-transparent rounded-[50%] cursor-pointer right-0  text-white text-xs px-2 py-1  "
                ></label>
                {isHover && (
                  <p className="bg-black cursor-pointer rounded-[5px] font-[system-ui] w-[100px] text-white text-[11px] px-3 py-[3px] -left-[16px]  absolute top-[83px] ">
                    {text}
                  </p>
                )}
                <input
                  type="file"
                  id="upload-photo"
                  className="bottom-[30px] contents absolute   w-[65px] h-[65px] bg-transparent
                  "
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              <div
                className="text-[16px] w-full font-normal font-[system-ui] ml-[13px] text-[#37352fa6]"
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
              >
                <ProfileInput handleNameChange={handleNameChange} name={name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRoot;
