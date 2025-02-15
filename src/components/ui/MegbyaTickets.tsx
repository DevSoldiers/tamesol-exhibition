import Card from '@/_components/Cards/Card';
import { CardProps } from '@/_types/card.interface';
import { useTranslations } from 'next-intl';

export default function MegbyaTickets() {
  const t = useTranslations();
  const content: CardProps[] = t.raw('megbyaTickets');

  return (
    <section className="px-3 md:px-14 main_card_wrapper flex flex-col gap-4 -mt-20">
      <p className="font-bold text-xl">አዲስ ነገር ኤግዚቢሽን መግቢያ ትኬቶች</p>
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
    </section>
  );
}
