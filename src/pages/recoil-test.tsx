import { range } from "lodash";
import React from "react";
import { Container } from "reactstrap";

import { X_COUNT, Y_COUNT } from "../constants";
import { RecoilGrid, RecoilCell } from "../recoil-grid";

const RecoilTest = () => {
  return (
    <Container fluid>
      <h4>Recoil test</h4>
      <RecoilGrid colCount={X_COUNT}>
        {range(1, Y_COUNT + 1).map((y) => {
          return range(1, X_COUNT + 1).map((x) => {
            return (
              <RecoilCell key={`${x}-${y}`} xy={[x, y]}>
                {x * y}
              </RecoilCell>
            );
          });
        })}
      </RecoilGrid>
    </Container>
  );
};

export default RecoilTest;
