import { useTranslations } from 'next-intl';
import YznanuCards from '../SlidingCards';
import Container from '../Container';

export default function AddisNegerAdvert() {
  const t = useTranslations();

  return (
    <Container className="bg-white md:text-[64px] py-4 md:py-[80px]">
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">
        {t('addis_neger_festival')}
      </p>
      <YznanuCards />
    </Container>
  );
}
