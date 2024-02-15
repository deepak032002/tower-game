import React from "react";
import { levels } from "../../utils";

interface LevelProps {
  level: {
    id: number;
    name: string;
    svg: JSX.Element;
  };
  isActive: boolean;
}

interface LevelTabProps {
  activeIndex: number;
}

const Level: React.FC<LevelProps> = ({ level, isActive }) => {
  return (
    <div
      className={`flex gap-2 justify-center items-center p-2 flex-1 text-white font-bch uppercase ${
        isActive ? "bg-[#323232] rounded-lg" : ""
      }`}
    >
      {level.svg}
      {level.name}
    </div>
  );
};

const LevelTab: React.FC<LevelTabProps> = ({ activeIndex }) => {
  return (
    <div className="flex gap-1 bg-[#141414] p-0.5 rounded-lg">
      {levels.map((level, index) => (
        <Level key={index} level={level} isActive={index === activeIndex} />
      ))}
    </div>
  );
};

export default LevelTab;
