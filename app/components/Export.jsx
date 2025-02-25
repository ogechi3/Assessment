import React from "react";

const TransferMethod = () => {
  return (
    <div className="absolute right-10 z-20 bg-white mx-5 p-5 w-max border b border-gray-400 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-2">
      {data.map((name, index) => (
        <label key={index} value={name} className="flex items-center space-x-2">
          <input type="checkbox" value={name} className="w-4 h-4 rounded-lg" />
          {name}
        </label>
      ))}
    </div>
  );
};

const data = [
  "Microsoft Word(.dox)",
  "PDF Document (.pdf)",
  "Microsoft Excel(.xlsx)",
  "CSV",
];

export default TransferMethod;
