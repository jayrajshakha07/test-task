import { ConnectionData, ConnectionLinks } from "@/constant/ConstantData";

const Connection = () => {
  return (
    <div className="px-[60px] py-[36px] overflow-hidden ">
      <div>
        <div className="p-4">
          <div className="border-b-0 mb-2 mt-0 pb-0 text-gray-800 text-sm font-normal w-auto">
            <div className="flex font-[system-ui] justify-between min-h-[28px] text-lg font-semibold">
              Discover new connections
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden">
            {ConnectionData?.map((i, index) => {
              return (
                <div className="select-none transition ease-in cursor-pointer hover:bg-[#37352f0f] flex flex-col justify-between rounded-lg border border-gray-200 p-3 h-full overflow-hidden min-w-[120px] gap-3 max-w-xs">
                  <div>
                    <div className="flex flex-col items-start gap-2">
                      <img
                        src={i?.imageUrl}
                        alt={i?.title}
                        className="w-9 h-9 p-1 rounded-md"
                      />
                      <div className="flex items-center ml-1">
                        <div className="font-medium font-[system-ui] text-sm mb-1.5">
                          {i?.title}
                        </div>
                      </div>
                    </div>
                    <div className="ml-1 font-[system-ui] mr-1 font-normal text-gray-600 text-xs max-h-18 overflow-hidden leading-tight">
                      {i?.text}
                    </div>
                    <div className="mt-2 mb-1.5 text-xs text-gray-400 flex gap-1 font-medium">
                      <div className="select-none font-[system-ui] transition ease-in cursor-default flex items-center rounded px-1.5 bg-gray-200 text-gray-500 text-[9px] uppercase tracking-wider whitespace-nowrap">
                        {i?.preview}
                      </div>
                    </div>
                  </div>
                  <div className="select-none transition ease-in cursor-pointer inline-flex items-center flex-shrink-0 whitespace-nowrap h-7 rounded-md text-sm min-w-0 px-2 text-blue-600 font-medium bg-blue-100 font-[system-ui] justify-center">
                    {i?.btn}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="select-none hover:bg-[#37352f0f] font-[system-ui] transition ease-in cursor-pointer inline-flex items-center flex-shrink-0 whitespace-nowrap h-7 rounded-md text-sm min-w-0 px-2 text-gray-500 mt-2 ml-[-8px] gap-2">
            See all
          </div>
        </div>
        <div className="flex flex-col p-4 gap-2 pt-0">
          {ConnectionLinks?.map((i, index) => {
            return (
              <div
                key={index}
                className="flex text-inherit no-underline select-none cursor-pointer ml-[-6px]"
              >
                <div className="inline-flex hover:bg-[#37352f0f] font-[system-ui] items-center flex-shrink-0 whitespace-nowrap h-6 rounded-lg text-sm leading-[1.2] min-w-0 px-1.5 text-[rgba(55,53,47,0.5)] transition-[background_20ms_ease-in] select-none cursor-pointer">
                  {i?.icon}
                  {i?.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Connection;
