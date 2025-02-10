'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const t = useTranslations();
  const navLinks = t.raw('Navbar-links');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <nav className="sticky top-3 z-50 mt-6 w-full">
      <section className="w-full px-14 max-md:px-3 z-40 relative">
        <article className="bg-glass-morph-bg text-white px-4 md:px-10 py-5 max-md:py-1 rounded-full max-md:rounded-md shadow-lg mx-auto flex items-center justify-between relative max-h-[70px]">
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
            <Button className="bg-white border-[1px] border-black rounded-3xl px-8 py-[18px] box-border text-black">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[1px] border-black rounded-3xl px-8 py-[18px] box-border"
            >
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
      {/* mobile menue */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-glass-morph-bg text-white p-6 transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={menuButtonRef}
            className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 lg:hidden"
            onClick={() => setIsOpen(false)}
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
          {navLinks.map((link: { label: string; src: string }) => (
            <Link href={link.src} className="block py-2" key={link.label}>
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col space-y-2">
            <Button className="bg-white border-[1px] border-black rounded-3xl px-8 py-[18px] box-border text-black">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[1px] border-black rounded-3xl px-8 py-[18px] box-border"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
