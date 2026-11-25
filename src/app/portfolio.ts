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
    items: [{ description: 'I’m Dennis Cawley, a software engineer. I built this site as a place to share my projects and the details behind them.' }],
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
          'Develop and maintain core features for a next-generation Pricing & Product Engine, using Angular and .NET, achieving full feature parity with a legacy system and supporting the migration of 500+ mortgage lenders',
          'Integrated an AI-powered Originator Assistant into pricing workflows, analyzing real-time loan data to deliver actionable recommendations and improve customer interest rates',
          'Lead triage and resolution of client-reported issues across multiple platform integrations (Encompass, Empower, Byte), improving system reliability and customer satisfaction',
          'Built a margin optimization tool during a company-wide hackathon leveraging historical mortgage market data to help lenders competitively price rates and improve decision-making',
        ],
      },
      {
        title: 'Software Engineer · Walmart Global Tech',
        dates: 'Aug 2023 – Dec 2024',
        bullets: [
          'Developed business-critical pricing applications using React and Typescript for Sam’s Club Pricing Execution, enabling pricing managers to submit, approve and audit 150,000+ daily updates',
          'Implemented a configurable Rules Engine UI that automated pricing approvals based on disaster zones, pricing thresholds, and store-specific logic, significantly reducing manual review effort and accelerating time-to-approval',
          'Triaged and resolved production incidents across Spring Boot/Java APIs and frontend services, conducting full root-cause analysis to restore functionality and prevent recurrence',
          'Partnered with product managers and UX designers to translate complex pricing workflows and wireframes into scalable, maintainable UI components aligned with Walmart design standards',
        ],
      },
      {
        title: 'Software Engineer Intern · Collins Aerospace',
        dates: 'Jun 2022 – May 2023',
        bullets: [
          'Enhanced 3D data visualizations dashboard using Angular and Three.js, highlighting manufacturing inefficiencies that led to a $40K cost reduction per product lifecycle',
          'Created Django/Python REST APIs to aggregate manufacturing data, enabling downstream analysis',
          'Led UX testing initiatives on an Agile team, improving usability, user engagement, and workflow efficiency through iterative feedback and refinements',
        ],
      },
      {
        title: 'Software Developer Intern · Selective Insurance',
        dates: 'Jun 2021 – May 2022',
        bullets: [
          'Increased frontend unit test coverage to 95% using Karma and Jest, remediated legacy code smells, and enforced consistent ESLint standards to reduce technical debt and improve application stability',
          'Designed and pitched a gamified developer experience tool that visualized code quality metrics, incentivizing clean coding practices and reducing linting errors across the engineering organization',
          'Contributed to Agile team ceremonies while earning SAFe Agile Practitioner certification, strengthening understanding of enterprise-scale software delivery',
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
