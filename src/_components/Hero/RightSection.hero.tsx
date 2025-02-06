"use client"; // Required for Next.js app router

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaArrowsUpDownLeftRight } from "react-icons/fa6";

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
                ease: "power1.inOut",
            }
        );
    }, []);

    return (
        <div className="relative p-10 rounded-[30px] shadow-lg border border-gray-600/30 backdrop-blur-[1.2px] max-w-lg">
            {/* Arrow Button */}
            <div className="absolute top-5 right-5">
                <button className="bg-lime-400 w-10 h-10 flex items-center justify-center rounded-full">
                    <FaArrowsUpDownLeftRight ref={arrowRef} className="text-gray-900 text-lg" />
                </button>
            </div>

            {/* Text Content */}
            <h2 className="text-white text-3xl font-bold">
                Your Partner in Business Growth
            </h2>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                From innovative marketing strategies to operational excellence, we
                provide expert solutions.
            </p>

            {/* Client Count */}
            <div className="mt-6 flex items-center gap-2">
                <div className="flex space-x-2">
                    <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                    <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                </div>
                <div className="bg-lime-400 text-gray-900 text-sm font-semibold px-4 py-1 rounded-lg">
                    100K+ Our Clients Here
                </div>
            </div>
        </div>
    );
}