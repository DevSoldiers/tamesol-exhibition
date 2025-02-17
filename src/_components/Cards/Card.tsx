import React from 'react';
import { CardProps } from '@/_types/card.interface';
import CImageCard from './CImageCard';

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
    <article className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl duration-300 bg-gradient-to-b from-orange-50 to-orange-100 md:max-w-full md:w-[95%] transform hover:-translate-y-1 transition-transform flex flex-col">
      <div className="relative h-40 md:h-48">
        <CImageCard
          width={400}
          height={180}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          sizes=" "
          imgSrc={imageSrc}
          alt={imageAlt}
        />
      </div>

      <div className="px-4 py-3 flex-grow flex flex-col">
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

        <div className="mt-auto px-4 pb-3">
          <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-200 flex items-center justify-center gap-2"
            onClick={onButtonClick}
          >
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
