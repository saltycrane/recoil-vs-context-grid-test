import { useRouter } from "next/router";

export const DEFALUT_COL_COUNT = 20;
export const DEFAULT_ROW_COUNT = 100;

export default function useTestParams() {
  const { query } = useRouter();
  const x = parseInt(query.x as string, 10);
  const y = parseInt(query.y as string, 10);
  const colCount = Number.isNaN(x) ? DEFALUT_COL_COUNT : x;
  const rowCount = Number.isNaN(y) ? DEFAULT_ROW_COUNT : y;
  return { colCount, rowCount };
}
