import { range } from "lodash";
import React from "react";
import { Container } from "reactstrap";

import { ContextGrid, ContextCell } from "../context-grid";
import useTestParams from "../useTestParams";

export default function GridTestContext() {
  const { colCount, rowCount } = useTestParams();
  return (
    <Container fluid>
      <h4>Context test</h4>
      <ContextGrid colCount={colCount}>
        {range(1, rowCount + 1).map((y) => {
          return range(1, colCount + 1).map((x) => {
            return <ContextCell key={`${x}-${y}`} value={x * y} xy={[x, y]} />;
          });
        })}
      </ContextGrid>
    </Container>
  );
}
