import { Icons, type IconProps } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { PROFILE } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import { Section } from "./section";

const SOCIAL_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
};

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-2xl font-semibold tracking-tight">Have a role or project in mind?</p>
      <p className="mt-2 text-muted-foreground">
        I&apos;m {PROFILE.status.toLowerCase()}. Email is the quickest way to reach me.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href={`mailto:${PROFILE.email}`} className={cn(buttonVariants(), "gap-2 rounded-full")}>
          <Mail className="size-4" /> {PROFILE.email}
        </a>
        {PROFILE.socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.name];
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.name} ${social.handle}`}
              className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
            >
              {Icon && <Icon className="size-4" />}
            </a>
          );
        })}
      </div>
    </Section>
  );
}
