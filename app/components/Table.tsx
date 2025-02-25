"use client";
import React, { useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import Share from "./Share";
import Filter from "./Filter";
import TransferMethod from "./Export";

const Table = () => {
  const [share, setShare] = useState(false);
  const [filter, setFilter] = useState(false);
  const [transfer, setTransfer] = useState(false);

  return (
    <div className="mx-5 my-5 px-5 ">
      <div className="bg-white rounded-md ring-1 h-full ring-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:m-8 relative overflow-x-auto px-5">
        <header className="flex flex-row justify-between items-center p-5 border-b border-gray-400">
          <div className="">
            <form className=" ring-1 ring-gray-200 p-2 pr-8 rounded-[10px] items-center ">
              <button className="cursor-pointer relative w-full max-w-sm">
                <input type="name" placeholder="Search" />
              </button>
            </form>
          </div>
          <div className="hidden md:flex gap-2">
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
                onClick={() => setFilter((prev) => !prev)}
              >
                <CiFilter /> <span>Filter</span>
              </button>
              {filter && <Filter />}
            </div>

            <div>
              <button
                className="ring-1 text-[#273043] bg-white flex flex-row items-center border-0  shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 py-2"
                onClick={() => setTransfer((prev) => !prev)}
              >
                <CiExport /> <span>Export</span>
              </button>
              {transfer && <TransferMethod />}
            </div>
          </div>
        </header>

        <main>
          <div className="overflow-x-auto p-4 mx-5 ">
            <div className="border-b border-gray-400">
              <ul className="flex flex-row gap-5 py-5 font-bold items-center text-[#5C5C5C] text-[10px] md:text-base">
                <li className="text-[#2F80ED] bg-[#EAF2FD] rounded-[30px] p-2 ">
                  Primary Schools
                </li>
                <li>Junior Secondary Schools</li>
                <li>Senior Secondary Schools</li>
                <li>Technical and vocational</li>
                <li>Higher Education</li>
              </ul>
            </div>
            <table className="min-w-full border border-gray-300">
              <thead className="text-[#1C4D8E] font-light text-[10px] md:text-base">
                <tr>
                  <th className="border p-2 text-center">
                    <input type="checkbox" />
                  </th>
                  <th className="border p-2">Schools</th>
                  <th className="border p-2">Proposed-Funding ₦</th>
                  <th className="border p-2">Actual Funding ₦</th>
                  <th className="border p-2">Variance ₦</th>
                  <th className="border p-2">Projects ₦</th>
                  <th className="border p-2">% Budget Utilized</th>
                </tr>
              </thead>

              <tbody>
                {data.map((row) => (
                  <tr
                    key={row.utilized}
                    className="border even:bg-[#EAF2FD33] odd:bg-white text-[#273043] font-meduim text-[10px] md:text-base"
                  >
                    <td className="border p-2 text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="border p-2 text-center">{row.school}</td>
                    <td className="border p-2 text-center">{row.proposed}</td>
                    <td className="border p-2 text-center">{row.actual}</td>
                    <td className="border p-2 text-center">{row.variance}</td>
                    <td className="border p-2 text-center">{row.projects}</td>
                    <td className="border p-2 text-center">{row.utilized}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

interface DATA {
  school: string;
  proposed: string;
  actual: string;
  variance: string;
  projects: string;
  utilized: string;
}

const data: DATA[] = [
  {
    school: "ADS Primary School I, Oke Balogun",
    proposed: "2,500,000",
    actual: "2,500,000",
    variance: "+200,000",
    projects: "200,000",
    utilized: "22%",
  },
  {
    school: "Methodist Primary School I, Akpara",
    proposed: "3,000,000",
    actual: "3,000,000",
    variance: "-200,000",
    projects: "500,000",
    utilized: "37%",
  },
  {
    school: "St. Mathias Primary School Orogun",
    proposed: "3,200,000",
    actual: "2,500,000",
    variance: "+200,000",
    projects: "0",
    utilized: "16%",
  },
  {
    school: "Elekuro Baptist Primary School, Isokun",
    proposed: "2,800,000",
    actual: "2,800,000",
    variance: "-200,000",
    projects: "200,000",
    utilized: "6%",
  },
  {
    school: "Community Primary School, Elewura",
    proposed: "3,000,000",
    actual: "3,200,000",
    variance: "-100,000",
    projects: "350,000",
    utilized: "11%",
  },
  {
    school: "OLGC Primary School Ayegun",
    proposed: "2,500,000",
    actual: "2,500,000",
    variance: "+200,000",
    projects: "0",
    utilized: "14%",
  },
  {
    school: "Anwar-UI-Islam Primary School,Eleyele",
    proposed: "2,400,000",
    actual: "3,000,000",
    variance: "0",
    projects: "300,000",
    utilized: "5%",
  },
  {
    school: "Methodist Primary School II,Akpaara",
    proposed: "2,800,000",
    actual: "2,800,000",
    variance: "-200,000",
    projects: "150,000",
    utilized: "0.6%",
  },
  {
    school: "Methodist Primary School II,Akpaara",
    proposed: "2,400,000",
    actual: "2,400,000",
    variance: "+100,000",
    projects: "0",
    utilized: "0.8%",
  },
];

export default Table;
