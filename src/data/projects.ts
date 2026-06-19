export interface Project {
  title: string;
  role: string;
  description: string;
  outcome: string;
  url: string;
  tags: string[];
  techStack: string[];
  gradient: string;
  status: "Live" | "In Development";
}

export const projects: Project[] = [
  {
    title: "Tsoka Travel",
    role: "Full-Stack Developer",
    description:
      "End-to-end travel booking platform enabling users to browse African destinations, view dynamic listings, and complete reservations through an integrated booking flow.",
    outcome:
      "Delivered a production-ready platform with responsive design, booking functionality, and a polished user experience for international travellers.",
    url: "https://tsokatravel.com/",
    tags: ["Full-Stack", "Booking System", "Tourism"],
    techStack: ["ASP.NET", "Angular", "SQL Server", "Azure"],
    gradient: "from-[#1a3a5c] via-[#0d2137] to-[#1c3f28]",
    status: "Live",
  },
  {
    title: "Delight Tours & Travels",
    role: "Web Developer",
    description:
      "Tour booking website for guided Victoria Falls experiences — rainforest walks, river cruises, and safari excursions — with third-party booking platform integration.",
    outcome:
      "Integrated TripAdvisor and Bokun booking channels, giving the operator a single digital storefront for all tour products.",
    url: "https://www.delighttoursandtravels.com/",
    tags: ["Next.js", "Booking Integration", "Tourism"],
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    gradient: "from-[#5c2e0d] via-[#3a1a06] to-[#7a4a10]",
    status: "Live",
  },
  {
    title: "South Seventeen Events",
    role: "Web Developer",
    description:
      "Premium corporate events website for a boutique MICE partner operating across Zimbabwe, Zambia, and Botswana — built with editorial design and full-width visual storytelling.",
    outcome:
      "Established a high-end digital presence that reflects the brand's positioning in the corporate events and incentive travel market.",
    url: "https://www.southseventeenevents.com/",
    tags: ["Corporate", "Events", "Premium Design"],
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    gradient: "from-[#1e1040] via-[#120a2a] to-[#2e1a10]",
    status: "Live",
  },
  {
    title: "TWT All Africa One Journey",
    role: "Lead Developer",
    description:
      "Luxury safari journey platform for bespoke private experiences through the Victoria Falls Triangle — spanning Zimbabwe, Zambia, and Botswana with enquiry workflows and destination content.",
    outcome:
      "Built and deployed a production luxury travel site with smooth scrolling, animated sections, PDF enquiry generation, and email delivery — hosted on Vercel.",
    url: "https://twtallafrica.com/",
    tags: ["Next.js", "Luxury Safari", "Full-Stack"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Vercel"],
    gradient: "from-[#0d2e1a] via-[#071a0d] to-[#2a2206]",
    status: "Live",
  },
];

export const githubBanner = {
  title: "Explore More on GitHub",
  description:
    "Browse repositories, client projects, and code experiments. Available for collaboration, code review, and open-source contributions.",
  url: "https://github.com/tedwelld",
  cta: "View GitHub Profile",
};
