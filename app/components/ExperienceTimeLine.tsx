import { Experience } from "../data/Experience";
import { ExperienceCard } from "./ui/ExperienceCard";
interface Props {
  experience: Experience;
}
export const ExperienceTimelineItem = ({ experience }: Props) => {
  return (
    <div className="relative flex gap-6">
      <div className="w-8 flex justify-center">
        <div className="w-3 h-3 rounded-full bg-white mt-[20px]" />
      </div>
      <div className="flex-1">
        <ExperienceCard Experience={experience} />
      </div>
    </div>
  );
};
