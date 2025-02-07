'use client'; // Required for Next.js app router

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

export default function HeroRight() {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { x: 0, rotate: 0 },
      {
        x: 5,
        rotate: 15,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: 'power1.inOut',
      }
    );
  }, []);

  return (
    <div className="absolute right-24 bottom-0">
      <Image
        src="/headphone_girl.png"
        width={600}
        height={200}
        alt="girl on headphone"
        className=""
      />
    </div>
  );
}
