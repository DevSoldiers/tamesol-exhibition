import React from 'react';
import Image from 'next/image';
import { CardProps } from '@/_types/card.interface';

const Card: React.FC<CardProps> = ({
  imageSrc,
  imageAlt,
  title,
  price,
  descriptionTitle,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <article className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-orange-50 to-orange-100 md:max-w-full md:w-[95%] transform hover:-translate-y-1 transition-transform">
      {/* Image Section */}
      <div className="relative h-40 md:h-48">
        <Image
          width={400}
          height={180}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-3">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl md:text-2xl mb-2 text-orange-800 font-[EthiopianJiret]">
            {title}
          </h3>
          <div className="mb-3 flex items-center text-orange-600">
            <span className="text-lg font-bold">{price}</span>
            <span className="mx-2">•</span>
          </div>
        </div>

        <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 font-[serif]">
          {descriptionTitle}
          <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
            {description?.map((content, key) => <li key={key}>{content}</li>)}
          </ul>
        </div>
      </div>

      {/* Button Section */}
      <div className="px-4 pb-3">
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-200 flex items-center justify-center gap-2"
          onClick={onButtonClick}
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </article>
  );
};

export default Card;
