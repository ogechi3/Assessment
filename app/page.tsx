import React from "react";
import Cards from "./components/Cards";
import ChartToggle from "./components/ChartToggle";
import DonutChart from "./components/Piechart";
import Label from "./components/Label";
import Category from "./components/Category";
import Table from "./components/Table";


const HomePage = () => {
  return (
    <div className="">
      <div className=" mt-24">
        <ChartToggle />
      </div>
      <div className=" md:mt-24 mt-96">
        <Category />
      </div>
      <div className=" md:mt-24 mt-96 ">
        <div className="flex flex-row gap-2 items-center mx-5 my-5 px-5 ">
          <h1 className="text-[#2F80ED] bg-[#EAF2FD] rounded-[30px] p-2">
            Top Performing Schools{" "}
          </h1>
          <h1>Under Performing Schools </h1>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default HomePage;
