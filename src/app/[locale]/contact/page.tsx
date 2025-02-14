import React from "react";

export default function ContactUs() {
    return (
        <div className="mt-[-95px] pt-32 min-h-screen bg-gradient-to-r from-[#f28f37] to-[#f7a838] flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
                {/* Left Section - Contact Information */}
                <div className="bg-[#9D4F09] p-8 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6">ተጨማሪ መረጃ</h2>
                    <div className="space-y-4">
                        {/* Location */}
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 mr-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <p>@Bole, Mega BLG. 3rd floor Office #301</p>
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 mr-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <p>exhibition@gmail.com</p>
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 mr-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <p>exhibition phone number</p>
                        </div>

                        {/* Facebook */}
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-6 mr-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                            <a
                                href="https://facebook.com/tamesolCommunication"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                tamesolCommunication
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="p-8">
                    <h2 className="text-3xl font-bold text-[#9D4F09] mb-6">ለእርስዎ እንዴት እንደምንረዳዎት</h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                ስም
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#9D4F09] focus:border-[#9D4F09]"
                                placeholder="ስምዎን ያስገቡ"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                ኢሜይል
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#9D4F09] focus:border-[#9D4F09]"
                                placeholder="ኢሜይልዎን ያስገቡ"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                መልእክት
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#9D4F09] focus:border-[#9D4F09]"
                                placeholder="መልእክትዎን ያስገቡ"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#9D4F09] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b51f1b] transition-colors"
                            >
                                መልእክት ላክ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}