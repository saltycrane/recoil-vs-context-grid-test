import { range } from "lodash";
import React from "react";
import { Container } from "reactstrap";

import { X_COUNT, Y_COUNT } from "../constants";
import { ContextGrid, ContextCell } from "../context-grid";

export default function GridTestContext() {
  return (
    <Container fluid>
      <h4>Context test</h4>
      <ContextGrid colCount={X_COUNT}>
        {range(1, Y_COUNT + 1).map((y) => {
          return range(1, X_COUNT + 1).map((x) => {
            return <ContextCell key={`${x}-${y}`} value={x * y} xy={[x, y]} />;
          });
        })}
      </ContextGrid>
    </Container>
  );
}
