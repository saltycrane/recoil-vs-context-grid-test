import React, { useEffect, useRef, useState } from "react";

import { TCellMode } from "./types";

type TCellProps = {
  cellMode: TCellMode;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onDoubleClick: React.MouseEventHandler<HTMLDivElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
  value: number;
};

export default function Cell({
  cellMode,
  onBlur,
  onClick,
  onDoubleClick,
  onKeyDown,
  value,
}: TCellProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(String(value));
  const style =
    cellMode === "active"
      ? { outline: "2px solid blue", zIndex: 1 }
      : cellMode === "editing"
      ? {
          boxShadow: "0 2px 6px 2px rgba(60,64,67,.45)",
          outline: "2px solid blue",
          zIndex: 1,
        }
      : { outline: "1px solid #ccc" };

  // when "active", set the focus to the cell div
  useEffect(() => {
    if (cellMode === "active") {
      divRef.current.focus();
    }
  }, [cellMode]);

  // when "editing", set the focus to the input
  useEffect(() => {
    if (cellMode === "editing") {
      inputRef.current.focus();
    }
  }, [cellMode]);

  return (
    <div
      onBlur={(event) => cellMode !== "editing" && onBlur && onBlur(event)}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      ref={divRef}
      style={{
        backgroundColor: "white",
        ...style,
      }}
      tabIndex={0}
    >
      {cellMode === "editing" ? (
        <input
          onBlur={onBlur}
          onChange={(event) => setDraft(event.currentTarget.value)}
          ref={inputRef}
          style={{
            border: "none",
            height: "100%",
            outline: "none",
            width: "100%",
          }}
          type="text"
          value={draft}
        />
      ) : (
        <div style={{ padding: ".25rem" }}>{draft}</div>
      )}
    </div>
  );
}
