import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const InfoCard = ({
  title = 'title',
  description = 'description',
  buttonText = 'button text',
  bgColor = 'bg-orange-100',
}) => {
  return (
    <div
      className="card max-w-[421px] w-full max-h-[409px] h-full border-2 border-orange-200 box-border rounded-lg"
      style={{ maxWidth: '421px' }}
    >
      <CardHeader hero_image="eske_fasika_logo.png" />
      <CardBody />
      <Button className="text-white px-4 py-5 bg-#f59c38">Purchase</Button>
    </div>
  );
};

export default InfoCard;

export const CardHeader = ({ hero_image }: { hero_image: string }) => (
  <section className="w-full bg-orange-200">
    <Image alt="card_hero" width={100} height={200} src={`/${hero_image}`} />
  </section>
);

export function CardBody() {
  return (
    <section className="w-full p-6 flex flex-col gap-6">
      <p className="text-2xl font-bold">Card Title</p>
      <p className="card_description text-[#595959] text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum adipisci error, quas ullam
        eaque esse animi dicta, deleniti consequuntur fuga eos. Aperiam vero, voluptates in ex
        minima recusandae repellendus consequatur.
      </p>
    </section>
  );
}
