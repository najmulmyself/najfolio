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

export function ProjectCard({ project }: { project: Project }) {
  const caseStudyHref = `/projects/${project.slug}`;
  return (
    <article className="group flex h-full flex-col rounded-3xl border bg-card p-5 transition-shadow hover:shadow-lg">
      <div className="flex items-start gap-4">
        <AppIcon name={project.title} src={project.icon} accent={project.accent} size={52} />
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight">
            <Link href={caseStudyHref} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-muted-foreground">{project.stack.slice(0, 3).join(" • ")}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        <PlatformChips platforms={project.platforms} />
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {project.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border bg-muted/40 px-2 py-3 text-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="whitespace-nowrap text-sm font-semibold leading-tight xl:text-base" style={{ color: project.accent }}>
              {stat.value}
            </dd>
            <dd className="mt-1 text-[10px] text-muted-foreground">{stat.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-auto flex gap-2 pt-5">
        <Link
          href={caseStudyHref}
          className="flex-1 rounded-full px-4 py-2 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: project.accent }}
        >
          View case study
        </Link>
        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} on ${project.storeLabel ?? "the store"}`}
            className="inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Open <ArrowUpRight className="size-3.5" />
          </a>
        )}
      </div>
    </article>
  );
}
