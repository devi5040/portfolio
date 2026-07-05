import { StaticImageData } from 'next/image';

export interface ProjectsList {
  title: string;
  description: string;
  techStack: string[];
  repo?: string;
  imagePath: StaticImageData;
}
