import { Availability } from "@/components/portfolio/availability";
import { Contact } from "@/components/portfolio/contact";
import { ExperienceTimeline } from "@/components/portfolio/experience-timeline";
import { Hero } from "@/components/portfolio/hero";
import { Faq, Process } from "@/components/portfolio/process-faq";
import { ProfileHeader } from "@/components/portfolio/profile-header";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Section } from "@/components/portfolio/section";
import TweetList from "@/components/tweetlist";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data";
import { PROJECTS } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";

export default function Page() {
  const featured = PROJECTS.filter((project) => project.featured);

  return (
    <div className="space-y-24">
      <Hero />

      <div className="mx-auto max-w-3xl space-y-4">
        <ProfileHeader />
        <Availability />
      </div>

      <Section
        id="work"
        title="Selected mobile products"
        description="Apps I've built and shipped across iOS and Android."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href="/projects"
            className={cn(buttonVariants({ variant: "outline" }), "gap-2 rounded-full")}
          >
            All projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section id="experience" title="Experience" className="mx-auto max-w-3xl">
        <ExperienceTimeline />
      </Section>

      <Section
        id="process"
        title="Idea to launch, without the drama"
        description="Three focused phases, from the first call to the App Store."
      >
        <Process />
      </Section>

      <Section id="faq" title="Still got questions?" className="mx-auto max-w-2xl">
        <Faq />
      </Section>

      {DATA.tweets.length > 0 && (
        <section className="mx-auto max-w-2xl">
          <Markdown className="prose max-w-full text-muted-foreground prose-neutral dark:prose-invert">
            {DATA.appreciation}
          </Markdown>
          <TweetList />
        </section>
      )}

      <Contact />
    </div>
  );
}
