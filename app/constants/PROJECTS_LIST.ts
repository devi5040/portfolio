import { ProjectsList } from '../types/projects-list.types';
import Restaurant from '@/public/restaurant.png';
import Scaffinity from '@/public/scaffinity.png';
import SmartPanchayat from '@/public/smart-panchayat.png';
import Infostore from '@/public/infostore.png';
import JuiceTalkies from '@/public/juice-talkies.png';

export const PROJECTS_LIST: ProjectsList[] = [
  {
    title: 'Restaurant Booking System',
    description:
      'A voice AI agent that takes restaurant reservations over real phone calls. Led a team of 3 to build the full system: Twilio telephony, OpenAI Whisper (STT), GPT, and TTS for the speech pipeline, plus a .NET 8 backend and Next.js dashboard for staff to manage bookings and call logs',
    techStack: ['OpenAI', '.Net core', 'NextJs'],
    imagePath: Restaurant,
  },
  {
    title: 'Scaffinity',
    description:
      'A zero-dependency CLI tool that scaffolds project structures from reusable blueprints, published on npm. Built with Commander.js, fs-extra, and chalk for a clean developer experience. Open-source, actively maintained, with full contributor docs (LICENSE, CONTRIBUTING, CODE_OF_CONDUCT)',
    techStack: ['TypeScript', 'Commander.js', 'NodeJs'],
    repo: 'https://github.com/devi5040/scaffinity',
    imagePath: Scaffinity,
  },
  {
    title: 'Smart Panchayat',
    description:
      'A rural governance & commerce platform with a Node.js/Express backend and Next.js admin dashboard. Uses Sequelize ORM for data modeling, Firebase mobile-OTP auth, and supports shops, products, orders, and shipment management.',
    techStack: ['NodeJs', 'NextJs', 'Firebase Auth'],
    imagePath: SmartPanchayat,
  },
  {
    title: 'Juice Talkies',
    description:
      'A mobile app for discovering and reviewing dining experiences, built with Expo (React Native) and a Node.js/Express backend. Users can browse menus, check ratings and reviews, and order their favorite meals — all from a single, easy-to-use mobile interface.',
    techStack: ['NodeJs', 'NextJs', 'Cloudflare'],
    imagePath: JuiceTalkies,
    repo: 'https://github.com/devi5040/Juice_Talkies_mobileapp',
  },
  {
    title: 'Infostore',
    description:
      'A full-stack MERN app for securely storing and managing personal documents and data across devices. Uses Passport.js for authentication, a clean UI for organizing and retrieving information, and scalable backend APIs built with Node.js, Express, and MongoDB.',
    techStack: ['MERN Stack', 'Tailwind CSS'],
    imagePath: Infostore,
    repo: 'https://github.com/devi5040/Infostore-Project',
  },
];
