import { ProjectList } from "@/components/portfolio/project-row";
import { Section } from "@/components/portfolio/section";
import { DATA } from "@/data";
import { PROJECTS } from "@/data/projects";
import { ArrowUpRight, Star } from "lucide-react";
import type { Metadata } from "next";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Projects",
  description: "Mobile apps I've built and shipped, with case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tighter">Projects</h1>
        <p className="mt-3 text-muted-foreground">
          Apps I&apos;ve built and shipped. Each one links to a short case study: the problem, how I built
          it and what came out of it.
        </p>
      </header>

      <Section title="Apps">
        <ProjectList projects={PROJECTS} />
      </Section>

      <Section title="Open source">
        <ul className="space-y-1">
          {DATA.contributions.map((repo) => (
            <li key={repo.title}>
              <a
                href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group -mx-3 flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-muted/60"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium leading-tight">{repo.title}</p>
                  <p className="mt-0.5 truncate text-sm text-muted-foreground">{repo.description}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm tabular-nums text-muted-foreground">
                  <Star className="size-3.5" /> {repo.stars}
                </span>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-rotate-12 group-hover:text-foreground" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Hackathons">
        <ul className="space-y-6">
          {DATA.hackathons.map((hackathon) => (
            <li key={hackathon.id}>
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-medium">{hackathon.title}</p>
                <p className="shrink-0 text-sm text-muted-foreground">{hackathon.dates}</p>
              </div>
              <p className="text-sm text-muted-foreground">{hackathon.location}</p>
              <Markdown className="prose prose-sm prose-neutral mt-2 max-w-none dark:prose-invert">
                {hackathon.description}
              </Markdown>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
