import type { Metadata } from 'next';
import { Geist_Mono, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Deviprasad Rai P | Software Engineer | Backend & AI Engineer',
  description:
    'Software Engineer with 2+ years of experience building scalable backend systems and AI-powered applications using C#, ASP.NET Core, Node.js, TypeScript, Python, AWS, Azure OpenAI, and modern cloud technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${geistMono.variable} ${jetBrainsMono.variable} h-full bg-background`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
