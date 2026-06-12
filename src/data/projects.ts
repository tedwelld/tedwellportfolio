export interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "Tsoka Travel",
    description:
      "Full-stack travel booking platform with dynamic listings, integrated booking features, and a seamless experience for exploring African destinations.",
    url: "https://tsokatravel.com/",
    tags: ["Full-Stack", "Booking System", "Web App"],
    gradient: "from-[#1a3a5c] via-[#0d2137] to-[#1c3f28]",
  },
  {
    title: "Delight Tours & Travels",
    description:
      "Tour booking platform for guided Victoria Falls experiences — rainforest walks, river cruises and safari excursions, integrated with TripAdvisor and Bokun.",
    url: "https://www.delighttoursandtravels.com/",
    tags: ["Next.js", "Booking Integration", "Tourism"],
    gradient: "from-[#5c2e0d] via-[#3a1a06] to-[#7a4a10]",
  },
  {
    title: "South Seventeen Events",
    description:
      "Premium corporate events website for a boutique MICE partner operating across Zimbabwe, Zambia, and Botswana — editorial design with full-width visual storytelling.",
    url: "https://www.southseventeenevents.com/",
    tags: ["Corporate", "Events", "Premium Design"],
    gradient: "from-[#1e1040] via-[#120a2a] to-[#2e1a10]",
  },
  {
    title: "TWT All Africa One Journey",
    description:
      "Luxury safari journey platform for bespoke private experiences through the Victoria Falls Triangle — wildlife, adventure, and cultural immersion across three countries.",
    url: "https://twtallafrica.com/",
    tags: ["Next.js", "Luxury Safari", "Vercel"],
    gradient: "from-[#0d2e1a] via-[#071a0d] to-[#2a2206]",
  },
];
