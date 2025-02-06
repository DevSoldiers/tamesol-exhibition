import HeroLeft from './LeftSection.hero';
import HeroRight from './RightSection.hero';

export default function HeroSection() {
  return (
    <section className="bg-transparent relative z-[1000] px-14 grid grid-cols-2 gap-5 mt-16 font-manrope">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
