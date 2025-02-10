import EmblaCarousel from '@/_components/Hero/hero_carousel';
import Navbar from '@/_components/Navbar/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';

export default function Home() {
  // const t = useTranslations('HomePage');
  /* Frame 44 */

  return (
    <main className="">
      <Navbar />
      <section className="h-[90dvh]">
        {/* <div className="hidden lg:block h-[90dvh] bg-yellow-200 absolute right-0 bottom-0 top-0 z-10 max-w-[720px] w-full rounded-tl-[70%] rounded-bl-[150px]">
        </div> */}
        <EmblaCarousel />
      </section>
      {/* card section */}
      <section className="px-3 md:px-14 main_card_wrapper flex flex-col gap-4 -mt-20">
        <p className="font-bold text-xl">አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች</p>
        <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(3)
            .fill(0)
            .map((_, key) => (
              <article className="max-w-sm rounded overflow-hidden shadow-lg" key={key}>
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
    </main>
  );
}
