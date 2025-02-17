'use client';

import { Button } from '@/_components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '@/i18n/routing';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const t = useTranslations();
  const navLinks = t.raw('Navbar-links');

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    gsap.set(navRef.current, {
      background:
        'linear-gradient(90deg, rgba(181, 31, 27, 0.25) 0%, rgba(242, 143, 55, 0.25) 100%)',
    });
    gsap.to(navRef.current, {
      background: '#f28f37',
      scrollTrigger: {
        trigger: navRef.current,
        start: 'top -90vh',
        end: 'top -90vh',
        toggleActions: 'play none none reverse',
      },
    });

    // Sidebar animation
    if (isOpen) {
      gsap.fromTo(
        sidebarRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.3, ease: 'power2.out' }
      );
    } else {
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power2.in',
      });
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-3 z-50 mt-6 w-full">
      <section className="w-full px-14 max-md:px-3 z-[80] relative">
        <article
          ref={navRef}
          className="main_nav_article_top bg-glass-morph-bg text-white px-4 md:px-10 py-5 max-md:py-1 rounded-full max-md:rounded-md shadow-lg mx-auto flex items-center justify-between relative max-h-[70px] transition-colors duration-200"
        >
          <Link href="/" className="relative w-[150px] h-[80px] flex items-center justify-center hover:cursor-pointer transition-transform duration-300 hover:scale-110">
            <Image
              src="/eske_fasika_logo.png"
              sizes="(min-width: 66em) 33vw, (min-width: 44em) 50vw,100vw"
              fill
              alt="Eske Fasika Logo"
              className="absolute top-0 max-md:w-32"
              priority
            />
          </Link>
          <div className="hidden lg:flex space-x-6 text-gray-300 items-center">
            {navLinks.map((link: { src: string; label: string }) => (
              <Link href={link.src} className="navbar-links" key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
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

      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 right-0 bg-white h-full w-64 shadow-lg z-[100] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6">
          {/* Hamburger Menu on Sidebar */}
          <button
            className="relative w-10 h-10 flex flex-col justify-center items-center gap-1 mb-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-8 h-1 bg-black rounded block transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-8 h-1 bg-black rounded block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            ></span>
            <span
              className={`w-8 h-1 bg-black rounded block transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            {navLinks.map((link: { src: string; label: string }) => (
              <Link
                href={link.src}
                key={link.label}
                className="text-black hover:text-[#f7a838]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col space-y-4">
            <Button className="bg-white border-[1px] border-[#9D4F09] rounded-3xl px-8 py-[18px] box-border text-[#9D4F09] hover:bg-[#e7e3dd9c]">
              Sign Up
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-[1px] border-[#9D4F09] rounded-3xl px-8 py-[18px] box-border text-[#9D4F09] hover:bg-[#9d4e09c2]"
            >
              Sign In
            </Button>
          </div>
        </div>
      </aside>
    </nav>
  );
}
