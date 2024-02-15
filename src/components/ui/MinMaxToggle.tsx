import React from "react";

interface MinMaxToggleProps {
  className?: string;
}
const MinMaxToggle: React.FC<MinMaxToggleProps> = ({ className }) => {
  return (
    <div
      className={`mt-5 border-[#444] border-[2px] rounded-lg p-[4px] bg-[#202020] font-bch flex justify-between items-center ${className}`}
    >
      <div className="buttons w-[20%] gap-[4px] flex justify-center items-center flex-col">
        <button className="bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1">
          -
        </button>
        <button className="bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1">
          MIN
        </button>
      </div>
      <div className="count text-white flex justify-center flex-col items-center">
        <p className="text-2xl">0.00000000</p>
        <p className="text-[#999] uppercase">$0.00 stake</p>
      </div>
      <div className="buttons w-[20%] gap-[4px] flex justify-center items-center flex-col">
        <button className="bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1">
          +
        </button>
        <button className="bg-[#444] w-full flex justify-center items-center text-[#bcbcbc] text-lg rounded py-1">
          MAX
        </button>
      </div>
    </div>
  );
};

export default MinMaxToggle;
