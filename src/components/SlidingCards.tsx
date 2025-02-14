"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

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
                ease: "power2.inOut",
            });

            tl.current?.to(
                cardsRef.current[index],
                {
                    flexGrow: 2,
                    duration: 0.5,
                    ease: "power2.inOut",
                },
                "<"
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
            ease: "power2.inOut",
        });

        gsap.to(cardsRef.current[index], {
            flexGrow: 2,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    // Handler for mouse leave events.
    const handleMouseLeave = () => {
        tl.current?.restart().play();
    };

    return (
        <article className="flex flex-col md:flex-row gap-3 h-[450px] grow p-4 overflow-hidden">
            {[0, 1, 2, 3, 4].map((index) => (
                <div
                    key={index}
                    ref={(el) => {
                        if (el) cardsRef.current[index] = el;
                    }}
                    className="w-full md:w-auto h-1/5 md:h-full text-2xl bg-blue-200 grow basis-0 rounded-lg flex items-center justify-center transition-[flex-grow] duration-300 bg-cover"
                    style={{ backgroundImage: `url('/exhibition_pics/advert_${index + 1}.jpeg')` }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                </div>
            ))}
        </article>
    );
};

export default YznanuCards;
