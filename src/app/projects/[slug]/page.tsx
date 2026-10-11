import { AppIcon } from "@/components/portfolio/app-icon";
import { PhoneFrame } from "@/components/portfolio/phone-frame";
import { PlatformChips, ProjectRow } from "@/components/portfolio/project-row";
import { RichText } from "@/components/portfolio/rich-text";
import { Section } from "@/components/portfolio/section";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data";
import { PROJECTS, getProject } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} case study`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} case study`,
      description: project.tagline,
      url: `${DATA.url}/projects/${project.slug}`,
    },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-4 text-muted-foreground marker:text-muted-foreground/50">
      {items.map((item, i) => (
        <li key={i}>
          <RichText text={item} />
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyPage({ params }: Params) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <article className="space-y-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Projects
      </Link>

      <header>
        <div className="flex items-center gap-4">
          <AppIcon name={project.title} src={project.icon} accent={project.accent} size={56} />
          <div>
            <h1 className="text-3xl font-semibold tracking-tighter">{project.title}</h1>
            <p className="text-sm text-muted-foreground">
              {project.context}
              {project.period && ` · ${project.period}`}
            </p>
          </div>
        </div>
        <p className="mt-5 text-lg text-muted-foreground">{project.tagline}</p>
        {project.platforms.length > 0 && (
          <div className="mt-3 flex gap-1.5">
            <PlatformChips platforms={project.platforms} />
          </div>
        )}

        <dl className="mt-8 grid grid-cols-3 border-y py-4">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-lg font-semibold tabular-nums">{stat.value}</dd>
              <dt className="text-xs text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>

        {project.storeUrl && (
          <a
            href={project.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "mt-6 gap-1.5 rounded-full")}
          >
            Open on {project.storeLabel} <ArrowUpRight className="size-4" />
          </a>
        )}
      </header>

      <Section title="Overview">
        <p className="text-muted-foreground">{caseStudy.overview}</p>
      </Section>

      <Section title="The problem">
        <p className="text-muted-foreground">{caseStudy.problem}</p>
      </Section>

      <Section title="My role">
        <p className="text-muted-foreground">{caseStudy.role}</p>
      </Section>

      {caseStudy.screenshots.length > 0 && (
        <Section title="Screens">
          <PhoneFrame screenshots={caseStudy.screenshots} alt={`${project.title} screenshot`} />
        </Section>
      )}

      <Section title="Stack & architecture">
        <p className="mb-3 text-sm">{project.stack.join(" · ")}</p>
        <BulletList items={caseStudy.architecture} />
      </Section>

      <Section title="What I built">
        <BulletList items={caseStudy.highlights} />
      </Section>

      <Section title="Results">
        <BulletList items={caseStudy.results} />
      </Section>

      <Section title="Next case study">
        <ProjectRow project={next} />
      </Section>
    </article>
  );
}
