"use client";

import { createContext, Suspense, use } from "react";

let d = new Promise((resolve) => setTimeout(resolve, 3000)).then(() => 1);
const c = createContext("test");

export default function AsyncNode() {
  if (typeof window !== "undefined") {
    return null;
  }
  const data = use(c);
  return <div>{data}</div>;
}
