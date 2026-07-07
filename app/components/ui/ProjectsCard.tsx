import { ProjectsList } from '@/app/types/projects-list.types';
import Image from 'next/image';
import { Badge } from './Badge';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const ProjectsCard = ({ project }: { project: ProjectsList }) => {
  return (
    <div className="min-w-1/3 w-full lg:min-w-0 lg:w-[31%] bg-card rounded-md shadow-md h-160 md:h-120 lg:h-135 lg:mr-5 mb-5 mr-5 p-5">
      <div className="relative">
        <Image
          src={project.imagePath}
          alt={`Image of project: ${project.title}`}
          className="h-50 md:h-70 object-cover w-full self-center"
        />
        <div className="md:-my-12 my-2 md:ml-2 space-x-2">
          {project.techStack.map((tech, idx) => (
            <Badge title={tech} key={idx} />
          ))}
        </div>
      </div>
      <div className="md:mt-16">
        <h2 className="font-medium text-lg font-geist text-[#e6e6e6]">
          {project.title}
        </h2>
        <p className="text-sm font-geist text-neutral text-justify">
          {project.description}
        </p>
        {project.repo && (
          <Link
            href={project.repo}
            className="mt-5 flex justify-start items-center text-primary"
            target="_blank"
          >
            View More <ExternalLink className="ml-3" />
          </Link>
        )}
      </div>
    </div>
  );
};
