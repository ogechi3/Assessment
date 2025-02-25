import React from "react";
import { MdClose } from "react-icons/md";

const BudgetPlan = () => {
  return (
    <div className=" fixed inset-0  bg-white p5 rounded-md  w-max flex flex-col items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <MdClose className="absolute top-1 right-1" />
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
        <div className="flex flex-col lg:flex-row gap-8 space-x-4">
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="name"> Budget Name</label>
              <input
                type="text"
                placeholder="E.g 2024 Education Budget"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name"> Alocated Amount</label>
              <input
                type="text"
                placeholder="Enter Amount"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name"> Budget Period</label>
              <input
                type="date"
                placeholder="Select year"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name"> Budget Status</label>
              <input
                type="select"
                placeholder="Select Status"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="name"> Budget Name</label>
              <input
                type="text"
                placeholder="E.g 2024 Education Budget"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col">
              <label htmlFor="name"> Budget Category</label>
              <input
                type="text"
                placeholder="Select Category"
                className="p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="file-upload"
                className="w-64 h-40 flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-lg cursor-pointer"
              >
                upload Approved Document
              </label>
              <input
                type="file"
                placeholder="Select Category"
                className=" hidden p-2 pr-4 bg-[#F9F9F9] text-[#ACACAC]"
              />
            </div>
            <div className=" text-blue-200">Add Section</div>
            <div className="flex flex-row gap-5">
              <h1>SAVE AS DRAFT</h1>
              <h1>CREATE BUDGET</h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BudgetPlan;
