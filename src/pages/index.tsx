import Link from "next/link";
import React, { useState } from "react";
import { Container } from "reactstrap";

import { DEFALUT_COL_COUNT, DEFAULT_ROW_COUNT } from "../useTestParams";

export default function Index() {
  const [colCount, setColCount] = useState(String(DEFALUT_COL_COUNT));
  const [rowCount, setRowCount] = useState(String(DEFAULT_ROW_COUNT));

  return (
    <Container>
      <h4 className="mb-5">
        recoil-vs-context-grid-test{" "}
        <sup>
          <a href="https://github.com/saltycrane/recoil-vs-context-grid-test">
            <small>github</small>
          </a>
        </sup>
      </h4>
      <p>
        <small className="text-muted">
          <label>
            Column count:{" "}
            <input
              className="border-0 border-left-0 border-top-0 border-right-0"
              onChange={(event) => setColCount(event.target.value)}
              onClick={(event) => event.stopPropagation()}
              style={{ width: "4rem" }}
              type="number"
              value={colCount}
            />
          </label>
          <label className="ml-3">
            Row count:{" "}
            <input
              className="border-0 border-left-0 border-top-0 border-right-0"
              onChange={(event) => setRowCount(event.target.value)}
              style={{ width: "4rem" }}
              type="number"
              value={rowCount}
            />
          </label>
        </small>
        <sup>*</sup>
      </p>
      <p>
        Grid using Context:{" "}
        <span className="position-relative">
          <Link href={`/context?x=${colCount}&y=${rowCount}`}>
            <a>
              /context?colCount={colCount}&amp;rowCount={rowCount}
            </a>
          </Link>
        </span>
      </p>
      <p className="mb-4">
        Grid using Recoil:{" "}
        <Link href={`/recoil?x=${colCount}&y=${rowCount}`}>
          <a>
            /recoil?colCount={colCount}&amp;rowCount={rowCount}
          </a>
        </Link>
      </p>
      <p>
        <small className="font-italic text-muted">
          * using values greater than 1000 won&apos;t be rendered properly due
          to limitations of CSS Grid. This test probably can&apos;t handle more
          than a million cells anyways.
        </small>
      </p>
    </Container>
  );
}
