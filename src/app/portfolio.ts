// Set visible to true when a section is ready. Duplicate an item to add another entry.
export type Entry = {
  title?: string;
  dates?: string;
  description?: string;
  bullets?: string[];
  credentials?: { name: string; issued: string; href: string }[];
  tags?: string[];
  links?: { label: string; href: string }[];
};

export enum SectionId {
  About = 'about',
  Projects = 'projects',
  Experience = 'experience',
  Now = 'now',
  Interests = 'interests',
  Contact = 'contact',
}

export type Section = { id: SectionId; title: string; visible: boolean; items: Entry[]; supportingItems?: Entry[] };

export const sections: Section[] = [
  {
    id: SectionId.About, title: 'About me', visible: true,
    items: [{
      description: 'I’m a software engineer based in Dallas, Texas. I’m passionate about understanding how things work and figuring out what I can build to make them better. Feel free to reach out.',
    }],
  },
  {
    id: SectionId.Experience, title: 'Experience & skills', visible: true,
    items: [
      {
        title: 'Full Stack Software Engineer · Fidelity',
        dates: 'Nov 2026 – Present',
      },
      {
        title: 'Software Engineer · Optimal Blue',
        dates: 'Dec 2024 – Nov 2026',
        bullets: [
          'Built core pricing functionality in Angular and .NET for Optimal Blue’s new Product & Pricing Engine, helping match the legacy platform’s capabilities and supporting a migration involving 400+ mortgage lenders',
          'Built APIs for web and mobile applications and helped the mobile team integrate them through documentation, walkthroughs, and joint debugging',
          'Supported triage and resolution of client-reported issues across Encompass, Empower, and Byte integrations.',
          'Led the mortgage pricing application’s migration to a shared Angular component library to standardize applications across the company',
          'Piloted spec-driven development with AWS AI-DLC and authored custom skills and repository-level instructions that helped shape the rollout',
        ],
      },
      {
        title: 'Software Engineer · Walmart Global Tech',
        dates: 'Aug 2023 – Dec 2024',
        bullets: [
          'Developed business-critical pricing applications using React and TypeScript for Sam’s Club Pricing Execution, enabling pricing managers to submit, approve and audit 150,000+ daily updates',
          'Implemented a configurable Rules Engine UI that automated pricing approvals based on disaster zones, pricing thresholds, and store-specific logic, significantly reducing manual review effort and accelerating time-to-approval',
          'Triaged and resolved production incidents across Spring Boot/Java APIs and frontend services, conducting full root-cause analysis to restore functionality and prevent recurrence',
          'Partnered with product managers and UX designers to translate complex pricing workflows and wireframes into scalable, maintainable UI components aligned with Walmart design standards',
        ],
      },
      {
        title: 'Software Engineer Intern · Collins Aerospace',
        dates: 'Jun 2022 – May 2023',
        bullets: [
          'Enhanced an Angular and Three.js dashboard that surfaced manufacturing inefficiencies with estimated savings of $40,000 per product lifecycle',
          'Built REST APIs in Python and Django to aggregate manufacturing data for analysis',
          'Led UX testing initiatives on an Agile team, improving usability, user engagement, and workflow efficiency through iterative feedback and refinements',
        ],
      },
      {
        title: 'Software Developer Intern · Selective Insurance',
        dates: 'Jun 2021 – May 2022',
        bullets: [
          'Increased frontend unit test coverage to 95% using Karma and Jest, remediated legacy code smells, and enforced consistent ESLint standards to reduce technical debt and improve application stability',
          'Designed and pitched a gamified developer experience tool that visualized code quality metrics, incentivizing clean coding practices and reducing linting errors across the engineering organization',
        ],
      },
    ],
    supportingItems: [
      {
        title: 'Technical skills',
        tags: ['TypeScript', 'React', 'Angular', 'C#', '.NET', 'Java', 'Python', 'SQL', 'Docker', 'Kubernetes'],
      },
      {
        title: 'Certifications',
        credentials: [
          {
            name: 'Microsoft Certified: Azure Developer Associate',
            issued: 'Jun 2026',
            href: 'https://learn.microsoft.com/api/credentials/share/en-us/djrcawley/F9B34514C67EF3CD?sharingId=1DEA777A67C483D0',
          },
          {
            name: 'Microsoft Certified: Azure Fundamentals',
            issued: 'Feb 2026',
            href: 'https://learn.microsoft.com/api/credentials/share/en-us/djrcawley/72ACA3CFF16FAB96?sharingId=1DEA777A67C483D0',
          },
          {
            name: 'Certified SAFe® 5 Practitioner',
            issued: 'Aug 2021',
            href: 'https://www.credly.com/badges/a69f3b9d-8411-4202-92ee-f689688c4bc0/public_url',
          },
        ],
      },
    ],
  },
  {
    id: SectionId.Projects, title: 'Featured projects', visible: true,
    items: [{
      title: 'Personal Portfolio',
      description: 'My home on the web, with an animated wireframe background and a theme that remembers your preference.',
      tags: ['React', 'TypeScript', 'Vite'],
      links: [{ label: 'View source', href: 'https://github.com/djrcawley/PersonalPage' }],
    }],
  },
  {
    id: SectionId.Now, title: 'Currently working on', visible: false,
    items: [{ title: 'Current project', description: 'Share what you are building or learning.' }],
  },
  {
    id: SectionId.Interests, title: 'Personal interests', visible: false,
    items: [{ title: 'Interest', description: 'Share something you enjoy outside of work.' }],
  },
  {
    id: SectionId.Contact, title: 'Get in touch', visible: true,
    items: [{
      description: 'You can reach me on LinkedIn.',
      links: [{ label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/dennis-cawley/' }],
    }],
  },
];
