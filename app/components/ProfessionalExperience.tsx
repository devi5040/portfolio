'use client';

import { PROFESSIONAL_EXPERIENCES } from '../constants/PROFESSIONAL_EXPERIENCE';
import { ExperienceCard } from '@/app/components/ui';
import { motion, useScroll } from 'framer-motion';
import { Briefcase, Server } from 'lucide-react';

export const ProfessionalExperience = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section className="text-[#f6f6f6] py-20 px-10 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16  space-y-10"
      >
        <h2 className="text-4xl font-bold font-geist">Professional Journey</h2>
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-neutral -translate-x-1/2" />
            {PROFESSIONAL_EXPERIENCES.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 == 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className="absolute -left-2.5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <Server className="w-4 h-4 text-primary" />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ExperienceCard
                    title={item.title}
                    company={item.company}
                    period={item.period}
                    points={item.points}
                    index={index}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
