import { AppIcon } from "@/components/portfolio/app-icon";
import { Contact } from "@/components/portfolio/contact";
import { PhoneFrame } from "@/components/portfolio/phone-frame";
import { PlatformChips } from "@/components/portfolio/project-card";
import { RichText } from "@/components/portfolio/rich-text";
import { DATA } from "@/data";
import { PROJECTS, getProject } from "@/data/projects";
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 text-muted-foreground">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-muted-foreground/50">
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
    <article className="space-y-16">
      <Link href="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> All projects
      </Link>

      <header className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-4">
            <AppIcon name={project.title} src={project.icon} accent={project.accent} size={64} />
            <div>
              <p className="text-sm text-muted-foreground">
                {project.context}
                {project.period && ` · ${project.period}`}
              </p>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl">{project.title}</h1>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <PlatformChips platforms={project.platforms} />
          </div>

          <dl className="mt-6 grid max-w-lg grid-cols-3 gap-2">
            {project.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border bg-muted/40 px-3 py-4 text-center">
                <dd className="text-xl font-semibold" style={{ color: project.accent }}>
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs text-muted-foreground">{stat.label}</dt>
              </div>
            ))}
          </dl>

          {project.storeUrl && (
            <a
              href={project.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
              style={{ background: project.accent }}
            >
              Open on {project.storeLabel} <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
        <PhoneFrame screenshots={caseStudy.screenshots} alt={`${project.title} screenshot`} />
      </header>

      <div className="mx-auto max-w-2xl space-y-10">
        <Block title="Overview">
          <p>{caseStudy.overview}</p>
        </Block>
        <Block title="The problem">
          <p>{caseStudy.problem}</p>
        </Block>
        <Block title="My role">
          <p>{caseStudy.role}</p>
        </Block>
        <Block title="Stack & architecture">
          <div className="mb-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span key={tech} className="rounded-md border bg-muted/50 px-2 py-0.5 text-xs text-foreground">
                {tech}
              </span>
            ))}
          </div>
          <BulletList items={caseStudy.architecture} />
        </Block>
        <Block title="What I built">
          <BulletList items={caseStudy.highlights} />
        </Block>
        <Block title="Results">
          <BulletList items={caseStudy.results} />
        </Block>
      </div>

      <Link
        href={`/projects/${next.slug}`}
        className="group mx-auto flex max-w-2xl items-center justify-between rounded-3xl border p-5 transition-colors hover:bg-muted/50"
      >
        <div className="flex items-center gap-3">
          <AppIcon name={next.title} src={next.icon} accent={next.accent} size={40} rounded="rounded-xl" />
          <div>
            <p className="text-xs text-muted-foreground">Next case study</p>
            <p className="font-medium">{next.title}</p>
          </div>
        </div>
        <ArrowUpRight className="size-5 transition-transform group-hover:-rotate-12" />
      </Link>

      <Contact />
    </article>
  );
}
