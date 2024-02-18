interface GameContextProps {
  isGameStart: boolean;
  setIsGameStart: React.Dispatch<React.SetStateAction<boolean>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  tileCount: number;
  setTileCount: React.Dispatch<React.SetStateAction<number>>;
  activeWindow: number;
  setActiveWindow: React.Dispatch<React.SetStateAction<number>>;
  tileList: Tile[];
  setTileList: React.Dispatch<React.SetStateAction<Tile[]>>;
  handleGameOverAndStart: () => void;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

interface Tile {
  id: number;
  type: "skull" | "coin";
  isShow: boolean;
}
