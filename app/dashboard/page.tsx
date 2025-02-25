"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import BudgetPlan from "../components/BudgetPlan";
import { MdClose } from "react-icons/md";
import { FiChevronDown, FiUpload } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className=" mt-20 m-auto text-center">
        <h1>
          No budget data available yet. Start by creating your <br />
          budget for the year
        </h1>
        <button
          className="p-2 text-blue-200 ring-1 ring-blue-200"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(true);
          }}
        >
          {" "}
          <Link href="/">Create Budget</Link>{" "}
        </button>
      </div>
      <div className="">
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-[9999] p-20">
            <div className="  bg-white p5 rounded-md  w-max flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
              <div className="flex flex-col items-center text-center">
                <h1 className=" font-bold text-[10px] leading-6 md:text-base text-center">
                  Create Budget Plan
                </h1>
                <p className="text-center">
                  Record and check state level educational <br />
                  expenditure accross various categories
                </p>
              </div>

              <form>
                <div className="flex flex-col lg:flex-row gap-8 space-x-4 p-8">
                  <div className="">
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="name"> Budget Name</label>
                      <input
                        type="text"
                        placeholder="E.g 2024 Education Budget"
                        className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="name"> Alocated Amount</label>
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        className="p-2 pr-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full relative">
                      <label htmlFor="name"> Budget Period</label>
                      <input
                        type="date"
                        placeholder="Select year"
                        className="p-2 pr-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                      <FiChevronDown className="absolute top-1/2 right-3 transform-translate-y-1/2 text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="name"> Budget Status</label>
                      <input
                        type="select"
                        placeholder="Select Status"
                        className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <label htmlFor="name"> Budget Name</label>
                      <input
                        type="text"
                        placeholder="E.g 2024 Education Budget"
                        className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-4 w-full relative">
                      <label htmlFor="name"> Budget Category</label>
                      <input
                        type="text"
                        placeholder="Select Category"
                        className="p-2 px-8 bg-[#F9F9F9] text-[#ACACAC]"
                      />

                      <FiChevronDown className="absolute top-1/2 right-3 transform-translate-y-1/2 text-gray-500" />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                      <label
                        htmlFor="file-upload"
                        className="relative w-64 h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
                      >
                        <FiUpload className="text-gray-500 text-4xl" />
                        upload Approved Document
                      </label>
                      <input
                        type="file"
                        placeholder="Select Category"
                        className=" hidden p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
                      />
                    </div>
                    <div className=" text-blue-200 flex flex-row items-center">
                      <CiCirclePlus /> Add Section
                    </div>
                    <div className="flex flex-row gap-5 cursor-pointer">
                      <h1>SAVE AS DRAFT</h1>
                      <h1 className=" text-blue-200">CREATE BUDGET</h1>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="relative rounded-[30px] bg-blue-400">
              <button onClick={() => setIsOpen(false)}>
                <MdClose className="absolute top-0 right-3 text-black" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
