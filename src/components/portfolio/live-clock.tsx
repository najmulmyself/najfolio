"use client";

import { useEffect, useState } from "react";

function format(timeZone: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-US", { timeZone, ...options }).format(new Date());
}

function partOfDay(timeZone: string) {
  const hour = Number(format(timeZone, { hour: "numeric", hourCycle: "h23" }));
  if (hour < 5) return "Night";
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  if (hour < 21) return "Evening";
  return "Night";
}

// Renders nothing on the server, then the current time in `timeZone`, so the
// server and client markup never disagree.
export function useZonedTime(timeZone: string) {
  const [now, setNow] = useState<{ time: string; period: string } | null>(null);

  useEffect(() => {
    const tick = () =>
      setNow({
        time: format(timeZone, { hour: "numeric", minute: "2-digit" }),
        period: partOfDay(timeZone),
      });
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return now;
}

export function LiveClock({ timeZone, className }: { timeZone: string; className?: string }) {
  const now = useZonedTime(timeZone);
  return (
    <time className={className} suppressHydrationWarning>
      {now?.time ?? "--:--"}
    </time>
  );
}

export function PartOfDay({ timeZone, city }: { timeZone: string; city: string }) {
  const now = useZonedTime(timeZone);
  return <span>{now ? `${now.period} in ${city}` : `Local time in ${city}`}</span>;
}
