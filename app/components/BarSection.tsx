import React from 'react'
import ChartToggle from './ChartToggle';
import DonutChart from './Piechart';

const BarSection = () => {
  return <div className="mt-20 mx-5 my-5 px-5 lg:flex lg:flex-row gap-2 h-[400px] w-full  ">
    <ChartToggle/>
    <DonutChart/>
  </div>;
}

export default BarSection
