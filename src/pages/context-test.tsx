import { range } from "lodash";
import React from "react";
import { Container } from "reactstrap";

import { X_COUNT, Y_COUNT } from "../constants";
import { ContextGrid, ContextCell } from "../context-grid";

const GridTestContext = () => {
  return (
    <Container>
      <h4>Context test</h4>
      <ContextGrid colCount={X_COUNT}>
        {range(1, Y_COUNT + 1).map((y) => {
          return range(1, X_COUNT + 1).map((x) => {
            return (
              <ContextCell key={`${x}-${y}`} xy={[x, y]}>
                {x * y}
              </ContextCell>
            );
          });
        })}
      </ContextGrid>
    </Container>
  );
};

export default GridTestContext;
