import Image from "next/image";
import { DATA } from "@/data";
import { Icons } from "@/components/icons";

/**
 * Home-page closing CTA card.
 * Dark rounded panel, two columns: copy + buttons on the left, photo on the right.
 * Contact details live in DATA.contact.cta so they stay configurable.
 */
export default function CTA() {
  const cta = DATA.contact.cta;
  const linkedin = DATA.contact.social.LinkedIn;

  return (
    <section className="my-12">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 shadow-[0_10px_30px_rgba(0,0,0,0.2)] dark:bg-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left: copy + actions */}
          <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 md:col-span-3">
            {/* Status */}
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <span className="relative flex h-2 w-2">
                {cta.available && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    cta.available ? "bg-green-500" : "bg-neutral-500"
                  }`}
                />
              </span>
              {cta.status}
            </div>

            {/* Heading */}
            <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {cta.heading}
            </h2>

            {/* Subtext */}
            <p className="max-w-md text-base leading-relaxed text-neutral-400">
              {cta.subtext}
            </p>

            {/* Buttons */}
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={cta.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-neutral-100 hover:shadow-md"
              >
                {/* Calendar icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="#4285F4"
                    strokeWidth="2"
                  />
                  <path
                    d="M3 9h18M8 2v4M16 2v4"
                    stroke="#34A853"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect x="7" y="12" width="3" height="3" fill="#FBBC05" />
                  <rect x="14" y="12" width="3" height="3" fill="#EA4335" />
                </svg>
                {cta.calendarLabel}
              </a>

              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0077B5] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#006699] hover:shadow-md"
              >
                <Icons.linkedin className="h-[18px] w-[18px]" />
                {linkedin.name}
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative min-h-[220px] md:col-span-2 md:min-h-full">
            <Image
              src={cta.image}
              alt={DATA.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
            {/* gradient blend so the photo fades into the dark card on the left edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/30 to-transparent md:from-neutral-900/90" />
          </div>
        </div>
      </div>
    </section>
  );
}
