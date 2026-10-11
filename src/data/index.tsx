import { Icons } from "@/components/icons";
import {
  Code,
  HomeIcon,
  NotebookPen,
  UserRound,
} from "lucide-react";
export const DATA = {
  name: "Najmul Huda",
  url: "https://najfolio.vercel.app",
  description:
    "I'm a Mobile Application Developer, mostly with Flutter and Kotlin. At the same time, I’m exploring backend with Go and brushing up on computer science fundamentals.",
  description2:
    " Honestly, I don’t just want to build apps anymore. I want to understand the whole stack. From UI design to system internals, I’m chasing the bigger picture so I can grow into a well-rounded software engineer, not just someone who plugs code into a screen.",
  description3: "",
  summary:
    "I'm a Software Engineer at Gold Kinen Technologies, where I've been building and maintaining applications since January 2024. Before that, I spent nearly two years at Arbree Solutions Ltd., implementing new features, optimizing existing code, and integrating systems. I studied Geography and Environmental Science at [Dhaka College](https://www.dhakacollege.edu.bd/en), and today I build mobile apps with Flutter and Kotlin while exploring backend development with Go.",
  // Placeholder: shown only when `tweets` below has IDs.
  appreciation:
    "Here's what people have been saying about my work. Kind words from colleagues, clients, and fellow developers keep me motivated to keep shipping better apps.",
  // Placeholder: add tweet IDs about your work (e.g. "1815138485440803034").
  tweets: [] as string[],
  footer:
    "Interested in learning more about my professional journey and skill set? [Click here to view my resume](/Najmul_Huda_Resume.pdf) and discover the experiences, achievements, and expertise that I bring to the table.",
  linkedin: [
    {
      title: "najmulmyself",
      href: "https://www.linkedin.com/in/najmulmyself/",
      icon: "/linkedin-logo.svg",
      profile: "/me.jpg",
    },
  ],
  github: [
    {
      title: "najmulmyself",
      href: "https://github.com/najmulmyself",
      icon: "/github-logo.svg",
      profile: "/me.jpg",
    },
  ],
  // Placeholder photos live in /public/placeholders. Swap them for your own.
  images: [
    {
      title: "Placeholder photo",
      href: "/placeholders/photo-1.svg",
    },
    {
      title: "Najmul Huda",
      href: "/me.jpg",
    },
    {
      title: "Placeholder photo",
      href: "/placeholders/photo-2.svg",
    },
    {
      title: "Najmul Huda standing outside a white heritage building",
      href: "/me3.jpg",
    },
    {
      title: "Najmul Huda",
      href: "/me2.jpg",
    },
    {
      title: "Placeholder photo",
      href: "/placeholders/photo-3.svg",
    },
  ],
  Iconsvg: [
    {
      id: 1,
      title: "Golang",
      href: "/go.svg",
      site: "#",
    },
    {
      id: 2,
      title: "Flutter",
      href: "/flutter.svg",
      site: "#",
    },
    {
      id: 3,
      title: "Kotlin",
      href: "/kotlin.svg",
      site: "#",
    },
    // Import your teck stack here from https://simpleicons.org/
  ],
  skillsdescription:
    "Here’s a section showcasing the skills I’ve learned and use frequently. These tools and technologies are at the core of my development process, enabling me to build efficient and high-quality solutions.",
  Skills: [
    {
      id: 1,
      title: "Flutter",
      href: "/flutter.svg",
      site: "https://flutter.dev",
    },
    {
      id: 2,
      title: "Kotlin",
      href: "/kotlin.svg",
      site: "https://kotlinlang.org",
    },
    {
      id: 3,
      title: "Golang",
      href: "/go.svg",
      site: "https://go.dev",
    },
    {
      id: 4,
      title: "C++",
      href: "/cpp.svg",
      site: "https://isocpp.org",
    },
    {
      id: 12,
      title: "Python",
      href: "/python.svg",
      site: "https://www.python.org",
    },
    {
      id: 5,
      title: "BLoC",
      href: "/placeholders/icon.svg",
      site: "https://bloclibrary.dev",
    },
    {
      id: 6,
      title: "Riverpod",
      href: "/placeholders/icon.svg",
      site: "https://riverpod.dev",
    },
    {
      id: 7,
      title: "Git",
      href: "/git.svg",
      site: "https://git-scm.com",
    },
    {
      id: 8,
      title: "AWS",
      href: "/aws.svg",
      site: "https://aws.amazon.com",
    },

    {
      id: 9,
      title: "Firebase",
      href: "/firebase.svg",
      site: "https://firebase.google.com",
    },
    {
      id: 10,
      title: "Supabase",
      href: "/placeholders/icon.svg",
      site: "https://supabase.com",
    },
    {
      id: 11,
      title: "MySQL",
      href: "/mysql.svg",
      site: "https://www.mysql.com",
    },

    // Import your teck stack here from https://simpleicons.org/
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/about", icon: UserRound, label: "About" },
    { href: "/projects", icon: Code, label: "Projects" },
    { href: "/blog", icon: NotebookPen, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/najmulmyself",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/najmulmyself/",
        icon: Icons.linkedin,
        navbar: true,
      },
    },
  },
  educationsummary:
    "My education has been a journey of exploration and growth, equipping me with a strong foundation in technology and problem-solving. From mastering core concepts to embracing cutting-edge advancements, each step has shaped my ability to innovate and contribute meaningfully to the tech landscape.",
  education: [
    {
      id: 1,
      school: "Dhaka College, Dhaka",
      href: "https://www.dhakacollege.edu.bd/en",
      degree: "BSc in Geography and Environmental Science",
      logoUrl: "/dc.png",
      start: "2018",
      end: "2024",
    },
  ],
  contributionssummary:
    "Open-source work and side repositories I maintain on [GitHub](https://github.com/najmulmyself).",
  // Placeholder: replace with your real repositories, stars, and forks.
  contributions: [
    {
      link: "https://github.com/najmulmyself",
      title: "flutter-clean-architecture-starter",
      description:
        "Starter template for Flutter apps using BLoC, Clean Architecture, get_it, and a TDD-friendly folder structure.",
      stars: "0",
      forks: "0",
    },
    {
      link: "https://github.com/najmulmyself",
      title: "najfolio",
      description:
        "This portfolio, built with Next.js, React, TailwindCSS, and Framer Motion.",
      stars: "0",
      forks: "0",
    },
  ],
  // Placeholder: replace with your real hackathons, or remove the section.
  hackathonsummary:
    "Events, hackathons, and meetups where I've built things with other developers.",
  hackathons: [
    {
      id: 1,
      title: "Hackathon name",
      dates: "Month Year",
      location: "Dhaka, Bangladesh",
      description:
        "Short description of what you built, the stack you used, and the result.",
      logo: "",
      images: "",
      links: [],
    },
  ],
} as const;
