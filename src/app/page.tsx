import { Contact } from "@/components/portfolio/contact";
import { ExperienceList } from "@/components/portfolio/experience-timeline";
import { Intro } from "@/components/portfolio/intro";
import { ProjectList } from "@/components/portfolio/project-row";
import { Section } from "@/components/portfolio/section";
import { PROJECTS } from "@/data/projects";

export default function Page() {
  return (
    <div className="space-y-16">
      <Intro />

      <Section title="Selected work" link={{ href: "/projects", label: "All projects" }}>
        <ProjectList projects={PROJECTS.filter((project) => project.featured)} />
      </Section>

      <Section title="Experience" link={{ href: "/about", label: "Full experience" }}>
        <ExperienceList />
      </Section>

      <Contact />
    </div>
  );
}
