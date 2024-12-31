import { Suspense } from "react";
import { setTimeout } from "timers/promises";

export default function Streaming() {
  const data1 = setTimeout(3000).then(() => "data1");
  const data2 = setTimeout(5000).then(() => "data2");
  const data3 = setTimeout(7000).then(() => "data3");
  return (
    <div>
      Streaming
      <ul>
        <li>
          <Loader>{data1}</Loader>
        </li>
        <li>
          <Loader>{data2}</Loader>
        </li>
        <li>
          <Loader>{data3}</Loader>
        </li>
      </ul>
    </div>
  );
}

function Loader({ children }: { children: Promise<string> }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
