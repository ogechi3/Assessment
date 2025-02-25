"use client";
import React, { useState } from "react";
import { CiExport } from "react-icons/ci";
import { LuShare2 } from "react-icons/lu";
import { RiArrowDropDownLine } from "react-icons/ri";
import Share from "./Share";
import TransferMethod from "./Export";

const SubHeading = () => {
  const [share, setShare] = useState(false);
  const [transfer, setTransfer] = useState(false);
  return (
    <div className="hidden md:flex flex-row justify-between px-5 py-6">
      <div className="">
        <h1 className="font-semibold text-2xl">Analytics Overview</h1>
        <p className="font-medium text-[14px]">Year to Date</p>
      </div>

      <div className="flex flex-row justify-evenly gap-8">
        <button className="ring-1 ring-white flex flex-row items-center px-2">
          Showing:This Year{" "}
          <span>
            <RiArrowDropDownLine className="w-5 h-5" />
          </span>
        </button>

        <div>
          <button
            className="ring-1 text-[#273043] bg-white flex flex-row items-center border-0  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-2"
            onClick={() => setShare((prev) => !prev)}
          >
            <LuShare2 /> <span>Share</span>
          </button>
          {share && <Share />}
        </div>

        <div>
          <button
            className="ring-1 text-[#273043] bg-white flex flex-row items-center border-0  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-2"
            onClick={() => setTransfer((prev) => !prev)}
          >
            <CiExport /> <span>Export</span>
          </button>
          {transfer && <TransferMethod/>}
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
