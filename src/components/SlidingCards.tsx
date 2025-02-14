'use client';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const YznanuCards: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  // Check if the screen is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for md in TailwindCSS
    };

    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!cardsRef.current.length) return;

    // Clear existing timeline
    if (tl.current) tl.current.kill();

    if (!isMobile) {
      // Large screen animation (same as before)
      gsap.set(cardsRef.current[0], { flexGrow: 2 });
      gsap.set(cardsRef.current.slice(1), { flexGrow: 1 });

      tl.current = gsap.timeline({ repeat: -1, paused: true });
      cardsRef.current.forEach((_, index) => {
        tl.current?.to(cardsRef.current, {
          flexGrow: 1,
          duration: 0.5,
          ease: 'power2.inOut',
        });

        tl.current?.to(
          cardsRef.current[index],
          {
            flexGrow: 2,
            duration: 0.5,
            ease: 'power2.inOut',
          },
          '<'
        );

        tl.current?.to({}, { duration: 2 });
      });

      tl.current.play();
    } else {
      // Mobile stacking effect
      gsap.set(cardsRef.current, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 0,
      });

      let lastScrollY = window.scrollY;
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const direction = scrollY > lastScrollY ? 1 : -1; // 1 for down, -1 for up
        lastScrollY = scrollY;

        cardsRef.current.forEach((card, index) => {
          gsap.to(card, {
            zIndex: direction > 0 ? index + 1 : Math.max(0, index - 1),
            duration: 0.5,
            ease: 'power2.inOut',
          });
        });
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  return (
    <article className="relative md:flex md:flex-row gap-3 h-[450px] grow p-4 overflow-hidden">
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) cardsRef.current[index] = el;
          }}
          className="w-full md:w-auto h-full md:h-full text-2xl bg-blue-200 grow basis-0 rounded-lg flex items-center justify-center transition-all duration-300 bg-cover bg-center"
          style={{ backgroundImage: `url('/exhibition_pics/advert_${index + 1}.jpeg')` }}
        ></div>
      ))}
    </article>
  );
};

export default YznanuCards;
