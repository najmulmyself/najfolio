import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AppIcon } from "./app-icon";

export function PlatformChips({ platforms }: { platforms: Project["platforms"] }) {
  return (
    <>
      {platforms.map((platform) => (
        <span
          key={platform}
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            platform === "iOS"
              ? "bg-violet-500/10 text-violet-700 dark:text-violet-300"
              : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          )}
        >
          {platform}
        </span>
      ))}
    </>
  );
}

// One-line project entry that links to its case study.
export function ProjectRow({ project }: { project: Project }) {
  const [stat] = project.stats;
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group -mx-3 flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-muted/60"
    >
      <AppIcon name={project.title} src={project.icon} accent={project.accent} size={44} rounded="rounded-xl" />
      <div className="min-w-0 flex-1">
        <p className="font-medium leading-tight">{project.title}</p>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">{project.tagline}</p>
      </div>
      <div className="hidden shrink-0 text-right sm:block">
        <p className="text-sm font-medium tabular-nums">{stat.value}</p>
        <p className="text-xs text-muted-foreground">{stat.label}</p>
      </div>
      <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-rotate-12 group-hover:text-foreground" />
    </Link>
  );
}

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-1">
      {projects.map((project) => (
        <ProjectRow key={project.slug} project={project} />
      ))}
    </div>
  );
}
