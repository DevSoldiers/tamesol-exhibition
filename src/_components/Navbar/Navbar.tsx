'use client';

import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Navbar() {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const maxRotation = 15;

  useEffect(() => {
    const container = imageContainerRef.current;

    if (container) {
      gsap.set(container, { transformPerspective: 800 });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = container.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        let deltaX = (clientX - centerX) / 25;
        let deltaY = (clientY - centerY) / 25;

        deltaX = Math.max(-maxRotation, Math.min(maxRotation, deltaX));
        deltaY = Math.max(-maxRotation, Math.min(maxRotation, deltaY));

        gsap.to(container, {
          rotationY: deltaX,
          rotationX: -deltaY,
          scale: 1.1,
          ease: 'power2.out',
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(container, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          ease: 'power2.out',
          duration: 0.5,
        });
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <nav className="bg-brand-gradient-var1 text-white px-4 md:px-10 py-5 rounded-full shadow-lg max-w-[1480px] mx-auto flex items-center justify-between relative max-h-[70px]">
      {/* Logo */}
      <div
        className="relative w-[150px] h-[80px] flex items-center justify-center hover:cursor-pointer"
        ref={imageContainerRef}
      >
        <Image
          src="/eske_fasika_logo.png"
          width={150}
          height={120}
          alt="Eske Fasika Logo"
          className="absolute top-0 transition-transform duration-300"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-gray-300 items-center">
        <a href="#" className="navbar-links">
          Home
        </a>
        <a href="#" className="navbar-links">
          About Us
        </a>
        <a href="#" className="navbar-links">
          Services
        </a>
        <a href="#" className="navbar-links">
          Features
        </a>
        <a href="#" className="navbar-links">
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-2">
        <Button variant="secondary" className="bg-white text-black px-4">
          Sign Up
        </Button>
        <Button variant="outline" className="bg-white text-black px-4">
          Sign In
        </Button>
      </div>
    </nav>
  );
}
