'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Slider from 'react-slick';
import CImageCard from '@/_components/Cards/CImageCard';

const YznanuCards: React.FC = () => {
  // Use a ref to store an array of HTMLDivElement references.
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!cardsRef.current.length) return;

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

    return () => {
      tl.current?.kill();
    };
  }, []);

  // Handler for mouse enter events.
  const handleMouseEnter = (index: number) => {
    tl.current?.pause();

    gsap.to(cardsRef.current, {
      flexGrow: 1,
      duration: 0.3,
      ease: 'power2.inOut',
    });

    gsap.to(cardsRef.current[index], {
      flexGrow: 2,
      duration: 0.3,
      ease: 'power2.inOut',
    });
  };

  // Handler for mouse leave events.
  const handleMouseLeave = () => {
    tl.current?.restart().play();
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const url = 'https://res.cloudinary.com/dzsa1ehta/image/upload';

  return (
    <>
      <article className="hidden md:flex flex-col md:flex-row gap-3 h-[450px] grow p-4 overflow-hidden">
        {[0, 1, 2, 3, 4].map((index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="w-full md:w-auto h-[1/5] md:h-full text-2xl bg-blue-200 grow basis-0 rounded-lg flex items-center justify-center transition-[flex-grow] duration-300 bg-cover"
            style={{ backgroundImage: `url(${url}/advert_${index + 1}.png)` }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </article>
      {/** Hide on large screens */}
      <div className="block md:hidden">
        <Slider {...settings} className="h-full relative z-[35] w-full">
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className="flex justify-center items-center p-2">
              <CImageCard
                width={2000}
                height={200}
                imgSrc={`advert_${index + 1}`}
                alt="Addis Neger Exhibition Ad Pics"
                className="w-full h-[400px] rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default YznanuCards;
