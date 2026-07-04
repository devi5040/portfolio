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
    title: 'AI/NLP',
    icon: Bot,
    subskills: [
      'Azure/OpenAI API',
      'NLP',
      'Amazon Lex',
      'IBM Watson',
      'Chatbot Development',
    ],
  },
  {
    title: 'Voice AI / Telephony',
    icon: PhoneCall,
    subskills: [
      'Whisper',
      'Twilio',
      'ElevenLabs',
      'RetellAI',
      'Google STT and TTS',
    ],
  },
  {
    title: 'Frontend',
    icon: Layout,
    subskills: ['React.js', 'React Native', 'Next.js', 'Tailwind CSS'],
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
    subskills: ['Git', 'GitHub', 'Gitlab', 'GitHub Actions', 'Jenkins'],
  },
];
