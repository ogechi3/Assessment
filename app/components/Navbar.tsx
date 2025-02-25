"use client";
import React from "react";
import Image from "next/image";
import { LuLayoutDashboard, LuShare2 } from "react-icons/lu";
import { HiDocumentReport, HiOutlineDocumentReport } from "react-icons/hi";
import { TbMessage2Check, TbTrendingDown } from "react-icons/tb";
import { IconType } from "react-icons";
import { IoSettingsOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { useState } from "react";
import Profile from "./Profile";
import SubHeading from "./SubHeading";
import Cards from "./Cards";
import Menu from "./Menu";




const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#273043] text-[#FEFEFE]  h-[290px] w-full relative">
      {" "}
      {/* MOBILE */}
      <div className="md:hidden h-full flex items-center justify-between px-3">
        <Image
          src="/images/Chatbot.png"
          alt="nav image"
          width={40}
          height={40}
          className="cursor-pointer z-30"
        />
       <Menu/>
      </div>
      <header className="hidden md:flex flex-row  justify-between items-center gap-8 p-5 border-b border-[FEFEFE] ">
        <Image
          src="/images/Chatbot.png"
          alt="nav image"
          width={40}
          height={40}
        />
        <ul className="flex flex-row gap-8">
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className="flex flex-row items-center font-medium text-[18px] leading-6 first:bg-[#2F80ED] first:rounded-[30px] first:p-3"
              >
                <link.icon /> <span>{link.name}</span>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-row items-center gap-8">
          <IoSettingsOutline width={40} color="#FFEFFE" />
          <div
            className="flex flex-row items-center gap-2 relative cursor-pointer"
            onClick={() => setProfileOpen((prev) => !prev)}
          >
            <Image
              src="/images/Profile (1).png"
              alt="profile image"
              width={40}
              height={40}
            />
            <div className="flex items-center gap-8">
              <div className="">
                <h1 className="font-semibold text-[14px] leading-4">
                  Jibrin Haruna
                </h1>
                <p className="font-medium text-[12]">State Admin</p>
              </div>
              <RiArrowDropDownLine className="text-[#828282] w-8 h-8" />
            </div>
          </div>
          {profileOpen && <Profile />}
        </div>
      </header>
      <SubHeading />
      <Cards />
    </div>
  );
};

interface LINKS {
  name: string;
  link: string;
  icon: IconType;
}

const links: LINKS[] = [
  {
    name: "Dashboard",
    link: "/",
    icon: LuLayoutDashboard,
  },

  {
    name: "Revenue",
    link: "/revenue",
    icon: TbTrendingDown,
  },
  {
    name: "Expenditure",
    link: "/expenditure",
    icon: HiDocumentReport,
  },
  {
    name: "Budget Planning",
    link: "/budget",
    icon: TbMessage2Check,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: HiOutlineDocumentReport,
  },
];

export default Navbar;
