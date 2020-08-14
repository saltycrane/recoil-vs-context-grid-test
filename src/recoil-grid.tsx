import React from "react";
import {
  RecoilRoot,
  useRecoilState,
  atomFamily,
  useSetRecoilState,
} from "recoil";

import Cell from "./Cell";
import { TCellMode, TDirection, TXYCoords } from "./types";

/**
 * Types
 */
type TCellState = {
  mode: TCellMode | null;
};

/**
 * RecoilGrid
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
 * RecoilCell
 */
type TCellProps = {
  value: number;
  xy: TXYCoords;
};

export function RecoilCell({ value, xy }: TCellProps) {
  const [cell, setCell] = useRecoilState(cellFamily(xy));
  const moveActiveCell = useMoveActiveCell(xy);

  return (
    <Cell
      cellMode={cell.mode}
      onBlur={() => setCell({ mode: null })}
      onClick={() => {
        setCell((cell) => {
          // clicking on the active cell does nothing
          // (prevent exiting "editing" mode by clicking on it)
          if (cell.mode) {
            return cell;
          }
          return { mode: "active" };
        });
      }}
      onDoubleClick={() => setCell({ mode: "editing" })}
      onKeyDown={(event) => {
        const KEY_TO_DIRECTION = {
          ArrowDown: "down",
          ArrowLeft: "left",
          ArrowRight: "right",
          ArrowUp: "up",
          Enter: "down",
          Tab: "right",
        };
        moveActiveCell(KEY_TO_DIRECTION[event.key]);
      }}
      value={value}
    />
  );
}

/**
 * Atoms
 */
const cellFamily = atomFamily<TCellState, TXYCoords>({
  key: "cell",
  default: {
    mode: null,
  },
});

/**
 * Helpers
 */
function useMoveActiveCell(xy: TXYCoords) {
  const [x, y] = xy;
  const setAboveCell = useSetRecoilState(cellFamily([x, y - 1]));
  const setRightCell = useSetRecoilState(cellFamily([x + 1, y]));
  const setBelowCell = useSetRecoilState(cellFamily([x, y + 1]));
  const setLeftCell = useSetRecoilState(cellFamily([x - 1, y]));

  return (direction: TDirection) => {
    switch (direction) {
      case "down":
        setBelowCell({ mode: "active" });
        return;
      case "left":
        setLeftCell({ mode: "active" });
        return;
      case "right":
        setRightCell({ mode: "active" });
        return;
      case "up":
        setAboveCell({ mode: "active" });
        return;
    }
  };
}
