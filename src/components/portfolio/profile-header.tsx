import { PROFILE } from "@/data/profile";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import Image from "next/image";
import { LiveClock } from "./live-clock";

export function StatusBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label}
    </span>
  );
}

export function StackChip({ name, icon }: { name: string; icon?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border bg-background px-2.5 py-1 text-xs font-medium shadow-sm">
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" width={14} height={14} className="size-3.5" />
      )}
      {name}
    </span>
  );
}

export function ProfileHeader() {
  return (
    <section className="overflow-hidden rounded-3xl border bg-card">
      <div className="h-24 bg-gradient-to-r from-emerald-500/20 via-emerald-500/10 to-sky-500/20" />
      <div className="-mt-12 flex flex-col items-center px-6 pb-8 text-center">
        <Image
          src={PROFILE.avatar}
          alt={PROFILE.name}
          width={96}
          height={96}
          className="size-24 rounded-full border-4 border-background object-cover object-top shadow-md"
          priority
        />
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">{PROFILE.name}</h2>
        <p className="mt-1 text-muted-foreground">{PROFILE.tagline}</p>
        <div className="mt-3">
          <StatusBadge label={PROFILE.status} />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <BriefcaseBusiness className="size-4" />
            {PROFILE.role.title} at{" "}
            <span className="font-medium text-foreground">{PROFILE.role.company}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4" />
            {PROFILE.city} ·{" "}
            <LiveClock timeZone={PROFILE.timeZone} className="tabular-nums" />
          </span>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {PROFILE.stack.map((item) => (
            <StackChip key={item.name} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
