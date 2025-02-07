import EmblaCarousel from '@/_components/Hero/hero_carousel';
import Navbar from '@/_components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  console.log('t==>', t('title'));
  return (
    <main className="">
      {/* nav and hero wrapper */}
      <section className="relative overflow-x-hidden h-screen max-md:min-h-[65vh] max-md:h-full">
        {/* carousel background section */}
        <EmblaCarousel slides={[1, 2, 3]} options={{ loop: false }} />
        {/* nav and hero section */}
        <Navbar />
      </section>
    </main>
  );
}
