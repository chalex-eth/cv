import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alexandre Chalard",
  initials: "AC",
  location: "France",
  locationLink: "",
  about:
    "Blockchain and Rust engineer",
  summary:
    "As a Founding Engineer in blockchain and DeFi, I enjoy translating innovative ideas into practical solutions, my main focus is on the Ethereum ecosystem and fostering creativity and teamwork to bring decentralized and innovative projects to life.",
  avatarUrl: "https://avatars.githubusercontent.com/u/43524913?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    social: [
      {
        name: "GitHub",
        url: "https://github.com/chalex-eth",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexandre-chalardphd/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/0xchalex",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      degree: "Ph.D in Neuroscience",
      start: "2017",
      end: "2020",
    },
  ],
  work: [
    {
      company: "Fyde",
      link: "http://fyde.fi/",
      badges: ["Remote"],
      title: "Founding Engineer",
      start: "2022",
      end: "-",
      description:
        "Fyde Treasury Protocol is a holistic treasury management protocol on the Ethereum ecosystem that gives protocol and DAO treasuries diversification, liquidity, and yield - all without having to sell their native tokens on the open market or lose their native governance rights.",
    },
    {
      company: "Tinkering Society",
      link: "https://tinkeringsociety.xyz",
      badges: ["Remote"],
      title: "Blockchain engineer, DeFi Researcher",
      start: "2022",
      end: "20222",
      description:
        "The Tinkering Society is a privately-funded group of builders and thinkers with a shared mission to further develop the crypto ecosystem through researching protocols, building tools, and incubating projects.",
    },
    {
      company: "CharlieDAO",
      link: "https://truefreeze.xyz",
      badges: ["Remote"],
      title: "Lead Blockchain engineer",
      start: "2021",
      end: "2022",
      description:
        "True Freeze is a public good patience primitive. True Freeze is an autonomous protocol designed to function by itself for 100s of years with no governance, no admin, no emergency powers, no DAO.",
    },

  ],
  skills: [
    "Solidity",
    "Rust",
    "Python",
  ],
  projects: [
    {
      title: "Fyde's smart contracts",
      techStack: [
        "Solidity",
        "Foundry",
      ],
      description: "Smart contracts for Fyde liquid vault",
      link: {
        label: "fyde.fi",
        href: "http://fyde.fi/",
      },
    },
    {
      title: "Fyde's backend",
      techStack: ["Rust", "Rest API"],
      description:
        "Rust backend",
      link: {
        label: "fyde.fi",
        href: "http://fyde.fi/",
      },
    },
    {
      title: "Fyde's sentinel",
      techStack: ["Rust", "Solidity"],
      description:
        "Collection of Rust bot to monitor and upkeep the protocol",
      link: {
        label: "fyde.fi",
        href: "http://fyde.fi/",
      },
    },

  ],
} as const;
