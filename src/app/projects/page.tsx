import { HoverEffect } from "@/components/contributions-card";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import { DATA } from "@/data";
import { PROJECTS } from "@/data/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Projects",
  description: "Mobile apps I've built and shipped, with case studies.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-24">
      <Section
        title="Projects"
        description="Apps I've built and shipped across iOS and Android. Open a case study to see the problem, the architecture and the results."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Open source" className="mx-auto max-w-3xl">
        <Markdown className="prose prose-neutral dark:prose-invert">{DATA.contributionssummary}</Markdown>
        <HoverEffect items={DATA.contributions} />
      </Section>

      <Section title="Hackathons" className="mx-auto max-w-3xl">
        <Markdown className="prose prose-neutral dark:prose-invert">{DATA.hackathonsummary}</Markdown>
        <div className="mt-8 space-y-6">
          {DATA.hackathons.map((hackathon) => (
            <div key={hackathon.id} className="flex items-start gap-4">
              {hackathon.logo && (
                <Image
                  src={hackathon.logo}
                  alt={hackathon.title}
                  height={64}
                  width={64}
                  className="rounded-full border object-contain"
                />
              )}
              <div>
                <h3 className="font-semibold">{hackathon.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {hackathon.dates}, {hackathon.location}
                </p>
                {hackathon.images && (
                  <Image
                    src={hackathon.images}
                    alt={hackathon.title}
                    height={200}
                    width={600}
                    className="mt-3 rounded-xl border"
                  />
                )}
                <Markdown className="prose prose-neutral mt-2 text-sm dark:prose-invert">
                  {hackathon.description}
                </Markdown>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
