'use client';

import { useTranslations } from 'next-intl';
import Slider from 'react-slick';
import CarouselCard from './Carousel_Card';
import { IHeroContent } from '@/_types/content.interface';

const EmblaCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const t = useTranslations();
  const heroSectionContent = t.raw('HeroSection');

  return (
    <section className="px-3 md:px-14 bg-exhibition-img bg-cover bg-fixed absolute inset-0 h-[90dvh] overflow">
      <div className="absolute inset-0 overflow-hidden">
        <video
          width="100%"
          height="50%"
          autoPlay
          loop
          playsInline
          muted
          className="max-md:position-absolute max-md:top-[150px]"
        >
          <source src="/expo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-transparentBrownish"></div>
      <div className="hidden lg:block h-[90dvh] bg-transparentSecondaryBrand absolute right-0 bottom-0 top-0 z-10 max-w-[720px] w-full rounded-tl-[70%] rounded-bl-[25%]"></div>
      <Slider {...settings} className="h-full relative z-[35]">
        {heroSectionContent.map((content: IHeroContent, index: string) => (
          <CarouselCard
            title={content.title}
            subTitle={content.subTitle}
            signUp={content.signUp}
            login={content.logIn}
            key={index}
            imgSrc={content.imgSrc ?? ''}
          />
        ))}
      </Slider>
      <div className="bg-white absolute bottom-0 right-0 left-0 h-[36px] text-white rounded-tr-[40%] rounded-tl-[40%] z-[40]"></div>
    </section>
  );
};

export default EmblaCarousel;
