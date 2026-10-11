import { FAQ, PROCESS } from "@/data/profile";
import { Plus } from "lucide-react";

export function Process() {
  return (
    <ol className="grid gap-4 sm:grid-cols-3">
      {PROCESS.map((item) => (
        <li key={item.step} className="rounded-3xl border bg-muted/30 p-6">
          <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">Step {item.step}</span>
          <h3 className="mt-2 font-semibold">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq() {
  return (
    <div className="space-y-2">
      {FAQ.map((item) => (
        <details key={item.question} className="group rounded-2xl bg-muted/60 px-5 py-4 open:bg-muted">
          <summary className="flex cursor-pointer list-none items-center gap-3 text-sm font-medium [&::-webkit-details-marker]:hidden">
            <Plus className="size-4 shrink-0 text-rose-500 transition-transform group-open:rotate-45" />
            {item.question}
          </summary>
          <p className="mt-3 pl-7 text-sm text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
