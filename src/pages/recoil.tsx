import { range } from "lodash";
import React from "react";
import { Container } from "reactstrap";

import { RecoilGrid, RecoilCell } from "../recoil-grid";
import useTestParams from "../useTestParams";

export default function RecoilTest() {
  const { colCount, rowCount } = useTestParams();
  return (
    <Container fluid>
      <h4>Recoil test</h4>
      <RecoilGrid colCount={colCount}>
        {range(1, rowCount + 1).map((y) => {
          return range(1, colCount + 1).map((x) => {
            return <RecoilCell key={`${x}-${y}`} value={x * y} xy={[x, y]} />;
          });
        })}
      </RecoilGrid>
    </Container>
  );
}
