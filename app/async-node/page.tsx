"use client";

import { Suspense } from "react";

export default function AsyncNode() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {new Promise((resolve) => setTimeout(resolve, 3000)).then(() => (
          <div>Hello World</div>
        ))}
      </Suspense>
    </div>
  );
}
