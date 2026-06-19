export interface SkillGroup {
  icon: string;
  title: string;
  tags: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: "pi-code",
    title: "Languages & Frameworks",
    tags: [
      "C#",
      "ASP.NET Core",
      "Angular",
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "HTML / CSS",
      "Tailwind CSS",
      "C++",
    ],
  },
  {
    icon: "pi-cloud",
    title: "Cloud & DevOps",
    tags: [
      "Microsoft Azure",
      "Azure App Services",
      "CI/CD Pipelines",
      "Git",
      "GitHub",
      "Vercel",
      "Agile / Scrum",
      "Release Management",
    ],
  },
  {
    icon: "pi-link",
    title: "Integration & APIs",
    tags: [
      "REST APIs",
      "SOAP",
      "SAP Integration Suite",
      "Swagger / OpenAPI",
      "System Integration",
      "JSON / XML",
    ],
  },
  {
    icon: "pi-server",
    title: "Infrastructure & Data",
    tags: [
      "SQL Server",
      "Database Design",
      "TCP/IP",
      "DNS & DHCP",
      "Network Routing",
      "IT Support",
      "Troubleshooting",
    ],
  },
];

export const expertise = [
  {
    icon: "pi-code",
    title: "Software Engineering & Development",
    bullets: [
      "Enterprise web applications with ASP.NET Core, C#, and Angular",
      "Modern front-end development with React, Next.js, and TypeScript",
      "RESTful API design, implementation, and third-party consumption",
      "Clean architecture, OOP principles, and maintainable codebases",
      "Authentication, role-based access control, and secure application design",
      "SQL database integration, schema design, and query optimisation",
    ],
  },
  {
    icon: "pi-cloud",
    title: "Cloud & Microsoft Azure",
    bullets: [
      "Deployment and management of applications on Azure App Services",
      "Cloud resource configuration, monitoring, and availability management",
      "Scalable, cloud-native application architecture and hosting strategies",
      "Environment separation across development, staging, and production",
      "Production troubleshooting and performance optimisation on Azure",
    ],
  },
  {
    icon: "pi-cog",
    title: "DevOps & CI/CD",
    bullets: [
      "End-to-end CI/CD pipeline design, configuration, and maintenance",
      "Git and GitHub branching strategies, pull requests, and code review workflows",
      "Automated build, test, and deployment processes",
      "Environment configuration, release management, and rollback procedures",
      "Deployment diagnostics and pipeline optimisation",
    ],
  },
  {
    icon: "pi-server",
    title: "Networking & Infrastructure",
    bullets: [
      "TCP/IP, DNS, DHCP, routing, and switching fundamentals",
      "Network troubleshooting and enterprise infrastructure support",
      "Firewall concepts and network security best practices",
      "End-user hardware and software support at scale",
      "Bridging development and operations for faster incident resolution",
    ],
  },
];

export const services = [
  {
    icon: "pi-desktop",
    title: "Web Application Development",
    description:
      "Custom enterprise and client-facing web applications — from responsive UI design through to production deployment on Azure or Vercel.",
  },
  {
    icon: "pi-link",
    title: "System Integrations",
    description:
      "Connecting disparate systems via REST and SOAP APIs, SAP Integration Suite, and custom middleware for seamless data flow.",
  },
  {
    icon: "pi-database",
    title: "Database Design & Management",
    description:
      "SQL Server schema architecture, query optimisation, stored procedures, and data-driven application backends.",
  },
  {
    icon: "pi-cog",
    title: "DevOps & CI/CD",
    description:
      "Pipeline setup, deployment automation, Git workflow design, and release engineering for reliable software delivery.",
  },
  {
    icon: "pi-server",
    title: "Backend Development",
    description:
      "Server-side logic, authentication systems, RBAC, API endpoints, business rules, and production debugging.",
  },
  {
    icon: "pi-file",
    title: "Technical Documentation",
    description:
      "API specifications (Swagger/OpenAPI), architecture diagrams, process guides, and onboarding documentation for engineering teams.",
  },
];

export const competencies = [
  {
    icon: "pi-comments",
    title: "Clear Communication",
    description:
      "Translates complex technical concepts for both engineering teams and non-technical stakeholders with clarity and precision.",
  },
  {
    icon: "pi-users",
    title: "Agile Collaboration",
    description:
      "Proven contributor in sprint-based teams — participating in standups, reviews, retrospectives, and cross-functional planning.",
  },
  {
    icon: "pi-bolt",
    title: "Problem Solving Under Pressure",
    description:
      "Calm, analytical approach to diagnosing production incidents, network failures, and integration issues in time-critical environments.",
  },
  {
    icon: "pi-shield",
    title: "Quality & Reliability",
    description:
      "Committed to secure, maintainable code, thorough documentation, and systems that perform consistently in production.",
  },
  {
    icon: "pi-sync",
    title: "Continuous Learning",
    description:
      "Actively expanding skills across modern frameworks (Next.js, React), cloud platforms, and emerging integration patterns.",
  },
  {
    icon: "pi-chart-line",
    title: "Business-Aligned Delivery",
    description:
      "Focuses on outcomes that matter — uptime, user experience, and features that directly support business operations and revenue.",
  },
];
