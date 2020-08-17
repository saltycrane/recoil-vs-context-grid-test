import React, { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";

import { TCellMode } from "./types";

type TCellProps = {
  cellMode: TCellMode;
  onBlur: React.FocusEventHandler<HTMLDivElement>;
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
  const [popperTarget, setPopperTarget] = useState(null);
  const [popper, setPopper] = useState(null);
  const { attributes, styles } = usePopper(popperTarget, popper, {
    modifiers: [{ name: "offset", options: { offset: [0, 12] } }],
  });
  const [draft, setDraft] = useState(String(value));
  const [error, setError] = useState("");
  const isErrorVisible = cellMode === "editing" && error;

  const style = isErrorVisible
    ? { outline: "2px solid tomato", zIndex: 1 }
    : cellMode === "active"
    ? { outline: "2px solid dodgerblue", zIndex: 1 }
    : cellMode === "editing"
    ? {
        boxShadow: "0 2px 6px 2px rgba(60,64,67,.45)",
        outline: "2px solid dodgerblue",
        zIndex: 1,
      }
    : { outline: "1px solid #ccc" };

  // set the draft value and run validate function
  const setDraftAndError = (value: string) => {
    setDraft(value);
    const error = validate(parseInt(value, 10));
    setError(error);
  };

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
      onBlur={(event) => cellMode !== "editing" && onBlur(event)}
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
      <div ref={setPopperTarget} style={{ height: "100%", width: "100%" }}>
        {cellMode === "editing" ? (
          <input
            onBlur={onBlur}
            onChange={(event) => setDraftAndError(event.currentTarget.value)}
            ref={inputRef}
            style={{
              border: "none",
              height: "100%",
              outline: "none",
              padding: ".25rem",
              width: "100%",
            }}
            type="text"
            value={draft}
          />
        ) : (
          <div style={{ padding: ".25rem" }}>{draft}</div>
        )}
      </div>
      {isErrorVisible && (
        <div
          ref={setPopper}
          style={{
            ...styles.popper,
            backgroundColor: "tomato",
            color: "white",
            padding: "0 .25rem",
          }}
          {...attributes.popper}
        >
          <small>{error}</small>
        </div>
      )}
    </div>
  );
}

function validate(value: number) {
  return value < 1 ? "Value must be greater than 0" : "";
}
