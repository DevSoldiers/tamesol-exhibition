'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

export default function ClientsCarousel() {
  const slides = [
    'airlines.svg',
    'carter_center.svg',
    'cbe.svg',
    'dkt.svg',
    'Dstv.svg',
    'ethics_anti_corruption.svg',
    'ethiotelecom.svg',
    'fdre_representative.svg',
    'finance_office.svg',
    'innovation_technology.svg',
    'Ipas.svg',
    'ketema_lmat_betoch.svg',
    'kine_tibeb.svg',
    'mayor_office.svg',
    'meta_birr.svg',
    'midroc.svg',
    'mie_Ethiopia.svg',
    'ministry_education.svg',
  ];

  const slides2 = [
    'ministry_foreign_affairs.svg',
    'ministry_of_health.svg',
    'ministry_of_revenues.svg',
    'ministry_justice.svg',
    'national_lottery.svg',
    'pepsi.svg',
    'pm_office.svg',
    'ride.svg',
    'st_george.svg',
    'transport_minister.svg',
    'tourism_minister.svg',
    'unfpa.svg',
    'world_vision.svg',
  ];

  // Group slides alternatively into sets of 4 and 3
  const groupedSlides = [];
  let i = 0;
  while (i < slides.length) {
    groupedSlides.push(slides.slice(i, i + 4)); // Group of 4
    i += 4;
    if (i < slides.length) {
      groupedSlides.push(slides.slice(i, i + 3)); // Group of 3
      i += 3;
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    centerMode: true,
    pauseOnFocus: true,
    cssEase: 'linear',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="w-full">
        {slides?.map((item, key) => (
          <div key={key} className="">
            <Image width={200} height={200} src={`/clients/${item}`} alt="logo image" />
          </div>
        ))}
      </Slider>
      <Slider {...settings3} className="w-full">
        {slides2?.map((item, key) => (
          <div key={key} className="">
            <Image width={200} height={200} src={`/clients/${item}`} alt="logo image" />
          </div>
        ))}
      </Slider>
    </>
  );
}
