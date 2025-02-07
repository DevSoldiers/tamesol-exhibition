import HeroLeft from './LeftSection.hero';
import HeroRight from './RightSection.hero';

export default function HeroSection() {
  return (
    <div className="relative z-[1000] px-14 h-full grid grid-cols-2 items-center max-md:grid-cols-1 max-md:px-0 max-md:items-baseline">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
