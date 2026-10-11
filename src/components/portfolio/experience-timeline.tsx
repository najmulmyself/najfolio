import { EXPERIENCE } from "@/data/profile";
import { AppIcon } from "./app-icon";
import { RichText } from "./rich-text";

// One line per role, for the home page.
export function ExperienceList() {
  return (
    <ul className="space-y-1">
      {EXPERIENCE.map((job) => (
        <li key={`${job.company}-${job.start}`} className="-mx-3 flex items-center gap-4 rounded-2xl p-3">
          <AppIcon name={job.company} src={job.logo} accent="#52525b" size={44} rounded="rounded-xl" />
          <div className="min-w-0 flex-1">
            <p className="font-medium leading-tight">{job.company}</p>
            <p className="mt-0.5 text-sm text-muted-foreground">{job.title}</p>
          </div>
          <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
            {job.start.split(" ").pop()} – {job.current ? "Now" : job.end.split(" ").pop()}
          </p>
        </li>
      ))}
    </ul>
  );
}

// Full detail for the About page.
export function ExperienceTimeline() {
  return (
    <ol className="space-y-10">
      {EXPERIENCE.map((job) => (
        <li key={`${job.company}-${job.start}`} className="flex gap-4">
          <AppIcon name={job.company} src={job.logo} accent="#52525b" size={44} rounded="rounded-xl" />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-medium leading-tight">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · {job.location}
                </p>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                {job.start} – {job.end}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground marker:text-muted-foreground/50">
              {job.bullets.map((bullet, i) => (
                <li key={i}>
                  <RichText text={bullet} />
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">{job.stack.join(" · ")}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
