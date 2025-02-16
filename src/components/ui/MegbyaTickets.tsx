import Container from '@/components/Container';
import { CardProps } from '@/_types/card.interface';
import { useTranslations } from 'next-intl';
import Card from '../Cards/Card';

export default function MegbyaTickets() {
  const t = useTranslations();
  const content: CardProps[] = t.raw('megbyaTickets');

  return (
    <Container>
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">
        አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች
      </p>
      <article className="card_wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {content?.map((Content, key: number) => (
          <Card
            key={key}
            imageSrc={Content.imageSrc}
            imageAlt={Content.imageAlt}
            title={Content.title}
            price="."
            description={Content.description}
            descriptionTitle={Content.descriptionTitle}
            buttonText={Content.buttonText}
          />
        ))}
      </article>
    </Container>
  );
}
