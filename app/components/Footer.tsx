import Link from 'next/link';

export const Footer = () => {
  return (
    <section className="w-full h-50 flex flex-col justify-center items-center px-10 border-t border-[#19191D]">
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <h2 className="font-bold text-2xl text-[#e9e9e9] font-geist mb-10 md:mb-0">
          Deviprasad.Dev
        </h2>
        <div className="space-x-10">
          <Link
            href={`https://github.com/devi5040`}
            className="text-neutral font-geist"
          >
            LinkedIn
          </Link>
          <Link
            href={`https://leetcode.com/u/dpraidola/`}
            className="text-neutral font-geist"
          >
            Leetcode
          </Link>
          <a
            className="text-primary underline font-geist"
            href="/resume/deviprasad-rai-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <p className="text-center font-geist text-neutral pt-10">
        &#169; Deviprasad Rai P, 2026
      </p>
    </section>
  );
};
