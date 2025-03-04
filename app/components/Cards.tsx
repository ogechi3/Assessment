import React from 'react'
import { BiUpArrowCircle } from 'react-icons/bi';
import { CiCirclePlus } from 'react-icons/ci';

const Cards = () => {
  return (
    <div className="">
      <div className="hidden  w-full md:grid grid-cols-4 px-5  gap-8  absolute -bottom-10 z-10 items-center">
        {cards.map((card) => (
          <div
            key={card.title}
            className=" p-5 pr-20 bg-white text-[#273043] items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md "
          >
            <p className="font-medium text-[14px] leading-5 text-[#828282]">
              {card.title}
            </p>
            <h1 className="font-bold text-2xl">{card.amount}</h1>
            <div className="flex flex-row gap-3 ">
              <div className="flex flex-row items-center p-1 bg-[#E0ECFC] rounded-[4px]">
                <BiUpArrowCircle />
                +12%
              </div>
              <span className="text-[#828282] font-medium text-[12px]">
                {card.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CARDS{
    title:string
    amount:string
    subtitle:string
}

const cards:CARDS[] = [
  {
    title: "Total Funds Allocated",
    amount: "₦500,756,000",
    subtitle: "From Prev Year",
  },
  {
    title: "State Level Spending",
    amount: "₦50,075,600",
    subtitle: "From total funds",
  },
  {
    title: "State Revenue",
    amount: "₦13,048,000",
    subtitle: "Year to Date",
  },
  {
    title: "% of Budget Utilized",
    amount: "57.67%",
    subtitle: "Year to Date",
  },
];

export default Cards
