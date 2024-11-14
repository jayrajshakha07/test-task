"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SideBar } from "@/constant/ConstantData";
import { UserStore } from "@/zustand/UserStore";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState("Account");
  const { userData, setUserData } = UserStore();

  useEffect(() => {
    setIsActive(pathname);
  }, [pathname]);

  return (
    <div className=" max-w-[240px]  min-w-[240px] ">
      <Sidebar>
        <SidebarContent className="max-w-60 min-w-60 ">
          <SidebarGroup>
            <SidebarGroupLabel>
              <div className="font-[system-ui]  text-[12px] leading-none mb-1 text-[rgba(55,53,47,0.65)] font-semibold flex items-center h-6  pr-[11px]  text-ellipsis">
                Account
              </div>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="mb-3">
                  <SidebarMenuButton asChild>
                    <div className="flex items-center h-11 pr-3  pl-[6px] ">
                      <div className="w-5 h-5 mr-2 text-[rgba(55,53,47,0.85)]">
                        <div className="bg-white rounded-full shadow-sm shadow-gray-400/20 outline outline-[1px] outline-offset-[-1px] outline-[rgba(227,226,224,0.5)]">
                          <div className="w-5 h-5 flex items-center justify-center rounded-full select-none opacity-100">
                            <Image
                              width={20}
                              height={20}
                              src={
                                userData?.imageuRL
                                  ? userData?.imageuRL
                                  : "https://forum.truckersmp.com/uploads/monthly_2019_09/imported-photo-12263.thumb.png.0a337947bd0458971e73616909a5b1f8.png"
                              }
                              alt="Profile"
                              className="w-full h-full rounded-full object-cover"
                              referrerPolicy="same-origin"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-[system-ui] leading-5 text-[rgb(55,53,47)] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                          {userData?.name}
                        </div>
                        <div className="text-xs font-[system-ui] leading-4 text-[rgba(55,53,47,0.65)] whitespace-nowrap overflow-hidden text-ellipsis">
                          jayrajshakha73@gmail.com
                        </div>
                      </div>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                {SideBar.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        className={`font-normal  cursor-pointer  ${
                          userData?.tab === item?.url
                            ? "bg-[#37352f0f] font-semibold"
                            : ""
                        } `}
                        onClick={() =>
                          setUserData({ ...userData, tab: item?.url })
                        }
                      >
                        <item.icon />
                        <span className=" ml-2 font-[system-ui] font-semibold ">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
