// app/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string; // You will replace these with local paths like "/images/project1.png" later
  demoLink: string;
  codeLink: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Student MarketPlace (Gator Exchange)",
    description:
      "Gator Exchange is a full-stack web marketplace built exclusively for University of Florida students to exchange used items within a UF-verified, trust-first environment. The platform emphasizes safety, real-world interaction, and offline transactions, reflecting authentic campus behavior while addressing common risks in open online marketplaces.",
    techStack: [
      "Vite",
      "JavaScript",
      "Tailwind CSS",
      "MongoDB",
      "Clerk",
      "React",
    ],
    // NOTE: Replace with actual image paths in your public folder, e.g., "/projects/dashboard.png"
    // Using a placeholder color service for now so the code runs immediately.
    imageUrl: "/Project/GE.png",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/yourusername/repo",
  },
];
