import { TECHNICAL_SKILLS } from '../constants/TECHNICAL_SKILLS';
import { TechStackCard } from './ui/TechStackCard';

export const TechnicalExperience = () => {
  return (
    <section
      className="p-10 flex flex-col justify-center items-center max-w-full overflow-auto"
      id="skills"
    >
      <h2 className="font-bold text-3xl font-geist text-[#f6f6f6] mb-10">
        Tech Armory
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {TECHNICAL_SKILLS.map((skill, index) => (
          <TechStackCard item={skill} key={index} />
        ))}
      </div>
    </section>
  );
};
