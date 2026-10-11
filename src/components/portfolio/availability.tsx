import { PROFILE } from "@/data/profile";
import { LiveClock } from "./live-clock";

// Compact "at a glance" facts: location with live local time, and how I work.
export function Availability() {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
      <div className="bg-background p-4">
        <dt className="text-xs text-muted-foreground">Based in</dt>
        <dd className="mt-1 font-medium">{PROFILE.location}</dd>
        <dd className="text-sm text-muted-foreground">
          <LiveClock timeZone={PROFILE.timeZone} className="tabular-nums" /> local time ·{" "}
          {PROFILE.timeZoneLabel}
        </dd>
      </div>
      <div className="bg-background p-4">
        <dt className="text-xs text-muted-foreground">Works</dt>
        <dd className="mt-1 font-medium">{PROFILE.availability.title}</dd>
        <dd className="text-sm text-muted-foreground">{PROFILE.availability.tags.join(" · ")}</dd>
      </div>
    </dl>
  );
}
