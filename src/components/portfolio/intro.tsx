import { buttonVariants } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { StatusBadge } from "./status-badge";

export function Intro() {
  return (
    <section>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Image
          src={PROFILE.avatar}
          alt={PROFILE.name}
          width={48}
          height={48}
          className="size-12 rounded-full object-cover object-top"
          priority
        />
        <div className="mr-auto">
          <p className="font-medium leading-tight">{PROFILE.name}</p>
          <p className="text-sm text-muted-foreground">
            {PROFILE.role.title} at {PROFILE.role.company} · {PROFILE.city}
          </p>
        </div>
        <StatusBadge label={PROFILE.status} />
      </div>

      <h1 className="mt-10 text-3xl font-semibold tracking-tighter sm:text-4xl">{PROFILE.headline}</h1>
      <p className="mt-4 text-muted-foreground">{PROFILE.heroSubtitle}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a href="#contact" className={cn(buttonVariants(), "gap-1.5 rounded-full")}>
          Get in touch <ArrowUpRight className="size-4" />
        </a>
        <a
          href={PROFILE.resume}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}
        >
          Résumé
        </a>
      </div>
    </section>
  );
}
