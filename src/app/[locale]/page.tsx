import EmblaCarousel from '@/_components/Hero/hero_carousel';
import Navbar from '@/_components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  console.log('t==>', t('title'));
  return (
    <main className="">
      {/* nav and hero wrapper */}
      <section className="relative">
        {/* carousel background section */}
        <EmblaCarousel slides={[1, 2, 3]} />
        {/* nav and hero section */}
        <article className="w-full px-14 py-8 z-40 relative">
          <Navbar />
        </article>
      </section>
    </main>
  );
}
