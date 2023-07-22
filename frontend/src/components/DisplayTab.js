import React from "react";
import LoadingDots from "./LoadingDots";

const DisplayTab = ({ info, loading }) => {
  return (
    <div className="absolute flex justify-center w-[80%] h-[40%] md:h-[20%] bg-white rounded-lg top-[11rem] shadow-xl z-10 p-4">
      {loading ? (
        <LoadingDots />
      ) : (
        <div className="flex flex-col items-center md:justify-between justify-center gap-3 md:flex-row w-full">
          {/* Ip Adress */}
          <div className="flex flex-col justify-center items-center md:items-start gap-1">
            <h2 className="uppercase text-dgray text-sm font-[500]">
              Ip Adress
            </h2>
            <h1 className="text-lg text-vdgray font-[700]">{info.query}</h1>
          </div>
          {/* Location */}
          <div className="flex flex-col justify-center items-center md:items-start gap-1 md:border-l-[1px] md:border-l-dgray md:pl-8">
            <h2 className="uppercase text-dgray text-sm font-[500]">
              Location
            </h2>
            <h1 className="text-lg text-vdgray font-[700]">{info.city}</h1>
          </div>
          {/* Timezone */}
          <div className="flex flex-col justify-center items-center md:items-start gap-1 md:border-l-[1px] md:border-l-dgray md:pl-8">
            <h2 className="uppercase text-dgray text-sm font-[500]">
              Timezone
            </h2>
            <h1 className="text-lg text-vdgray font-[700]">{info.timezone}</h1>
          </div>
          {/* ISP */}
          <div className="flex flex-col justify-center items-center md:items-start gap-1 md:border-l-[1px] md:border-l-dgray md:pl-8">
            <h2 className="uppercase text-dgray text-sm font-[500]">ISP</h2>
            <h1 className="text-lg text-vdgray font-[700]">{info.isp}</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayTab;
