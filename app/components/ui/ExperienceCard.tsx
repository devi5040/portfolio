import { ProfessionalExperience } from '@/app/types/profession-experience.types';
import { ChevronRight } from 'lucide-react';

interface ExperienceCard extends ProfessionalExperience {
  index: number;
}

export const ExperienceCard = ({
  title,
  company,
  period,
  points,
  index,
}: ExperienceCard) => {
  return (
    <div
      className={`w-[45%] border border-primary rounded-xl p-6 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} space-y-2 font-geist`}
    >
      <h3 className="text-2xl font-bold text-left">{title}</h3>
      <p className="text-primary/60 text-sm mb-4 text-left">
        {company} * {period}
      </p>
      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-primary">{<ChevronRight />}</span>
            <span className="text-justify">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
