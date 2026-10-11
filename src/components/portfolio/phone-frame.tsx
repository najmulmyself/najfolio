"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  // Real screenshots in /public. When empty, placeholder mock screens are shown.
  screenshots?: string[];
  alt?: string;
  className?: string;
  interval?: number;
};

export function PhoneFrame({ screenshots = [], alt = "App screenshot", className, interval = 3500 }: Props) {
  const screens = screenshots.length > 0 ? screenshots : MOCK_SCREENS;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (screens.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % screens.length), interval);
    return () => clearInterval(id);
  }, [screens.length, interval]);

  const current = screens[index];

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="relative aspect-[9/19] w-56 rounded-[2.6rem] border-[6px] border-neutral-900 bg-neutral-950 p-1.5 shadow-2xl shadow-black/30 dark:border-neutral-700 sm:w-60">
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-neutral-900">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
            >
              {typeof current === "string" ? (
                <Image src={current} alt={alt} fill sizes="240px" className="object-cover" />
              ) : (
                <current.Component />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {screens.length > 1 && (
        <div className="flex gap-1.5" role="tablist" aria-label="Screens">
          {screens.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show screen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-3 text-[10px] font-semibold text-white">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-2 w-3 rounded-sm border border-white/80" />
      </span>
    </div>
  );
}

function SavingsScreen() {
  const bars = [40, 55, 35, 70, 60, 85, 75];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-amber-950 to-neutral-950 text-white">
      <StatusBar />
      <div className="px-4 pt-6">
        <p className="text-[10px] uppercase tracking-wider text-white/50">Total savings</p>
        <p className="mt-1 text-2xl font-semibold">12.48 g</p>
        <p className="text-[10px] text-emerald-400">+2.1% this month</p>
      </div>
      <div className="mx-4 mt-5 flex h-24 items-end gap-1.5 rounded-2xl bg-white/5 p-3">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-amber-400/80" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mx-4 mt-4 rounded-2xl bg-white/5 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium">Auto-Save</span>
          <span className="flex h-4 w-7 items-center justify-end rounded-full bg-emerald-500 px-0.5">
            <span className="h-3 w-3 rounded-full bg-white" />
          </span>
        </div>
        <p className="mt-1 text-[10px] text-white/50">Every Monday · Tk 500</p>
      </div>
      <div className="mx-4 mt-3 space-y-2">
        {["Weekly Auto-Save", "Manual top-up"].map((t) => (
          <div key={t} className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-[10px]">
            <span>{t}</span>
            <span className="text-white/60">+0.21 g</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KitsScreen() {
  const colors = ["#16a34a", "#2563eb", "#dc2626", "#f59e0b", "#7c3aed", "#0ea5e9"];
  return (
    <div className="flex h-full flex-col bg-neutral-950 text-white">
      <StatusBar />
      <div className="flex items-center justify-between px-4 pt-6">
        <p className="text-base font-semibold">Kits</p>
        <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px]">Offline</span>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-white/10 px-3 py-2 text-[10px] text-white/50">Search teams…</div>
      <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
        {colors.map((c, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-2">
            <div className="mx-auto h-14 w-12 rounded-t-xl rounded-b-md" style={{ background: c }} />
            <div className="mx-auto mt-2 h-1.5 w-14 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CoursesScreen() {
  const courses = [
    { name: "Intro to Design", progress: 72, color: "#7c3aed" },
    { name: "Business English", progress: 45, color: "#0ea5e9" },
    { name: "Data Basics", progress: 20, color: "#f59e0b" },
  ];
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-violet-950 to-neutral-950 text-white">
      <StatusBar />
      <div className="px-4 pt-6">
        <p className="text-[10px] text-white/50">Welcome back</p>
        <p className="text-base font-semibold">Continue learning</p>
      </div>
      <div className="mx-4 mt-4 space-y-3">
        {courses.map((c) => (
          <div key={c.name} className="rounded-2xl bg-white/5 p-3">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-lg" style={{ background: c.color }} />
              <span className="text-[11px] font-medium">{c.name}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: `${c.progress}%`, background: c.color }} />
            </div>
            <p className="mt-1 text-[9px] text-white/50">{c.progress}% complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const MOCK_SCREENS = [
  { Component: SavingsScreen },
  { Component: KitsScreen },
  { Component: CoursesScreen },
];
