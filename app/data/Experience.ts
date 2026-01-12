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
    title: "Software Developer",
    company: "Kogna AI",
    startDate: "2025/10/01",
    endDate: "Present",
    description:
      "Secured multi-tenant data access by architecting a granular RBAC system that enforces permission-aware query filtering, effectively eliminating cross-team data leakage risks for 5+ organization levels.",
    imageURL: "/Experience/Kogna.png",
  },
];
