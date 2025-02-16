import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import EmblaCarousel from '@/components/Hero/hero_carousel';
import ClientsCarousel from '@/components/Sliding_Clients';
import MegbyaTickets from '@/components/ui/MegbyaTickets';
import YznanuYshemtu from '@/components/ui/YznanuYshemtu';
import AddisNegerAdvert from '@/components/ui/AddisNegerAdvert';
import Suppliers from '@/components/ui/Supplier_Companies';
import HowToParticipate from '@/components/ui/HowToParticipate';
import Container from '@/components/Container';

export default function Home() {
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
      <Container className="bg-white md:text-[64px] py-4 md:py-[80px]">
        <ClientsCarousel />
      </Container>
    </main>
  );
}
