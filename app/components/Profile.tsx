"use client";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { CiLogout, CiSettings } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="absolute w-max p-10 text-[#273043]  rounded-md bg-white z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] right-0 top-12">
      <div className=" flex flex-row gap-8">
        <Image src="/images/profile.png" alt="" width={40} height={40} />
        <div className="">
          <h1 className="font-semibold text-[14px] leading-4">Jibrin Haruna</h1>
          <p className="font-medium text-[12]">State Admin</p>
        </div>
      </div>
      <div>
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-row items-center gap-8 mt-5 text-[] font-medium text-[18px] leading-6 last:text-[#D32C1F] "
          >
            <item.icon className="w-5 h-5"/> <span>{item.name}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

interface ITEMS {
  name: string;
  icon: IconType;
}

const items: ITEMS[] = [
  {
    name: "Profile",
    icon: CgProfile,
  },
  {
    name: "Settings",
    icon: CiSettings,
  },
  {
    name: "Log Out",
    icon: CiLogout,
  },
];

export default Profile;
