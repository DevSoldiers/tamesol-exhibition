"use client";

import api from '@/lib/services.api';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';

interface OtpFormValues {
    otp: string[];
}

export default function OtpVerificationPage() {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const [message, setMessage] = useState<string>('');

    // Formik setup
    const formik = useFormik<OtpFormValues>({
        initialValues: {
            otp: ['', '', '', ''],
        },
        validationSchema: Yup.object({
            otp: Yup.array()
                .of(Yup.string().matches(/^[0-9]$/, 'Must be a single digit'))
                .length(4, 'OTP must be 4 digits'),
        }),
        onSubmit: async (values) => {
            try {
                const otp = values.otp.join('');
                if (otp.length) {
                    const response = await api.post(`/otp/sendOtp?confirmotp=${otp}`);
                    if (response.data) {
                        setMessage('OTP verified successfully!');
                    } else {
                        setMessage('Invalid OTP. Please try again.');
                    }
                } else {
                    setMessage("Please input OTP to contiue")
                }
            } catch (error) {
                setMessage('An error occurred. Please try again.');
            }
        },
    });

    // Handle input change and auto-focus to the next box
    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length <= 1) {
            formik.setFieldValue(`otp[${index}]`, value);
            if (value && index < 3) {
                inputRefs.current[index + 1]?.focus(); // Move to the next input box
            }
        }
    };

    // Handle backspace to move to the previous box
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && !formik.values.otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus(); // Move to the previous input box
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f28f37] to-[#f7a838]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                <h1 className="text-2xl font-bold text-center text-[#f28f37] mb-6">OTP Verification</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex justify-center space-x-4 mb-6">
                        {[0, 1, 2, 3].map((index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={formik.values.otp[index]}
                                onChange={(e) => handleInputChange(index, e)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                ref={(el) => {
                                    if (el) {
                                        inputRefs.current[index] = el;
                                    }
                                }}
                                className={`w-12 h-12 text-center text-2xl border ${Array.isArray(formik.touched.otp) && formik.touched.otp[index] && formik.errors.otp?.[index]
                                    ? 'border-[#b51f1b]'
                                    : 'border-gray-300'
                                    } rounded-md shadow-sm focus:outline-none focus:ring-[#f28f37] focus:border-[#f28f37]`}
                            />
                        ))}
                    </div>
                    {formik.errors.otp && formik.touched.otp && (
                        <p className="text-sm text-[#b51f1b] text-center mb-4">{formik.errors.otp}</p>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-[#f28f37] text-white py-2 px-4 rounded-md hover:bg-[#f7a8389c] focus:outline-none focus:ring-2 focus:ring-[#f28f37] focus:ring-offset-2"
                    >
                        Verify OTP
                    </button>
                    {message && (
                        <p className={`mt-4 text-center ${message.includes('successfully') ? 'text-green-600' : 'text-[#b51f1b]'
                            }`}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}