import React from "react";
import { VscTriangleRight, VscTriangleLeft } from "react-icons/vsc";

const GameArea: React.FC = () => {
  return (
    <div className="bg-[#292929] w-full h-full p-6 flex justify-start items-stretch flex-col">
      <p className="font-bch uppercase text-center text-lg mb-6 text-white">
        Max Payout x73.33
      </p>

      <div className="bg-[#202020] relative px-6 before:bg-[linear-gradient(-180deg,_rgba(20,_20,_20,_0.8)_0%,_rgba(20,_20,_20,_0)_100%)] before:absolute before:top-0 before:left-0 before:w-full before:h-[150px] after:bg-[linear-gradient(0deg,_rgba(20,_20,_20,_0.8)_0%,_rgba(20,_20,_20,_0)_100%)] after:bottom-0 after:left-0 after:w-full after:h-[150px] after:absolute rounded-md flex-1 h-full overflow-hidden">
        <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 text-white">
          <VscTriangleRight className="text-4xl" />
        </div>
        <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 text-white">
          <VscTriangleLeft className="text-4xl" />
        </div>
        <div className="absolute font-bch rounded-t-[15px] uppercase z-10 bottom-0 py-[2px] px-6 bg-white left-1/2 -translate-x-1/2">
          <p>Game over. Try Again</p>
        </div>

        <div className="grid grid-cols-4 gap-3 w-[50%] mx-auto">
          {Array(12)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="bg-[#444] h-[120px] rounded-md">
                  {index + 1}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default GameArea;
