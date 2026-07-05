import { PROJECTS_LIST } from '../constants/PROJECTS_LIST';
import { ProjectsCard } from './ui';

export const Projects = () => {
  return (
    <section
      className="p-10 bg-[#111116] border-b border-t border-[#19191D]"
      id="projects"
    >
      <h2 className="font-bold text-3xl text-center font-geist text-[#e6e6e6] my-5">
        Featured Work
      </h2>
      <div className="flex justify-start items-center lg:max-w-full flex-wrap overflow-hidden lg:overflow-x-auto scrollbar-hide">
        {PROJECTS_LIST.map((project, idx) => (
          <ProjectsCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};
