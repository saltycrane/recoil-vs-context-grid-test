import { TXYCoords } from "./types";

export const isXYEqual = (xy1: TXYCoords | null, xy2: TXYCoords | null) => {
  if (xy1 === null && xy2 === null) {
    throw new Error("Unexpected args are both null (null, null)");
  }
  return xy1 && xy2 && xy1[0] === xy2[0] && xy1[1] === xy2[1];
};
