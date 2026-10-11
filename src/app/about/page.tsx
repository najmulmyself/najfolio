import { Availability } from "@/components/portfolio/availability";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { Section } from "@/components/portfolio/section";
import { DATA } from "@/data";
import type { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "About",
  description: "A summary of my work experience and my education.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tighter">About</h1>
        <Markdown className="prose prose-neutral mt-4 max-w-none text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
        <div className="mt-6">
          <Availability />
        </div>
      </header>

      <Section title="Experience">
        <ExperienceTimeline />
      </Section>

      <Section title="Education">
        {DATA.education.map((education) => (
          <div key={education.id} className="flex items-center gap-4">
            {education.logoUrl && (
              <Image
                src={education.logoUrl}
                alt={education.school}
                height={44}
                width={44}
                className="size-11 rounded-xl border bg-white object-contain"
              />
            )}
            <div className="min-w-0 flex-1">
              <a
                href={education.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline-offset-4 hover:underline"
              >
                {education.school}
              </a>
              <p className="text-sm text-muted-foreground">{education.degree}</p>
            </div>
            <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {education.start} – {education.end}
            </p>
          </div>
        ))}
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-2">
          {DATA.Skills.map((skill) => (
            <a
              key={skill.id}
              href={skill.site}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors hover:bg-muted"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="" src={skill.href} width={14} height={14} className="size-3.5" />
              {skill.title}
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
