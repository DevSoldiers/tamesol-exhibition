'use client';

import Image from "next/image";
import Slider from "react-slick";

type PropType = {
  slides?: number[];
  options?: any;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides = [0, 1, 2], options = { infinite: true } } = props ?? {};

  const settings = {
    dots: false,
    arrows: false,
    infinite: options.infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    ...options
  };

  return (
    <section className="bg-exhibition-img bg-cover bg-fixed absolute inset-0 h-[90dvh] overflow">
      <div className="absolute inset-0 bg-transparentBrownish"></div>
      <div className="hidden lg:block h-[90dvh] bg-secondarybrand absolute right-0 bottom-0 top-0 z-10 max-w-[720px] w-full rounded-tl-[70%] rounded-bl-[150px]">
      </div>
      <Slider {...settings} className="h-full relative z-[35]">
        {slides.map((index) => (
          <div key={index} className="h-[90dvh] relative">
            <div className="bg-no-repeat h-full flex items-center justify-center">
              <div className="grid md:grid-cols-2">
                {/* left section */}
                <section className="left_side relative flex flex-col items-center justify-center h-screen bg-cover bg-center px-4 text-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight max-w-md">
                    ቢፎን ዶውረቀ ለንጥ በለጥ ወክና ኢጥም ራምዶውክ
                  </h1>
                  <div className="mt-6 flex gap-4">
                    <button className="px-6 py-2 text-black bg-white border border-black rounded-full shadow-md hover:bg-gray-200 transition">
                      Sign Up
                    </button>
                    <button className="px-6 py-2 text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition">
                      Log In
                    </button>
                  </div>
                </section>
                {/* right section */}
                <section className="right_side relative self-end hidden md:block">
                  <Image src="/headphone_girl.png" width={500} height={200} alt="advert" className="" />
                </section>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="bg-white absolute bottom-0 right-0 left-0 h-[36px] text-white rounded-tr-[40%] rounded-tl-[40%] z-[40]"></div>
    </section>
  );
};

export default EmblaCarousel;