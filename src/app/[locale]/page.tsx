import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import EmblaCarousel from '@/_components/Hero/hero_carousel';
import ClientsCarousel from '@/_components/Sliding_Clients';
import MegbyaTickets from '@/_components/ui/MegbyaTickets';
import YznanuYshemtu from '@/_components/ui/YznanuYshemtu';
import AddisNegerAdvert from '@/_components/ui/AddisNegerAdvert';
import Suppliers from '@/_components/ui/Supplier_Companies';
import HowToParticipate from '@/_components/ui/HowToParticipate';
import Container from '@/_components/Container';

export default async function Home() {
  return (
    <main className="">
      <section className="h-[90dvh]">
        <EmblaCarousel />
      </section>
      {/* card section */}
      <MegbyaTickets />
      {/* eyeteznanu yshemtu section */}
      <YznanuYshemtu />
      {/* advert section */}
      <AddisNegerAdvert />

      {/* aqrabi drjtoch */}
      <Suppliers />

      {/* megbya ticketoch */}
      <HowToParticipate />

      {/* sliding clients */}
      <Container className="bg-white md:text-[64px] py-4 md:py-[80px] mt-1">
        <ClientsCarousel />
      </Container>
    </main>
  );
}
