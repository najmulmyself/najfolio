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
  // Supports **bold** markdown for key phrases.
  bullets: string[];
  stack: string[];
};

export const PROFILE = {
  name: "Najmul Huda",
  initials: "NH",
  avatar: "/me.jpg",
  email: "najmul.myself@gmail.com",
  resume: "/Najmul_Huda_Resume.pdf",
  headline: "I build and ship Flutter apps for iOS & Android.",
  heroSubtitle:
    "3 years turning ideas into reliable, testable apps with Clean Architecture and BLoC, from first commit to the App Store and Play Store.",
  status: "Open to opportunities",
  role: { title: "Software Engineer", company: "Gold Kinen" },
  location: "Dhaka, Bangladesh",
  city: "Dhaka",
  timeZone: "Asia/Dhaka",
  timeZoneLabel: "GMT+6",
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
    bullets: [
      "**Refactored the core app to BLoC and Clean Architecture**, improving modularity, testability and scalability, and introduced **Remote Config** for feature flags and controlled rollouts.",
      "**Implemented Auto-Save with the bKash API** for automated recurring transactions, built with **TDD at 80%+ test coverage**.",
      "Managed the full app lifecycle: internal QA via **Firebase App Distribution**, live **Play Store and App Store** releases, and issue tracking with **Crashlytics**.",
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
    bullets: [
      "Built **NBR - EFDMS**, a **government VAT management system** that integrates **Electronic Fiscal Devices** for accurate tax reporting.",
      "Implemented **multi-role authentication**, **Fernet-encrypted** API communication and **offline-first sync** via SQFLite with automatic server reconciliation.",
      "Automated **VAT calculation and PDF generation**, with push notifications for compliance deadlines.",
      "Built **Stayverz**, a hotel booking app with real-time booking flows, a **secure payment gateway** and push notifications.",
    ],
    stack: ["Provider", "MVC", "TDD", "SQFLite", "Fernet", "Payments"],
  },
];
