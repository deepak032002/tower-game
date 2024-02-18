import { PropsWithChildren, useEffect, useState } from "react";
import { GameContext } from "./gameContext";
import { generateArray } from "../utils";

const setInnerElem = () => {
  const gameArea = document.getElementById("gameArea");
  const gameAreaWrapper = document.getElementById("gameAreaWrapper");
  const gameSkullAnimateIcon = document.getElementById("gameSkullAnimateIcon");
  if (gameArea && gameAreaWrapper && gameSkullAnimateIcon) {
    const tile = document.querySelector(".tile");
    const gameAreaWrapperHeight =
      gameAreaWrapper.getBoundingClientRect().height;

    const gameAreaHeight = gameArea.getBoundingClientRect().height;
    const tileHeight = tile ? tile.getBoundingClientRect().height : 0;

    gameArea.style.transform = `translateY(${
      gameAreaWrapperHeight / 2 - gameAreaHeight + tileHeight / 2
    }px)`;

    gameSkullAnimateIcon.style.transform = `translateY(${
      gameAreaWrapperHeight / 2 - gameAreaHeight + tileHeight / 2
    }px)`;
  }
};

const GameContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(2);
  const [tileCount, setTileCount] = useState<number>(24);
  const [activeWindow, setActiveWindow] = useState<number>(1);
  const [tileList, setTileList] = useState<Tile[]>([]);
  const [resetComponent, setResetComponent] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    const list = Array(24 / 4)
      .fill(0)
      .map((_item, index) => {
        return generateArray(2, index);
      });

    setTileList(list.flat().reverse());
  }, []);

  const handleGameOverAndStart = () => {
    if (isGameOver) {
      const list = Array(24 / 4)
        .fill(0)
        .map((_item, index) => {
          return generateArray(level, index);
        });

      setTileList(list.flat().reverse());
      setResetComponent((prev) => !prev);
      setIsGameOver(false);
      setIsGameStart(true);
      setTileCount(24);
      setActiveWindow(1);
      setTimeout(() => {
        setInnerElem();
      }, 10);
    } else {
      setIsGameStart(true);
      setIsGameOver(false);
      const list = Array(24 / 4)
        .fill(0)
        .map((_item, index) => {
          return generateArray(level, index);
        });

      setTileList(list.flat().reverse());
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      setInnerElem();
    });

    window.addEventListener("resize", () => {
      setInnerElem();
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const value = {
    isGameStart,
    setIsGameStart,
    isGameOver,
    setIsGameOver,
    level,
    setLevel,
    tileCount,
    setTileCount,
    activeWindow,
    setActiveWindow,
    tileList,
    setTileList,
    handleGameOverAndStart,
    price,
    setPrice,
  };
  return (
    <GameContext.Provider key={`${resetComponent}`} value={value}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
