export interface Experience {
  id: number;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  imageURL: string;
}
export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Backend Developer",
    company: "Kogna AI",
    startDate: "2025/10/01",
    endDate: "Present",
    description: "Developed a core RBAC system within the dashboard",
    imageURL: "/Experience/Kogna.png",
  },
];
