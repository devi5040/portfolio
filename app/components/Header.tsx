'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '../constants/NAV_ITEMS';

export const Header = () => {
  return (
    <div className="h-12 flex justify-between items-center p-10 border-b border-gray-800">
      <h2 className="text-primary text-2xl font-bold font-geist">
        Deviprasad.dev
      </h2>
      <nav className="flex justify-center space-x-16 items-center w-1/3">
        <ul className="flex justify-center items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <li
              className={`text-neutral font-geist hover:text-btn-hover`}
              key={item.label}
            >
              <Link href={`#${item.link}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="bg-primary text-[#f6f6f6] px-6 py-2 rounded-xl font-geist hover:bg-btn-hover duration-300">
          <Link href={'#contact-us'}>Contact Me</Link>
        </button>
      </nav>
    </div>
  );
};
