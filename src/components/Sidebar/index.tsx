import React from "react";
import LevelTab from "../ui/LevelTab";
import PlayButton from "../ui/PlayButton";
import MinMaxToggle from "../ui/MinMaxToggle";
import { useGameContext } from "../../context/gameContext";

const Sidebar: React.FC = () => {
  const { level, setLevel } = useGameContext();

  return (
    <div className="bg-[#202020] xl:w-[450px] min-w-[450px] w-full p-6">
      <LevelTab activeIndex={level} onClick={setLevel} />
      <PlayButton />
      <MinMaxToggle />
    </div>
  );
};

export default Sidebar;
