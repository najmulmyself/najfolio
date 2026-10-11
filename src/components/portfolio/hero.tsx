import { buttonVariants } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileDown } from "lucide-react";
import { PhoneFrame } from "./phone-frame";

export function Hero() {
  return (
    <section className="grid items-center gap-12 md:grid-cols-[1fr_auto] md:gap-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {PROFILE.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
          {PROFILE.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
          {PROFILE.heroSubtitle}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className={cn(buttonVariants({ size: "lg" }), "gap-2 rounded-full")}
          >
            Hire me <ArrowUpRight className="size-4" />
          </a>
          <a
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }), "gap-2 rounded-full")}
          >
            <FileDown className="size-4" /> Download résumé
          </a>
        </div>
      </div>
      <PhoneFrame alt="Screens from apps I've built" />
    </section>
  );
}
