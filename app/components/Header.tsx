'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '../constants/NAV_ITEMS';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [navbarVisible, setNavBarVisibility] = useState<boolean>(false);

  const openMenu = () => {
    setNavBarVisibility(true);
  };

  const closeMenu = () => {
    setNavBarVisibility(false);
  };

  useEffect(() => {
    if (navbarVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [navbarVisible]);

  return (
    <div className="w-full lg:h-12 flex justify-between items-center p-10 border-b-2 border-[#2a2a30] z-0">
      <h2 className="text-primary text-2xl font-bold font-geist">
        Deviprasad.Dev
      </h2>
      <nav className="hidden lg:flex justify-center space-x-16 items-center">
        <ul className="flex justify-center items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <li
              className={`text-neutral font-geist hover:text-btn-hover`}
              key={item.label}
            >
              <Link href={`/#${item.link}`}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className="bg-primary text-[#f6f6f6] px-6 py-2 rounded-xl font-geist hover:bg-btn-hover duration-300">
          <Link href={'https://gravatar.com/dpraidola'} target="_blank">
            Contact Me
          </Link>
        </button>
      </nav>
      <div className="lg:hidden">
        {!navbarVisible ? (
          <button onClick={openMenu}>
            <Menu className="text-neutral" />
          </button>
        ) : (
          <div className="w-full h-screen absolute top-0 left-0 bg-background p-10">
            <div className="flex justify-between items-center mb-10">
              <h2 className="font-geist text-2xl text-primary font-bold">
                Deviprasad.Dev
              </h2>
              <X className="text-neutral" onClick={closeMenu} />
            </div>
            <nav className="space-y-10">
              <ul className="space-y-5">
                {NAV_ITEMS.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/#${item.link}`}
                      className="text-neutral text-lg font-medium font-geist"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <button className="bg-primary text-[#f6f6f6] px-6 py-2 rounded-xl font-geist hover:bg-btn-hover duration-300">
                <Link href={'https://gravatar.com/dpraidola'} target="_blank">
                  Contact Me
                </Link>
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
