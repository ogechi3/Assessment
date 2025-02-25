"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Label from "./Label";

const DonutChart = () => {
  return (
    <div className="">
      <h1 className="font-bold leading-5 m-5">Revenue Source</h1>
    <div className="bg-white rounded-md ring-1 h-full ring-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
      
      <div className="flex flex-row gap-3 py-5 items-center h-full">
        <div className="w-full h-[300px] relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                fill="#8884df"
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 items-center flex flex-col justify-center">
            <span className="font-light">Total Revenue</span>
            <span className="font-bold">₦13,048,000</span>
          </div>
        </div>
        <Label />
      </div>
    </div>
    </div>
  );
};


const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  
];

const COLORS = ["#8A70EF", "#2F80ED","#56CCF2",];
export default DonutChart;
