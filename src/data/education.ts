export interface EducationItem {
  qualification: string;
  institution: string;
}

export const education: EducationItem[] = [
  {
    qualification: "National Diploma in Information Technology",
    institution: "Gweru Polytechnic College",
  },
  {
    qualification: "2 A-Level Passes",
    institution: "Fatima High School",
  },
  {
    qualification: "7 O-Level Passes",
    institution: "Marist Brothers High School",
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
    description: "Comprehensive overview of all my skills, experience, education and qualifications",
    file: "/assets/cv-general.docx",
    download: "Tedwell_Zwane_CV.docx",
  },
  {
    icon: "pi-code",
    title: "Software Developer CV",
    description: "Focused on software engineering, full-stack development skills and project experience",
    file: "/assets/cv-software-dev.docx",
    download: "Tedwell_Zwane_SoftwareDev_CV.docx",
  },
  {
    icon: "pi-server",
    title: "Network Engineer CV",
    description: "Highlighting networking, infrastructure, IT operations and technical support capabilities",
    file: "/assets/cv-network-engineer.docx",
    download: "Tedwell_Zwane_NetworkEngineer_CV.docx",
  },
];
