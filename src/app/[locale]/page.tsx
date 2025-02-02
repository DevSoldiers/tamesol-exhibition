import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');
  console.log('t==>', t('title'));
  return <div>Translatons</div>;
}
