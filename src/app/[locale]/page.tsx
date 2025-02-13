import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EmblaCarousel from '@/_components/Hero/hero_carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import YznanuCards from '@/components/SlidingCards';
import ClientsCarousel from '@/components/Sliding_Clients';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';

export default function Home() {
  // const t = useTranslations('HomePage');
  /* Frame 44 */

  return (
    <main className="">
      <section className="h-[90dvh]">
        {/* <div className="hidden lg:block h-[90dvh] bg-yellow-200 absolute right-0 bottom-0 top-0 z-10 max-w-[720px] w-full rounded-tl-[70%] rounded-bl-[150px]">
        </div> */}
        <EmblaCarousel />
      </section>
      {/* card section */}
      <section className="px-3 md:px-14 main_card_wrapper flex flex-col gap-4 -mt-20">
        <p className="font-bold text-xl">አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች</p>
        <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {Array(3)
            .fill(0)
            .map((_, key) => (
              <article
                className="max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-b from-orange-50 to-orange-100 md:max-w-full md:w-[95%] transform hover:-translate-y-1 transition-transform"
                key={key}
              >
                <div className="relative h-40 md:h-48">
                  <Image
                    width={400}
                    height={180}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    src="/hero_exhibition_placeholder.jpeg"
                    alt="Exhibition preview"
                  />
                </div>

                <div className="px-4 py-3">
                  <article className="flex justify-between">

                    <h3 className="font-bold text-xl md:text-2xl mb-2 text-orange-800 font-[EthiopianJiret]">
                      አዲስ ነገር ኤክስፖ
                    </h3>

                    <div className="mb-3 flex items-center text-orange-600">
                      <span className="text-lg font-bold">100 ብር</span>
                      <span className="mx-2">•</span>
                    </div>

                  </article>
                  <div className="text-gray-700 text-sm md:text-base leading-relaxed mb-3 font-[serif]">
                    የአዲስ ነገር ኤክስፖን የመግቢያ ትኬት ቀድሞ 100 ብር ብቻ! በልዩ ይዘቶች፡
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-xs md:text-sm">
                      <li>የመዝናኛ እና ግብር መንደሮች</li>
                      <li>አዳዲስ መኪና ሽልማት</li>
                      <li>ዕለታዊ ርቃፅ ሽልማቶች</li>
                    </ul>
                  </div>
                </div>

                <div className="px-4 pb-3">
                  <Button
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 md:py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-200 flex items-center justify-center gap-2"
                  >
                    <span>ትኬትዎን ይቁረጡ</span>
                  </Button>
                </div>
              </article>

            ))}
        </article>
      </section>
      {/* eyeteznanu yshemtu section */}
      <section className="yznanu_yshemtu_section px-3 md:px-14 mt-5 flex flex-col gap-4 bg-[rgb(247,168,56)] md:text-[64px] py-7 md:py-[80px]">
        <p className="mb-3 text-white p-0 text-3xl text-center">እየተዝናኑ ይሸምቱ!</p>
        <div className="ygobgnu_wrapper flex flex-col md:flex-row gap-5 justify-between">
          <article className="w-full max-h-[400px] h bg-exhibition-img rounded-md">
            <video width="100%" height="150%" autoPlay loop playsInline muted>
              <source src="/expolanding.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </article>
          <article className="w-full h-[400px] bg-violet-500 rounded-md bg-exhibition-img bg-cover"></article>
        </div>
      </section>

      <section className="yznanu_yshemtu_section px-3 md:px-14 flex flex-col gap-4 bg-[rgb(247,168,56)] md:text-[64px] py-4 md:py-[80px]">
        <p className="mb-3 text-white p-0 text-3xl text-center md:text-left">እየተዝናኑ ይሸምቱ!</p>
        <YznanuCards />
      </section>

      {/* aqrabi drjtoch */}
      <section className="aqrabi_drjtoch_section px-3 md:px-14 flex flex-col gap-4 bg-[rgb(247,168,56)] md:text-[64px] py-4 md:py-[80px]">
        <p className="mb-3 text-white p-0 text-3xl text-center md:text-left">አቅራቢ ድርጅቶች</p>
        <article className="flex flex-wrap justify-center gap-6 p-6 bg-white rounded-md">
          <Image
            src="/supplier_logos/lyan.svg"
            width={200}
            height={200}
            alt="company logos"
            className="w-32 sm:w-40 md:w-48 lg:w-52"
          />
          <Image
            src="/supplier_logos/Tamcon_Solutions_Logo.png"
            width={200}
            height={200}
            alt="company logos"
            className="w-32 sm:w-40 md:w-48 lg:w-52"
          />
          <Image
            src="/supplier_logos/Tamesol_Communications_Logo.png"
            width={200}
            height={200}
            alt="company logos"
            className="w-32 sm:w-40 md:w-48 lg:w-52"
          />
        </article>
      </section>

      {/* megbya ticketoch */}
      <section className="megbya_ticketoch px-3 md:px-14 flex flex-col gap-4 bg-[rgb(247,168,56)] md:text-[64px] py-4 md:py-[80px]">
        <p className="mb-3 text-white p-0 text-3xl text-center md:text-left">አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች</p>
        <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {Array(3)
            .fill(0)
            .map((_, key) => (
              <article className="max-w-sm rounded overflow-hidden shadow-lg bg-orange-200 md:max-w-full md:w-[95%]" key={key}>
                <Image
                  width={200}
                  height={200}
                  className="w-full"
                  src="/hero_exhibition_placeholder.jpeg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    <p>አዲስ ነገር ኤክስፖ</p>
                  </div>
                  <p className="text-gray-700 text-base">
                    የአዲስ ነገር ኤክስፖን የመግቢያ ትኬት ቀድመዉ 100 ብር ብቻ ! በመግዛት የልዩ ቅናሽ ተጠቃሚ ይሁኑ፡፡ አዲስ ነገር ኤክስፖ
                    በዉስጡ የተለያዩ የሽመታ፣ የመዝናኛ፣ የምግብ እና መጠጥ፣ የጤና እና ዉበት፣ የቢዝነስ እና ሪልእስቴት መንደሮችን የያዘ ሲሆን
                    የአዲስ መኪና ሽልማት እንዲሁም በየቀኑ አዳዲስ ልዩ ሽልማቶች አሉት ፡፡ እርስዎ እድለኛ ቢሆኑስ ?{' '}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <Button className="text-white px-4 py-5 bg-[#f59c38]">ትኬትዎን ይቁረጡ</Button>
                </div>
              </article>
            ))}
        </article>
      </section>

      {/* sliding clients */}
      <section className="yznanu_yshemtu_section px-3 md:px-14 flex flex-col gap-4 bg-[rgb(247,168,56)] md:text-[64px] py-4 md:py-[80px]">
        <ClientsCarousel />
      </section>
    </main>
  );
}
