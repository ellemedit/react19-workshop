"use client";

import { useEffect, useState } from "react";

export default function Replay() {
  return <div>
    <button onClick={() => {
        console.log("Replay")
    }}>Replay</button>
    <ClientOnly>
        {Array(30).fill(null).map((_, index) => (
            <ArtificalDelay key={index} />
        ))}
    </ClientOnly>
  </div>;
}

function ClientOnly({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return <>{mounted ? children : null}</>;
}

function ArtificalDelay() {
    const started = performance.now();
    while (performance.now() - started < 50) {
        // 무거운 작업
    }
    return null;
}
