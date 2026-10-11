export type Platform = "iOS" | "Android";

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  // Optional app icon in /public. Without one, a colored tile with initials is shown.
  icon?: string;
  // Tailwind-compatible hex color used for the icon tile, stats and buttons.
  accent: string;
  platforms: Platform[];
  tags: string[];
  stack: string[];
  context: string;
  period: string;
  // Store or website link. Leave empty when the app isn't public.
  storeUrl?: string;
  storeLabel?: string;
  featured: boolean;
  stats: [Stat, Stat, Stat];
  caseStudy: {
    overview: string;
    problem: string;
    role: string;
    architecture: string[];
    highlights: string[];
    results: string[];
    // Screenshot paths in /public. Placeholder phone screens are shown when empty.
    screenshots: string[];
  };
};

// Content is drawn from the resume. Review the case-study wording before publishing.
export const PROJECTS: Project[] = [
  {
    slug: "gold-kinen",
    title: "Gold Kinen",
    tagline: "Save in gold, automatically, with recurring bKash payments.",
    accent: "#d4a017",
    platforms: ["iOS", "Android"],
    tags: ["Fintech", "Savings"],
    stack: ["Flutter", "BLoC", "Clean Architecture", "TDD", "get_it", "Firebase"],
    context: "Gold Kinen",
    period: "Jan 2024 – Present",
    storeUrl: "https://play.google.com/store/apps/details?id=com.goldkinen.android",
    storeLabel: "Google Play",
    featured: true,
    stats: [
      { value: "80%+", label: "Test coverage" },
      { value: "BLoC", label: "Architecture" },
      { value: "bKash", label: "Auto-Save" },
    ],
    caseStudy: {
      overview:
        "Gold Kinen is a production fintech app on the Play Store and App Store. I joined to own the mobile codebase and moved it onto an architecture that the team can keep shipping on.",
      problem:
        "Features had grown on top of each other, which made the core app hard to test and risky to change. The product also needed a way to let users save automatically on a schedule, and a safer way to roll features out.",
      role:
        "Software Engineer owning the Flutter app: architecture, feature work, testing and the full release lifecycle.",
      architecture: [
        "Refactored the core app to **BLoC** with **Clean Architecture** (presentation, domain and data layers) and dependency injection via **get_it**.",
        "Introduced **Firebase Remote Config** for feature flags and controlled rollouts.",
        "Integrated the **bKash API** to power Auto-Save, an automated recurring transaction flow.",
      ],
      highlights: [
        "Built Auto-Save test-first with **TDD**, reaching **80%+ test coverage**.",
        "Set up internal QA builds through **Firebase App Distribution**.",
        "Shipped live releases to the **Play Store and App Store**, monitored with **Crashlytics**.",
      ],
      results: [
        "A modular codebase where features can be tested and changed in isolation.",
        "Recurring savings without users having to remember to pay.",
        "Safer releases thanks to feature flags and crash monitoring.",
      ],
      screenshots: [],
    },
  },
  {
    slug: "dream-kit-25",
    title: "Dream Kit 25",
    tagline: "A DLS kit app I built, shipped and grew on my own.",
    accent: "#16a34a",
    platforms: ["Android"],
    tags: ["Personal", "Gaming"],
    stack: ["Flutter", "Provider", "SQFLite", "AdMob", "Unity Ads", "Firebase"],
    context: "Personal project",
    period: "Solo",
    storeUrl: "https://play.google.com/store/apps/details?id=com.sakib.dreamkit",
    storeLabel: "Google Play",
    featured: true,
    stats: [
      { value: "100k+", label: "Downloads" },
      { value: "$120+", label: "Monthly revenue" },
      { value: "Solo", label: "Built & shipped" },
    ],
    caseStudy: {
      overview:
        "Dream Kit 25 is a kit app for Dream League Soccer players. I designed, built, monetized and published it myself.",
      problem:
        "Players wanted a quick way to browse and use kits, even on slow or offline connections, and the app had to pay for itself.",
      role: "Solo developer: product, Flutter app, monetization and Play Store publishing.",
      architecture: [
        "Flutter app with **Provider** for state management.",
        "**Offline caching** with **SQFLite** so content loads instantly and works without a connection.",
        "Ad monetization with **AdMob** and **Unity Ads**, plus **push notifications** for new content.",
      ],
      highlights: [
        "Handled every step from idea to **Play Store** release on my own.",
        "Balanced ads against user experience to keep ratings and retention healthy.",
      ],
      results: [
        "**100k+ downloads** on Google Play.",
        "**$120+ per month** in ad revenue.",
      ],
      screenshots: [],
    },
  },
  {
    slug: "nbr-efdms",
    title: "NBR - EFDMS",
    tagline: "A government VAT management system connected to fiscal devices.",
    accent: "#2563eb",
    // Platform isn't listed on the resume; add it here.
    platforms: [],
    tags: ["Government", "VAT"],
    stack: ["Flutter", "Provider", "MVC", "TDD", "SQFLite", "Fernet"],
    context: "Arbree Solutions",
    period: "Apr 2022 – Dec 2023",
    featured: true,
    stats: [
      { value: "Offline", label: "First sync" },
      { value: "Fernet", label: "Encryption" },
      { value: "Multi-role", label: "Auth" },
    ],
    caseStudy: {
      overview:
        "EFDMS is a VAT management system built for Bangladesh's National Board of Revenue. It connects businesses' Electronic Fiscal Devices (EFDs) so sales are recorded and reported accurately.",
      problem:
        "Businesses need to report VAT accurately and on time, often from locations with unreliable internet, while every transaction stays secure and auditable.",
      role: "Software Engineer at Arbree Solutions, building the mobile app.",
      architecture: [
        "**Provider** with an **MVC** structure, developed with **TDD**.",
        "**Offline-first** storage with **SQFLite** and automatic reconciliation with the server once back online.",
        "Secure API communication using **Fernet encryption**.",
        "**Multi-role authentication** for the different users of the system.",
      ],
      highlights: [
        "Integrated **Electronic Fiscal Devices** with the app.",
        "Automated **VAT calculation** and **PDF generation**.",
        "**Push notifications** for compliance alerts and deadline reminders.",
      ],
      results: [
        "Businesses can keep recording sales without a connection and sync later.",
        "Less manual work and fewer errors in tax reporting.",
      ],
      screenshots: [],
    },
  },
  {
    slug: "skill-finesse",
    title: "Skill Finesse",
    tagline: "A cross-platform learning management app.",
    accent: "#7c3aed",
    platforms: ["iOS", "Android"],
    tags: ["Education", "LMS"],
    stack: ["Flutter", "Provider", "SQFLite", "Push Notifications"],
    context: "Notable project",
    period: "",
    storeUrl: "https://apps.apple.com/us/app/skill-finesse/id6477940594",
    storeLabel: "App Store",
    featured: false,
    stats: [
      { value: "2", label: "Stores" },
      { value: "Modular", label: "Architecture" },
      { value: "Push", label: "Notifications" },
    ],
    caseStudy: {
      overview: "Skill Finesse is a learning management app for iOS and Android.",
      problem:
        "Learners needed one app to follow courses on either platform and stay on track with reminders.",
      role: "Built and released the app on both stores.",
      architecture: [
        "Flutter with **Provider** and a **modular architecture**.",
        "Local storage with **SQFLite**.",
        "**Push notifications** to keep learners engaged.",
      ],
      highlights: ["Full release handling for both the **App Store** and **Play Store**."],
      results: ["Live on the App Store and Play Store."],
      screenshots: [],
    },
  },
  {
    slug: "stayverz",
    title: "Stayverz",
    tagline: "Hotel booking with real-time availability and secure payments.",
    accent: "#e11d48",
    platforms: ["Android"],
    tags: ["Travel", "Booking"],
    stack: ["Flutter", "Provider", "Payment Gateway", "WebView", "Push Notifications"],
    context: "Arbree Solutions",
    period: "Apr 2022 – Dec 2023",
    storeUrl: "https://play.google.com/store/apps/details?id=com.stayverz.stayverz",
    storeLabel: "Google Play",
    featured: false,
    stats: [
      { value: "Real-time", label: "Booking" },
      { value: "Secure", label: "Payments" },
      { value: "Push", label: "Offers" },
    ],
    caseStudy: {
      overview: "Stayverz is a hotel booking platform. I worked on its Flutter app at Arbree Solutions.",
      problem:
        "Guests needed to find, book and pay for stays in one smooth flow and hear about booking changes right away.",
      role: "Software Engineer working on booking flows, payments, notifications and release.",
      architecture: [
        "**Provider** for state management.",
        "Real-time booking flows with **WebView** where needed.",
        "Secure **payment gateway** integration.",
      ],
      highlights: [
        "**Push notifications** for booking updates and offers.",
        "Helped prepare the **Play Store** release for compliance and UX readiness.",
      ],
      results: ["Live on Google Play."],
      screenshots: [],
    },
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
