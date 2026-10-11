import { EXPERIENCE } from "@/data/profile";
import { AppIcon } from "./app-icon";
import { RichText } from "./rich-text";

export function ExperienceTimeline() {
  return (
    <ol className="relative">
      {EXPERIENCE.map((job, i) => (
        <li key={`${job.company}-${job.start}`} className="relative flex gap-4 pb-10 last:pb-0">
          {i < EXPERIENCE.length - 1 && (
            <span aria-hidden className="absolute left-6 top-14 -bottom-0 w-px bg-border" />
          )}
          <div className="relative h-fit shrink-0">
            <AppIcon name={job.company} src={job.logo} accent="#171717" size={48} rounded="rounded-xl" />
            {job.current && (
              <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full border-2 border-background bg-emerald-500" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold leading-tight">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.href ? (
                    <a href={job.href} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · {job.type} · {job.location}
                </p>
              </div>
              <p className="mt-1 shrink-0 text-sm tabular-nums text-muted-foreground sm:mt-0">
                {job.start} – {job.end}
              </p>
            </div>

            <p className="mt-3 text-sm">{job.summary}</p>

            <dl className="mt-4 grid grid-cols-3 divide-x rounded-2xl border bg-muted/30 shadow-sm">
              {job.highlights.map((h) => (
                <div key={h.label} className="px-3 py-3">
                  <dd className="text-sm font-semibold sm:text-base">{h.value}</dd>
                  <dt className="mt-0.5 text-[11px] text-muted-foreground">{h.label}</dt>
                </div>
              ))}
            </dl>

            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-muted-foreground marker:text-muted-foreground/50">
              {job.bullets.map((bullet, j) => (
                <li key={j}>
                  <RichText text={bullet} />
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.stack.map((tech) => (
                <span key={tech} className="rounded-md border bg-muted/50 px-2 py-0.5 text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
