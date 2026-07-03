import { ProfessionalExperience } from '../types/profession-experience.types';

export const PROFESSIONAL_EXPERIENCES: ProfessionalExperience[] = [
  {
    title: 'Software Development Engineer',
    company: 'Clear Cloud Technologies Pvt Ltd',
    period: 'Jul 2025 - Present',
    points: [
      'Led a 3-engineer team building an AI-integrated appointment scheduling platform from architecture to production.',
      'Built LLM-powered features — smart recommendations and automated responses — directly into the core booking flow.',
      'Shipped the companion Android app in React Native with offline-capable data persistence.',
    ],
  },
  {
    title: 'Software Development Engineer',
    company: 'Streebo',
    period: 'Jan 2024 - Feb 2025',
    points: [
      'Built AI-driven chatbot systems spanning voice, SMS, WhatsApp, email, and Facebook for enterprise clients like Panda Restaurant Group and the City of Markham.',
      'Integrated GPT-based interaction layers and voice APIs (RetellAI, ElevenLabs, Twilio) behind clean service abstractions.',
      'Built conversational flows using multiple NLP engines, with data crawling and vector/cognitive search behind them.',
    ],
  },
  {
    title: 'Application Developer Intern',
    company: 'Accolade Tech Solutions',
    period: 'Aug 2023 - Sep 2023',
    points: [
      "Designed and built 'Canteen Connect' a full-stack Android food-ordering app with a companion web admin panel.",
      'Owned the complete flow — ordering, menu management, real-time admin control — as a solo build.',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Klientship Technologies',
    period: 'Mar 2023 - Jun 2023',
    points: [
      'Built responsive, SEO-optimized client websites across React.js, WordPress, and Shopify for brands like Diamond Books and Brokekicks.',
      "Adapted to each client's platform and stack rather than working from one fixed toolset.",
    ],
  },
];
