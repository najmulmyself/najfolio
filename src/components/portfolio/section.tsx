import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  description,
  className,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <h2 className="text-2xl font-semibold tracking-tighter sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
