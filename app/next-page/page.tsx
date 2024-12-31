import { Suspense } from "react";
import { setTimeout } from "timers/promises";

export default function NextPage() {
  const criticalData = setTimeout(2000).then(() => "some critical data");
  const nonCriticalData = setTimeout(5000).then(() => "some non critical data");
  return (
    <div>
      <div>Critical Data: {criticalData}</div>
      <Suspense fallback={<div>Non Critical Data Loading...</div>}>
        <div>{nonCriticalData}</div>
      </Suspense>
    </div>
  );
}
