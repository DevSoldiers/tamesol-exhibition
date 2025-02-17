'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function HowToParticipate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const t = useTranslations('how_to_participate');

  return (
    <>
      <article className="flex items-center justify-center py-10 bg-gradient-to-r px-4 md:px-0">
        <div className="relative bg-white shadow-2xl rounded-2xl border-2 border-purple-300 max-w-4xl w-full p-8 md:p-12 transform transition-transform">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-200 rounded-tr-full opacity-50"></div>

          {/* Content Section */}
          <div className="text-center md:text-left">
            <h1 className="text-BroadcastChannel text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              {t('title')}
            </h1>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mt-6">
              {t('description')}
            </p>
            {/* Call-to-Action Button */}
            <div className="mt-8">
              <button
                onClick={openModal}
                className="bg-BroadcastChannel text-white px-8 py-3 rounded-lg font-semibold hover:bg-transparentBrownish transition-colors"
              >
                {t('read_more')}
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full mx-4 relative flex flex-col max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>

            {/* Modal Content */}
            <h2 className="text-BroadcastChannel text-2xl font-bold mb-4">{t('more_info')}</h2>
            <p className="text-gray-800 text-lg leading-relaxed">{t('more_description')}</p>
          </div>
        </div>
      )}
    </>
  );
}
