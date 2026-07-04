import { TechnicalSkills } from '@/app/types/technical-skills.types';
import { Badge } from './Badge';

export const TechStackCard = ({ item }: { item: TechnicalSkills }) => {
  return (
    <div className="mr-10 mb-10 border-l border-primary bg-card rounded-sm py-5 px-6 space-y-2">
      <div className="flex justify-start items-center space-x-3">
        <item.icon className="text-primary font-bold" />
        <h2 className="font-semibold text-[#f6f6f6] font-geist">
          {item.title}
        </h2>
      </div>
      <div className="p-1 flex flex-wrap gap-2">
        {item.subskills.map((sub, index) => (
          <Badge title={sub} key={index} />
        ))}
      </div>
    </div>
  );
};
