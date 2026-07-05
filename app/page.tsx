import {
  Footer,
  Header,
  Hero,
  ProfessionalExperience,
  Projects,
  TechnicalExperience,
} from '@/app/components';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProfessionalExperience />
      <Projects />
      <TechnicalExperience />
      <Footer />
    </div>
  );
}
