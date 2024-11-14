import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ExternalLink from "../assets/ExternalLink";
import ChecKBox from "./CheckBox";

const Notification = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="py-9 px-[60px]">
      <div className=" flex flex-col gap-12">
        <div className="flex flex-col">
          <div className="mb-4 border-b-[1px] pb-[14px] text-[16px] font-medium text-[#37352f]  border-[#37352f17] font-[system-ui]">
            My notifications
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[60%] flex flex-col mr-[10%] ">
              <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                Mobile push notifications
              </div>
              <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                Receive push notifications on mentions and comments via your
                mobile app
              </div>
            </div>
            <ChecKBox />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 border-b-[1px] pb-[14px] text-[16px] font-medium text-[#37352f]  border-[#37352f17] font-[system-ui]">
            Slack notifications
          </div>
          <div className="flex items-center justify-between">
            <div className="w-[60%] flex flex-col mr-[10%] ">
              <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                Slack notifications
              </div>
              <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                Receive notifications in your Slack workspace when you&apos;re
                mentioned in a page, database property, or comment
              </div>
            </div>
            <div>
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 border-b-[1px] pb-[14px] text-[16px] font-medium text-[#37352f]  border-[#37352f17] font-[system-ui]">
            Email notifications
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="w-[60%] flex flex-col mr-[10%] ">
                <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                  Activity in your workspace
                </div>
                <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                  Receive emails when you get comments, mentions, page invites,
                  reminders, access requests, and property changes
                </div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={(e) => setIsChecked(e?.target?.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600" />
                  <div className="absolute top-0.5 left-1 w-[18px] h-[19px] bg-white rounded-full transition-transform peer-checked:translate-x-full" />
                </label>
              </div>
            </div>
            {isChecked && (
              <div className="flex items-center justify-between">
                <div className="w-[60%] flex flex-col mr-[10%] ">
                  <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                    Always send email notifications
                  </div>
                  <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                    Receive emails about activity in your workspace, even when
                    you're active on the app
                  </div>
                </div>
                <ChecKBox />
              </div>
            )}
            <div className="flex items-center justify-between">
              <div className="w-[60%] flex flex-col mr-[10%] ">
                <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                  Page updates
                </div>
                <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                  Receive email digests every 8 hours for changes to pages
                  you’re subscribed to
                </div>
              </div>
              <ChecKBox />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[60%] flex flex-col mr-[10%] ">
                <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                  Workspace digest
                </div>
                <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                  Receive email digests of what&apos;s happening in your
                  workspace
                </div>
              </div>
              <ChecKBox />
            </div>
            <div className="flex items-center justify-between">
              <div className="w-[60%] flex flex-col mr-[10%] ">
                <div className="text-[14px] font-normal font-[system-ui] text-[#37352f]">
                  Announcements and update emails
                </div>
                <div className="text-[12px] font-normal font-[system-ui] text-[#37352fa6]">
                  Receive occasional emails about product launches and new
                  features from Notion
                </div>
              </div>
              <div className="rounded-[6px] w-[170px] items-center  hover:bg-[#37352f29] justify-center flex gap-2 cursor-pointer pl-[6px]  text-[14px] px-[10px] py-[5px]   border-[#37352f29] text-[#4e4d48]  font-[system-ui] border-[1px] ">
                <ExternalLink /> Manage Setting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
