import EmblaCarousel from '@/_components/Hero/hero_carousel';
import Navbar from '@/_components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  console.log('t==>', t('title'));
  return (
    <main className="">
      {/* nav and hero wrapper */}
      <section className="relative overflow-x-hidden h-screen">
        {/* carousel background section */}
        <EmblaCarousel slides={[1, 2, 3]} options={{ loop: false }} />
        {/* nav and hero section */}
        <Navbar />
        <article className="w-full px-14 max-md:px-3 py-8 z-40 relative">
          {/* <HeroSection /> */}
        </article>
      </section>
    </main>
  );
}
