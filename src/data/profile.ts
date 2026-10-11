export type Experience = {
  company: string;
  href?: string;
  // Optional logo in /public. Without one, a tile with the company initials is shown.
  logo?: string;
  title: string;
  type: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  // Supports **bold** markdown for key phrases.
  bullets: string[];
  highlights: { value: string; label: string }[];
  stack: string[];
};

export const PROFILE = {
  name: "Najmul Huda",
  initials: "NH",
  avatar: "/me.jpg",
  email: "najmul.myself@gmail.com",
  resume: "/Najmul_Huda_Resume.pdf",
  headline: "I build and ship Flutter apps for iOS & Android.",
  eyebrow: "Mobile Product Engineering · iOS + Android",
  heroSubtitle:
    "3 years turning ideas into reliable, testable apps with Clean Architecture and BLoC, from first commit to the App Store and Play Store.",
  tagline: "Flutter engineer who ships clean, tested apps.",
  status: "Open to opportunities",
  role: { title: "Software Engineer", company: "Gold Kinen" },
  location: "Dhaka, Bangladesh",
  city: "Dhaka",
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
  // Icons live in /public; entries without an icon fall back to a generic one.
  stack: [
    { name: "Flutter", icon: "/flutter.svg" },
    { name: "Kotlin", icon: "/kotlin.svg" },
    { name: "BLoC", icon: "/placeholders/icon.svg" },
    { name: "Firebase", icon: "/firebase.svg" },
    { name: "Go", icon: "/go.svg" },
  ],
  availability: {
    title: "Remote-friendly",
    description:
      "Comfortable working with teams across time zones. My working day overlaps fully with Europe and partly with the US.",
    tags: ["Remote", "Async-friendly", "EU hours", "US mornings (ET)", "Flexible schedule"],
  },
  socials: [
    { name: "GitHub", handle: "@najmulmyself", href: "https://github.com/najmulmyself" },
    { name: "LinkedIn", handle: "in/najmulmyself", href: "https://www.linkedin.com/in/najmulmyself/" },
  ],
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Gold Kinen",
    href: "https://play.google.com/store/apps/details?id=com.goldkinen.android",
    title: "Software Engineer",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    start: "Jan 2024",
    end: "Present",
    current: true,
    summary: "Own the Flutter app behind Gold Kinen, from architecture to App Store and Play Store releases.",
    bullets: [
      "**Refactored the core app to BLoC and Clean Architecture**, improving modularity, testability and scalability, and introduced **Remote Config** for feature flags and controlled rollouts.",
      "**Implemented Auto-Save with the bKash API** for automated recurring transactions, built with **TDD at 80%+ test coverage**.",
      "Managed the full app lifecycle: internal QA via **Firebase App Distribution**, live **Play Store and App Store** releases, and issue tracking with **Crashlytics**.",
    ],
    highlights: [
      { value: "80%+", label: "Test coverage" },
      { value: "iOS + Android", label: "Store releases" },
      { value: "Crashlytics", label: "Live monitoring" },
    ],
    stack: ["BLoC", "Clean Architecture", "TDD", "get_it", "Remote Config", "Firebase"],
  },
  {
    company: "Arbree Solutions",
    title: "Software Engineer",
    type: "Full-time",
    location: "Dhaka, Bangladesh",
    start: "Apr 2022",
    end: "Dec 2023",
    current: false,
    summary: "Built a government VAT system and a hotel booking app in Flutter.",
    bullets: [
      "Built **NBR - EFDMS**, a **government VAT management system** that integrates **Electronic Fiscal Devices** for accurate tax reporting.",
      "Implemented **multi-role authentication**, **Fernet-encrypted** API communication and **offline-first sync** via SQFLite with automatic server reconciliation.",
      "Automated **VAT calculation and PDF generation**, with push notifications for compliance deadlines.",
      "Built **Stayverz**, a hotel booking app with real-time booking flows, a **secure payment gateway** and push notifications.",
    ],
    highlights: [
      { value: "2", label: "Apps shipped" },
      { value: "Offline-first", label: "Sync" },
      { value: "Encrypted", label: "APIs" },
    ],
    stack: ["Provider", "MVC", "TDD", "SQFLite", "Fernet", "Payments"],
  },
];

// Placeholder: shown in the "How I work" section. Edit to match how you work.
export const PROCESS = [
  {
    step: "01",
    title: "Discover & define",
    description:
      "We agree on the users, the core features and what \"done\" looks like before any code is written.",
  },
  {
    step: "02",
    title: "Architect & prototype",
    description:
      "Real screens and a clean architecture plan early on, so flows are validated and nothing gets built twice.",
  },
  {
    step: "03",
    title: "Build, test & ship",
    description:
      "Test-driven Flutter code, QA builds through Firebase App Distribution, then release to the App Store and Play Store.",
  },
];

// Placeholder answers. Review before publishing.
export const FAQ = [
  {
    question: "Do you work on existing codebases?",
    answer:
      "Yes. I've refactored a live production app to BLoC and Clean Architecture without stopping feature work.",
  },
  {
    question: "Can you publish the app to the stores?",
    answer:
      "Yes. I handle internal testing, App Store and Play Store submission, and crash monitoring after launch.",
  },
  {
    question: "How long does an app take?",
    answer:
      "It depends on scope. After a short call I'll share a plan with milestones and an estimate.",
  },
  {
    question: "Will I own the code?",
    answer: "Yes. The full source code is yours.",
  },
  {
    question: "What do you need to get started?",
    answer: "Your idea, the core features and your goals. A short call is the fastest way to get aligned.",
  },
];
