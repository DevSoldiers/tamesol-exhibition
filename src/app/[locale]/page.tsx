import Navbar from '@/_components/Navbar/Navbar';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  console.log('t==>', t('title'));
  return (
    <main className="px-14 py-8">
      {/* nav section */}
      <Navbar />
    </main>
  );
}
