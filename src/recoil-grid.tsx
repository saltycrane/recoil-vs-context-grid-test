import { RecoilRoot, atom, useRecoilState, useRecoilValue } from "recoil";

import { TDirection, TXYCoords } from "./types";
import { isXYEqual } from "./utils";

/**
 * Types
 */
type TActiveCellState = {
  mode: TMode | null;
  xy: TXYCoords | null;
};

type TMode = "active";

/**
 *
 */
type TGridProps = {
  children: React.ReactNode;
  colCount: number;
};

export function RecoilGrid({ children, colCount }: TGridProps) {
  return (
    <RecoilRoot>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${colCount}, 1fr)`,
        }}
      >
        {children}
      </div>
    </RecoilRoot>
  );
}

/**
 *
 */
type TCellProps = {
  children: React.ReactNode;
  xy: TXYCoords;
};

export function RecoilCell({ children, xy }: TCellProps) {
  const [activeCell, setActiveCell] = useRecoilState(activeCellState);
  const keyDownCell = useKeyDownCell();
  const cellMode = isXYEqual(activeCell.xy, xy) ? activeCell.mode : null;
  const style =
    cellMode === "active"
      ? { outline: "2px solid blue", zIndex: 1 }
      : { outline: "1px solid #ccc" };
  return (
    <div
      onClick={() => setActiveCell({ mode: "active", xy })}
      onKeyDown={(event) => keyDownCell(event.key)}
      style={{
        backgroundColor: "white",
        padding: ".25rem",
        ...style,
      }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

/**
 * Atoms
 */
const activeCellState = atom<TActiveCellState>({
  key: "activeCellState",
  default: {
    mode: null,
    xy: null,
  },
});

/**
 * Fake actions
 */
const useKeyDownCell = () => {
  const [activeCell, setActiveCell] = useRecoilState(activeCellState);
  const { xy } = activeCell;

  const keyDownCell = (key: string) => {
    let newMode: TMode = "active";
    let newXY: TXYCoords = xy;
    switch (key) {
      case "ArrowDown":
        newXY = move(xy, "down");
        break;
      case "ArrowLeft":
        newXY = move(xy, "left");
        break;
      case "ArrowRight":
        newXY = move(xy, "right");
        break;
      case "ArrowUp":
        newXY = move(xy, "up");
        break;
      default:
        // key not handled
        return;
    }
    setActiveCell({ mode: newMode, xy: newXY });
  };

  return keyDownCell;
};

/**
 * Helpers
 */
const move = (xy: TXYCoords, direction: TDirection) => {
  const [x, y] = xy;
  let newXY: TXYCoords;
  switch (direction) {
    case "down":
      newXY = [x, y + 1];
      break;
    case "left":
      newXY = [x - 1, y];
      break;
    case "right":
      newXY = [x + 1, y];
      break;
    case "up":
      newXY = [x, y - 1];
      break;
  }
  return newXY;
};
