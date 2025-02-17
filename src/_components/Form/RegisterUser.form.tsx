"use client";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import RegisterForm from "./UserForm";
import OtpVerificationPage from "./ConfirmOtp";
import { AppContext, AppProvider } from "@/lib/context/userform.context";

const RegisterUserForm = () => {
    const { state } = useContext(AppContext);
    const cardRef = useRef(null);
    const isFlipped = useRef(false);
    const { flipped } = state ?? {};

    const handleFlip = () => {
        const card = cardRef.current;
        if (isFlipped.current) {
            gsap.to(card, { rotationY: 0, duration: 0.5 });
        } else {
            gsap.to(card, { rotationY: 180, duration: 0.5 });
        }
        isFlipped.current = !isFlipped.current;
    };

    useEffect(() => { flipped && handleFlip(); }, [flipped]);

    return (
        <AppProvider>
            <div className="flip-card w-full flex items-center justify-center min-h-screen bg-gray-100 -mt-24">
                <div className="relative perspective w-full">
                    <div
                        ref={cardRef}
                        className="relative w-full h-full transition-transform duration-500 transform-style-3d"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Front Side */}
                        <div className="absolute w-full h-full bg-white border border-gray-200 rounded-lg shadow-lg flex items-center justify-center"
                            style={{ backfaceVisibility: "hidden" }}>
                            <RegisterForm />
                        </div>
                        {/* Back Side */}
                        <div className="absolute w-full h-full bg-yellow-200 border border-gray-200 rounded-lg shadow-lg flex items-center justify-center"
                            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}>
                            <OtpVerificationPage />
                        </div>
                    </div>
                    <button
                        onClick={handleFlip}
                        className="absolute top-0 right-0 mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
                    >
                        Flip
                    </button>
                </div>
            </div>
        </AppProvider>
    );
};

export default RegisterUserForm;
