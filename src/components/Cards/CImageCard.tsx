'use client';

import { CldImage } from 'next-cloudinary';

export default function CImageCard({
  imgSrc,
  alt,
  width,
  height,
  className,
  sizes,
  priority,
  fill,
}: {
  imgSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fill?: boolean;
}) {
  return (
    <CldImage
      {...(fill ? { fill: true } : { width: width || 900, height: height || 200 })}
      src={imgSrc || 'advert_1'}
      sizes={sizes || '100vw'}
      alt={alt || 'Description of my image'}
      className={className || 'scale-110'}
      priority={priority || false}
    />
  );
}
