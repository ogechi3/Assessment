import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <GiHamburgerMenu
        className="z-[9999] bg-opacity-50 cursor-pointer text-white width={40}
          height={40}"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-[#273043] text-[#FEFEFE] left-0 top-50 w-full h-calc(100vh-80px) flex flex-col items-center justify-center gap-8 text-xl cursor-pointer z-20">
          <Link href="/">Dashboard</Link>
          <Link href="/">Revenue</Link>
          <Link href="/">Expenditure</Link>
          <Link href="/">Budget Planning</Link>
          <Link href="/">Reports</Link>
          <Link href="/">
            <button>Settings</button>
          </Link>
          <Link href="/">
            <button>Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
