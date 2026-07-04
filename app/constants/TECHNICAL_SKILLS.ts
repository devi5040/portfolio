import {
  Bot,
  Braces,
  Cloud,
  Database,
  GitBranch,
  Layout,
  PhoneCall,
  Settings,
  Webhook,
} from 'lucide-react';
import { TechnicalSkills } from '../types/technical-skills.types';

export const TECHNICAL_SKILLS: TechnicalSkills[] = [
  {
    title: 'Languages',
    icon: Braces,
    subskills: ['JavaScript', 'C#', 'TypeScript', 'PHP', 'Python', 'C/C++'],
  },
  {
    title: 'Backend & APIs',
    icon: Webhook,
    subskills: [
      'Node.js',
      'Express.js',
      'REST API Design',
      'ASP.NET Core',
      'Fastify',
    ],
  },
  {
    title: 'AI / Conversational Systems',
    icon: Bot,
    subskills: [
      'Azure/OpenAI API',
      'Amazon Lex',
      'NLP',
      'IBM Watson',
      'Chatbot Development',
    ],
  },
  {
    title: 'Voice AI / Telephony',
    icon: PhoneCall,
    subskills: [
      'RetellAI',
      'ElevenLabs',
      'Twilio',
      'Whisper (STT)',
      'Conversational Design',
      'Google STT and TTS',
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    subskills: [
      'React.js',
      'Bootstrap',
      'React Native',
      'Next.js',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Databases and Storage',
    icon: Database,
    subskills: ['MySQL', 'MongoDB', 'Redis', 'Firebase'],
  },
  {
    title: 'Cloud and Infra',
    icon: Cloud,
    subskills: ['AWS', 'Azure Cloud', 'Azure DevOps'],
  },
  {
    title: 'Devops/CI-CD',
    icon: GitBranch,
    subskills: ['Git', 'GitHub', 'GitHub Actions', 'GitLab', 'Jenkins'],
  },
];
