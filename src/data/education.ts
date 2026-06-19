export interface EducationItem {
  qualification: string;
  institution: string;
  period: string;
  field?: string;
  details?: string;
}

export const education: EducationItem[] = [
  {
    qualification: "National Diploma in Information Technology",
    institution: "Gweru Polytechnic College",
    period: "2019 — 2021",
    field: "Information Technology",
    details:
      "Comprehensive programme covering software development, database systems, networking, and IT project management.",
  },
  {
    qualification: "Advanced Level (A-Level)",
    institution: "Fatima High School",
    period: "2017 — 2018",
    field: "2 Passes",
    details: "Completed advanced secondary education with passes in two subjects.",
  },
  {
    qualification: "Ordinary Level (O-Level)",
    institution: "Marist Brothers High School",
    period: "2012 — 2016",
    field: "7 Passes",
    details: "Completed general secondary education with passes in seven subjects.",
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  description: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    title: "Enterprise Web Development",
    issuer: "Professional Practice",
    year: "2023 — Present",
    description:
      "Production experience building enterprise applications with ASP.NET Core, Angular, TypeScript, and SQL Server in Agile environments.",
    icon: "pi-code",
  },
  {
    title: "Microsoft Azure Cloud Operations",
    issuer: "Professional Practice",
    year: "2023 — Present",
    description:
      "Deploying and managing applications on Azure App Services, configuring cloud resources, and supporting production environments.",
    icon: "pi-cloud",
  },
  {
    title: "API & System Integration",
    issuer: "Professional Practice",
    year: "2023 — Present",
    description:
      "Designing and implementing REST and SOAP integrations, including SAP Integration Suite workflows and Swagger/OpenAPI documentation.",
    icon: "pi-link",
  },
  {
    title: "CI/CD & DevOps Workflows",
    issuer: "Professional Practice",
    year: "2023 — Present",
    description:
      "Building automated build, test, and deployment pipelines using Git, GitHub, and Azure DevOps practices.",
    icon: "pi-cog",
  },
];

export interface Reference {
  role: string;
  company: string;
  name: string;
  phone: string;
  email?: string;
}

export const references: Reference[] = [
  {
    role: "IT Manager",
    company: "Shearwater Adventures",
    name: "Franklin Ndlovu",
    phone: "+263 782 115 130",
    email: "franklin@shearwatervf.com",
  },
  {
    role: "Manager",
    company: "Three Choirs Distribution",
    name: "Norbet Moyo",
    phone: "+263 717 242 204",
  },
  {
    role: "Manager",
    company: "Midlands State University (Zvishavane Campus)",
    name: "Blessing Kamtayeni",
    phone: "+263 776 898 971",
  },
];

export const cvFiles = [
  {
    icon: "pi-file",
    title: "General CV",
    description:
      "Complete professional profile covering software development, cloud, networking, education, and references.",
    file: "/assets/cv-general.pdf",
    download: "Tedwell_Zwane_CV.pdf",
  },
  {
    icon: "pi-code",
    title: "Software Developer CV",
    description:
      "Tailored for software engineering roles — emphasising full-stack development, integrations, and project delivery.",
    file: "/assets/cv-software-dev.pdf",
    download: "Tedwell_Zwane_SoftwareDev_CV.pdf",
  },
  {
    icon: "pi-server",
    title: "Network Engineer CV",
    description:
      "Focused on networking, infrastructure support, IT operations, and technical troubleshooting capabilities.",
    file: "/assets/cv-network-engineer.pdf",
    download: "Tedwell_Zwane_NetworkEngineer_CV.pdf",
  },
];
