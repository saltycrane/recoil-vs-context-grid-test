import produce, { Draft } from "immer";
import React, { Dispatch, createContext, useContext, useReducer } from "react";

/**
 * Types
 */
type TAction =
  | { type: "click_cell"; xy: TXYCoords }
  | { type: "key_down_cell"; key: string; xy: TXYCoords };

type TDirection = "left" | "right" | "up" | "down";

type TState = {
  activeCell: {
    mode: "active" | null;
    xy: TXYCoords | null;
  };
};

type TXYCoords = [number, number];

/**
 *
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
 *
 */
type TCellProps = {
  children: React.ReactNode;
  xy: TXYCoords;
};

export function ContextCell({ children, xy }: TCellProps) {
  const dispatch = useContext(DispatchContext);
  const { activeCell } = useContext(StateContext);
  const cellMode = isXYEqual(activeCell.xy, xy) ? activeCell.mode : null;
  const style =
    cellMode === "active"
      ? { outline: "2px solid blue", zIndex: 1 }
      : { outline: "1px solid #ccc" };
  return (
    <div
      onClick={() => dispatch({ type: "click_cell", xy })}
      onKeyDown={(event) =>
        dispatch({ type: "key_down_cell", key: event.key, xy })
      }
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
      case "click_cell":
        if (isXYEqual(draft.activeCell.xy, action.xy)) {
          return;
        }
        draft.activeCell.mode = "active";
        draft.activeCell.xy = action.xy;
        return;
      case "key_down_cell": {
        switch (action.key) {
          case "ArrowDown":
            draft = move(draft, "down");
            return;
          case "ArrowLeft":
            draft = move(draft, "left");
            return;
          case "ArrowRight":
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
const move = (draft: Draft<TState>, direction: TDirection) => {
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
};

/**
 * isXYEqual
 */
export const isXYEqual = (xy1: TXYCoords | null, xy2: TXYCoords | null) => {
  if (xy1 === null && xy2 === null) {
    throw new Error("Unexpected args are both null (null, null)");
  }
  return xy1 && xy2 && xy1[0] === xy2[0] && xy1[1] === xy2[1];
};

/**
 * Context
 */
const DispatchContext = createContext<Dispatch<TAction>>(() => {});
const StateContext = createContext<TState>(initialState);
