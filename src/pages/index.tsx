import Link from "next/link";
import React from "react";

export default function Index() {
  return (
    <ul>
      <li>
        <Link href="/context-test">
          <a>Grid test with React Context</a>
        </Link>
      </li>
      <li>
        <Link href="/recoil-test">
          <a>Grid test with Recoil</a>
        </Link>
      </li>
    </ul>
  );
}
