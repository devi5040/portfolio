import { Download } from 'lucide-react';
import { Badge } from './ui/Badge';
import Deviprasad from '@/public/deviprasad.jpg';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="px-10 py-18 grid grid-cols-1 lg:grid-cols-2">
      <div className="space-y-12 ">
        <div className="bg-primary/30 border border-primary/10 w-1/2 p-1 justify-center flex rounded-full">
          <span className="text-primary font-geist text-sm">
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </div>
        <div className="space-y-8 ">
          <h1 className="font-bold text-4xl text-[#f6f6f6] font-mono">
            Building scalable <span>solutions</span> for complex problems.
          </h1>
          <p className="font-medium text-neutral font-mono text-justify text-lg">
            Software Engineer specializing in distributed systems, backend
            architecture, and performance optimization. Delivering high-impact
            code for global infrastructures.
          </p>
          <div className="flex justify-start items-center space-x-10">
            <button className="px-4 py-2.5 bg-primary flex justify-center items-center space-x-4 font-mono text-[#f6f6f6] font-medium">
              <p>Download Resume </p>
              <Download />
            </button>
            <Badge title="View Case Studies" destination="/case-studies" />
          </div>
        </div>
      </div>
      <div className="hidden justify-center items-center lg:flex">
        <Image src={Deviprasad} width={240} alt="Image of deviprasad" />
      </div>
    </div>
  );
};
