export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  current: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Junior Software Developer",
    company: "Shearwater Adventures",
    location: "Victoria Falls, Zimbabwe",
    period: "2023 — Present",
    employmentType: "Full-time",
    current: true,
    summary:
      "Developing and supporting enterprise applications and system integrations for one of Zimbabwe's leading adventure tourism operators.",
    bullets: [
      "Design, develop, and maintain internal enterprise web applications using ASP.NET Core, C#, and Angular",
      "Build and consume REST and SOAP APIs for third-party and internal system integrations, including SAP Integration Suite workflows",
      "Participate in code reviews, sprint planning, and Agile ceremonies to deliver features on schedule",
      "Support CI/CD pipeline configuration, Git-based version control, and automated deployment to Azure App Services",
      "Diagnose and resolve production issues to improve platform stability, uptime, and user experience",
      "Author technical documentation, API specifications, and internal process guides for team knowledge sharing",
    ],
    tags: ["ASP.NET Core", "Angular", "C#", "REST / SOAP", "SAP Integration", "CI/CD", "Azure", "Git", "Agile"],
  },
  {
    title: "IT Support Technician",
    company: "Three Choirs Distribution",
    location: "Zimbabwe",
    period: "2021 — 2023",
    employmentType: "Full-time",
    current: false,
    summary:
      "Provided front-line IT support and network infrastructure maintenance for a distribution company, building the foundation for my infrastructure and troubleshooting skills.",
    bullets: [
      "Resolved hardware, software, and network connectivity issues for end users across the organisation",
      "Configured and maintained workstations, printers, and LAN-connected devices to ensure operational continuity",
      "Diagnosed DNS, DHCP, and routing problems affecting internet and internal network access",
      "Performed routine system maintenance, updates, and backups to minimise downtime and data loss",
      "Supported daily IT operations and escalated complex issues to senior technical staff when required",
    ],
    tags: ["Networking", "TCP/IP", "DNS & DHCP", "Hardware Support", "LAN Administration", "IT Operations"],
  },
];
