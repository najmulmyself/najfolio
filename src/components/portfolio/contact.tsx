import { Icons, type IconProps } from "@/components/icons";
import { PROFILE } from "@/data/profile";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { StatusBadge } from "./profile-header";

const SOCIAL_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
};

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 overflow-hidden rounded-3xl border bg-gradient-to-b from-muted/60 to-background p-8 text-center sm:p-12">
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border bg-background py-1 pl-1 pr-3 text-sm font-medium shadow-sm">
        <Image
          src={PROFILE.avatar}
          alt=""
          width={28}
          height={28}
          className="size-7 rounded-full object-cover object-top"
        />
        {PROFILE.name.split(" ")[0]}
      </div>
      <h2 className="mt-5 text-3xl font-semibold tracking-tighter sm:text-4xl">
        Have a project in mind?
        <br />
        <span className="text-muted-foreground">Let&apos;s build it together.</span>
      </h2>
      <div className="mt-4 flex justify-center">
        <StatusBadge label={PROFILE.status} />
      </div>

      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-10 py-5 text-xl font-semibold text-background shadow-xl shadow-emerald-500/20 ring-4 ring-emerald-500/30 transition-transform hover:scale-[1.03] sm:text-2xl"
      >
        Get in touch <ArrowUpRight className="size-6" />
      </a>

      <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-between gap-4 rounded-2xl border bg-background p-4 sm:flex-row">
        <a
          href={`mailto:${PROFILE.email}`}
          className="flex min-w-0 items-center gap-2 text-sm font-medium hover:underline sm:text-base"
        >
          <Mail className="size-4 shrink-0" />
          <span className="truncate">{PROFILE.email}</span>
        </a>
        <div className="flex gap-2">
          {PROFILE.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.name];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${social.name} ${social.handle}`}
                className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background transition-opacity hover:opacity-80"
              >
                {Icon ? <Icon className="size-4" /> : <ArrowUpRight className="size-4" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
