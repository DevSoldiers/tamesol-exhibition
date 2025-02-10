import EmblaCarousel from '@/_components/Hero/hero_carousel';
import Navbar from '@/_components/Navbar/Navbar';
// import { useTranslations } from 'next-intl';
// import Image from 'next/image';

export default function Home() {
  // const t = useTranslations('HomePage');
  /* Frame 44 */

  return (
    <main className="h-[200vh]">
      <Navbar />
      <section className="h-[90dvh]">
        {/* <div className="hidden lg:block h-[90dvh] bg-yellow-200 absolute right-0 bottom-0 top-0 z-10 max-w-[720px] w-full rounded-tl-[70%] rounded-bl-[150px]">
        </div> */}
        <EmblaCarousel />
      </section>
    </main>
  );
}
