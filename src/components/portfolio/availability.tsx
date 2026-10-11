import { PROFILE } from "@/data/profile";
import { Check, Globe2, MapPin } from "lucide-react";
import { LiveClock, PartOfDay } from "./live-clock";

export function Availability() {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" /> Based in
        </p>
        <p className="mt-1 text-lg font-semibold">{PROFILE.location}</p>
        <div className="mt-6 flex items-end justify-between gap-2">
          <LiveClock
            timeZone={PROFILE.timeZone}
            className="text-4xl font-semibold tabular-nums tracking-tight"
          />
          <span className="pb-1 text-sm text-muted-foreground">{PROFILE.timeZoneLabel}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          <PartOfDay timeZone={PROFILE.timeZone} city={PROFILE.city} />
        </p>
      </div>
      <div className="rounded-3xl border p-6">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Globe2 className="size-4" /> Works
        </p>
        <p className="mt-1 text-lg font-semibold">{PROFILE.availability.title}</p>
        <p className="mt-2 text-sm text-muted-foreground">{PROFILE.availability.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {PROFILE.availability.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs"
            >
              <Check className="size-3 text-emerald-600" /> {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
