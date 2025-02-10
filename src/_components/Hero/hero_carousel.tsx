'use client';
import '../../_styles/carousel.css';

import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay'

type PropType = {
  slides?: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides = [0, 1, 2], options = { loop: true } } = props ?? {};
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <section className="embla bg-orange-200 absolute inset-0 h-[90dvh]">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            // <div className="embla__slide bg-top-header-bg bg-no-repeat" key={index}>
            <div className="embla__slide bg-no-repeat" key={index}>
              {/* <div className="bg-violet-200 absolute z-50 inset-0">Slider</div> */}
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white absolute bottom-0 right-0 left-0 h-[36px] text-white rounded-tr-[40%] rounded-tl-[40%]"></div>
    </section>
  );
};

export default EmblaCarousel;
