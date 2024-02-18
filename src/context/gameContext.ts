import { createContext, useContext } from "react";

export const GameContext = createContext<GameContextProps>(
  {} as GameContextProps
);

export const useGameContext = () => {
  if (!GameContext)
    throw new Error("useGameContext must be used within a GameContextProvider");
  return useContext(GameContext);
};
