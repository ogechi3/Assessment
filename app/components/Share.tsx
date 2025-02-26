import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoMdLink } from 'react-icons/io';

const Share = () => {
  return (
    <div className="absolute bg-white rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-max p-2 z-20 text-[#273043] border-b border-gray-400 cursor-pointer ">
      <div className="flex items-center gap-4">
        <CiMail />
        <p className="">Email this File</p>
      </div>
      <div className="flex items-center gap-4">
        <IoMdLink />
        <p className="">Copy Link</p>
      </div>
    </div>
  );
}

export default Share
