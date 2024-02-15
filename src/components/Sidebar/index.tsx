import React from "react";
import LevelTab from "../ui/LevelTab";
import PlayButton from "../ui/PlayButton";
import MinMaxToggle from "../ui/MinMaxToggle";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#202020] xl:w-[450px] w-full p-6">
      <LevelTab activeIndex={0} />
      <PlayButton />
      <MinMaxToggle />
    </div>
  );
};

export default Sidebar;
