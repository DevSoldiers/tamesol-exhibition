'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations();
  const navLinks = t.raw('Navbar-links');

  // Handle body overflow when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  // Handle clicks outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && menuButtonRef.current) {
        const isOutsideSidebar = !sidebarRef.current.contains(event.target as Node);
        const isOutsideMenuButton = !menuButtonRef.current.contains(event.target as Node);

        if (isOutsideSidebar && isOutsideMenuButton) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav>
      <section className="w-full px-14 max-md:px-3 py-8 z-40 relative">
        <article className="bg-brand-gradient-var1 text-white px-4 md:px-10 py-5 max-md:py-1 rounded-full max-md:rounded-md shadow-lg mx-auto flex items-center justify-between relative max-h-[70px]">
          {/* Logo */}
          <div className="relative w-[150px] h-[80px] flex items-center justify-center hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            <Image
              src="/eske_fasika_logo.png"
              width={150}
              height={120}
              alt="Eske Fasika Logo"
              className="absolute top-0 max-md:w-32"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 text-gray-300 items-center">
            {navLinks.map((link: { label: string; src: string }) => (
              <Link href={link.src} className="navbar-links" key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex space-x-2">
            <Button variant="secondary" className="bg-white text-black px-4">
              Sign Up
            </Button>
            <Button variant="outline" className="bg-white text-black px-4">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-8 h-1 bg-white rounded block transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-8 h-1 bg-white rounded block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`w-8 h-1 bg-white rounded block transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>
        </article>
      </section>

      {/* Mobile Menu */}
      <div
        ref={sidebarRef}
        className={`absolute bg-orange-200 h-screen top-0 right-0 w-1/2 z-50 px-10 pt-24 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Close Button */}
        <button
          className="absolute top-3 right-3 w-10 h-10 flex flex-col justify-center items-center gap-1"
          onClick={() => setIsOpen(false)}
        >
          <span className="w-8 h-1 bg-white rounded block rotate-45 translate-y-2 transition-transform duration-300"></span>
          <span className="w-8 h-1 bg-white rounded block opacity-0"></span>
          <span className="w-8 h-1 bg-white rounded block -rotate-45 -translate-y-2 transition-transform duration-300"></span>
        </button>

        {/* Mobile Menu Links */}
        <div className="flex flex-col space-y-6 mt-8">
          {navLinks.map((link: { label: string; src: string }) => (
            <Link
              href={link.src}
              key={link.label}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-white text-lg font-medium transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col space-y-4 mt-12">
          <Button variant="secondary" className="bg-white text-black w-full py-4 hover:bg-gray-100">
            Sign Up
          </Button>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white w-full py-4 hover:bg-white/10"
          >
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
}
