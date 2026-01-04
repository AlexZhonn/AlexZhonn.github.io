// app/components/ui/ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";
import { Experience } from "../../data/Experience";
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

interface ExperienceProps {
  Experience: Experience;
}

export const ExperienceCard = ({ Experience }: ExperienceProps) => {
  return (
    <div className="space-y-3 py-2">
      <div className="flex items-center gap-4">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
          <Image
            src={Experience.imageURL}
            alt={Experience.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold text-white leading-tight">
            {Experience.title}
          </h3>
          <span className="text-sm text-gray-500">
            {Experience.startDate} – {Experience.endDate}
          </span>
        </div>
      </div>

      <p className="text-gray-400 leading-relaxed max-w-3xl">
        {Experience.description}
      </p>
    </div>
  );
};
