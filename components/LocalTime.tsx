"use client";

import { useEffect, useState } from "react";

/** Ticking IST clock for the footer. */
export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-xs text-muted">
      {time ? `Kerala, IN — ${time} IST` : "Kerala, IN"}
    </span>
  );
}
