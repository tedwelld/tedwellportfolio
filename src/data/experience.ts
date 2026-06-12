export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  current: boolean;
  bullets: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Junior Software Developer",
    company: "Shearwater Adventures",
    location: "Victoria Falls, Zimbabwe",
    current: true,
    bullets: [
      "Developed and supported system integrations and internal enterprise applications",
      "Participated in REST/SOAP API development, testing, and ongoing maintenance",
      "Resolved system issues and improved overall platform stability and reliability",
      "Documented internal processes and maintained adherence to best coding standards",
      "Supported CI/CD pipeline activities and version control workflows using Git",
      "Collaborated in Agile teams, participating in sprints, reviews, and standups",
    ],
    tags: ["ASP.NET", "Angular", "C#", "CI/CD", "REST APIs", "Git"],
  },
  {
    title: "IT Support Technician",
    company: "Three Choirs Distribution",
    location: "Zimbabwe",
    current: false,
    bullets: [
      "Diagnosed and resolved network, hardware, and software issues for end users",
      "Configured and maintained computers and network-connected devices",
      "Assisted users with connectivity issues, including LAN and internet access problems",
      "Performed system maintenance to ensure optimal performance and minimal downtime",
      "Supported general IT infrastructure and daily operations",
    ],
    tags: ["Networking", "Hardware", "LAN / Internet", "IT Support", "System Maintenance"],
  },
];
