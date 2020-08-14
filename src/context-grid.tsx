import produce, { Draft } from "immer";
import React, { Dispatch, createContext, useContext, useReducer } from "react";

import Cell from "./Cell";
import { TCellMode, TDirection, TXYCoords } from "./types";

/**
 * Types
 */
type TAction =
  | { type: "blur_cell"; xy: TXYCoords }
  | { type: "click_cell"; xy: TXYCoords }
  | { type: "double_click_cell"; xy: TXYCoords }
  | { type: "key_down_cell"; key: string; xy: TXYCoords };

type TState = {
  activeCell: {
    mode: TCellMode | null;
    xy: TXYCoords | null;
  };
};

/**
 * ContextGrid
 */
type TGridProps = {
  children: React.ReactNode;
  colCount: number;
};

export function ContextGrid({ children, colCount }: TGridProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colCount}, 1fr)`,
          }}
        >
          {children}
        </div>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

/**
 * ContextCell
 */
type TCellProps = {
  value: number;
  xy: TXYCoords;
};

export function ContextCell({ value, xy }: TCellProps) {
  const dispatch = useContext(DispatchContext);
  const { activeCell } = useContext(StateContext);
  const cellMode = isXYEqual(activeCell.xy, xy) ? activeCell.mode : null;

  return (
    <Cell
      cellMode={cellMode}
      onBlur={() => dispatch({ type: "blur_cell", xy })}
      onClick={() => dispatch({ type: "click_cell", xy })}
      onDoubleClick={() => dispatch({ type: "double_click_cell", xy })}
      onKeyDown={(event) => {
        dispatch({ type: "key_down_cell", key: event.key, xy });
      }}
      value={value}
    />
  );
}

/**
 * Reducer
 */
const initialState: TState = {
  activeCell: {
    mode: null,
    xy: null,
  },
};

const reducer = produce(
  (draft: Draft<TState>, action: TAction): TState => {
    switch (action.type) {
      case "blur_cell":
        if (isXYEqual(draft.activeCell.xy, action.xy)) {
          draft.activeCell.mode = null;
        }
        return;
      case "click_cell":
        // clicking on the active cell does nothing
        // (prevent exiting "editing" mode by clicking on it)
        if (isXYEqual(draft.activeCell.xy, action.xy)) {
          return;
        }
        draft.activeCell.mode = "active";
        draft.activeCell.xy = action.xy;
        return;
      case "double_click_cell":
        draft.activeCell.mode = "editing";
        draft.activeCell.xy = action.xy;
        return;
      case "key_down_cell": {
        switch (action.key) {
          case "ArrowDown":
          case "Enter":
            draft = move(draft, "down");
            return;
          case "ArrowLeft":
            draft = move(draft, "left");
            return;
          case "ArrowRight":
          case "Tab":
            draft = move(draft, "right");
            return;
          case "ArrowUp":
            draft = move(draft, "up");
            return;
        }
        return;
      }
    }
  },
);

/**
 * move the active cell left, right, down, or up
 */
function move(draft: Draft<TState>, direction: TDirection) {
  const [x, y] = draft.activeCell.xy;
  draft.activeCell.mode = "active";
  switch (direction) {
    case "down":
      draft.activeCell.xy = [x, y + 1];
      break;
    case "left":
      draft.activeCell.xy = [x - 1, y];
      break;
    case "right":
      draft.activeCell.xy = [x + 1, y];
      break;
    case "up":
      draft.activeCell.xy = [x, y - 1];
      break;
  }
  return draft;
}

/**
 * isXYEqual
 */
function isXYEqual(xy1: TXYCoords | null, xy2: TXYCoords | null) {
  if (xy1 === null && xy2 === null) {
    throw new Error("Unexpected args are both null (null, null)");
  }
  return xy1 && xy2 && xy1[0] === xy2[0] && xy1[1] === xy2[1];
}

/**
 * Context
 */
const DispatchContext = createContext<Dispatch<TAction>>(() => {});
const StateContext = createContext<TState>(initialState);
