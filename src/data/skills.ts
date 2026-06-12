export interface SkillGroup {
  icon: string;
  title: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "pi-code",
    title: "Languages & Frameworks",
    tags: ["C#", "ASP.NET Core", "Angular", "TypeScript", "JavaScript", "C++", "EJS", "HTML / CSS"],
  },
  {
    icon: "pi-cloud",
    title: "Cloud & DevOps",
    tags: ["Microsoft Azure", "CI/CD Pipelines", "Git", "GitHub", "Azure App Services", "Agile"],
  },
  {
    icon: "pi-link",
    title: "Integration & APIs",
    tags: ["REST APIs", "SOAP", "SAP Integration Suite", "Swagger / OpenAPI", "System Integration"],
  },
  {
    icon: "pi-server",
    title: "Infrastructure & Data",
    tags: ["TCP/IP", "DNS & DHCP", "Network Routing", "SQL Databases", "IT Support", "Troubleshooting"],
  },
];

export const expertise = [
  {
    icon: "pi-code",
    title: "Software Engineering & Development",
    bullets: [
      "Enterprise web apps with ASP.NET Core & C#",
      "Dynamic frontends with Angular & TypeScript",
      "RESTful API design, integration & consumption",
      "Clean architecture & OOP principles",
      "Authentication, RBAC & secure application design",
      "Database integration & SQL-based systems",
    ],
  },
  {
    icon: "pi-cloud",
    title: "Cloud & Microsoft Azure",
    bullets: [
      "Microsoft Azure App Services deployment",
      "Cloud resource management & configuration",
      "Scalable cloud-native application development",
      "Azure monitoring, availability & reliability",
      "Cloud infrastructure awareness & best practices",
    ],
  },
  {
    icon: "pi-cog",
    title: "DevOps & CI/CD",
    bullets: [
      "Building & managing CI/CD pipelines",
      "Git & GitHub version control workflows",
      "Build, test & deployment automation",
      "Environment configuration & release management",
      "Deployment troubleshooting & optimisation",
    ],
  },
  {
    icon: "pi-server",
    title: "Networking & Infrastructure",
    bullets: [
      "TCP/IP, DNS, DHCP, routing & switching",
      "Network troubleshooting & infrastructure support",
      "Firewall & network security fundamentals",
      "System connectivity diagnostics",
      "IT operations & enterprise technical support",
    ],
  },
];

export const services = [
  {
    icon: "pi-desktop",
    title: "Web Application Development",
    description:
      "Responsive enterprise-grade websites and web applications using ASP.NET, Angular, HTML, CSS and modern JavaScript frameworks.",
  },
  {
    icon: "pi-link",
    title: "System Integrations",
    description:
      "REST and SOAP API integrations, SAP Integration Suite implementation, and backend-to-backend system connectivity solutions.",
  },
  {
    icon: "pi-database",
    title: "Database Design & Management",
    description:
      "SQL database architecture, schema design, query optimisation, and data-driven application development.",
  },
  {
    icon: "pi-cog",
    title: "DevOps & CI/CD",
    description:
      "CI/CD pipeline setup and management, deployment automation, version control workflows, and release engineering support.",
  },
  {
    icon: "pi-server",
    title: "Backend Development",
    description:
      "Server-side application logic, authentication systems, role-based access control, API endpoints, and debugging support.",
  },
  {
    icon: "pi-file",
    title: "Technical Documentation",
    description:
      "API specifications with Swagger/OpenAPI, system architecture documentation, process guides, and technical writing.",
  },
];

export const competencies = [
  {
    icon: "pi-comments",
    title: "Communication",
    description: "Strong written and verbal communication skills for technical and non-technical audiences",
  },
  {
    icon: "pi-users",
    title: "Teamwork & Collaboration",
    description: "Excellent ability to work within Agile teams, contribute effectively, and support colleagues",
  },
  {
    icon: "pi-bolt",
    title: "Troubleshooting Under Pressure",
    description: "Effective analytical problem-solving when diagnosing system, network, and software issues",
  },
  {
    icon: "pi-shield",
    title: "Clean Code & Reliability",
    description: "Committed to writing maintainable, secure code and building dependable, stable systems",
  },
];
