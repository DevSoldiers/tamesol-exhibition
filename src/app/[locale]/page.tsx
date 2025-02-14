import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EmblaCarousel from '@/_components/Hero/hero_carousel';
import ClientsCarousel from '@/components/Sliding_Clients';
import MegbyaTickets from "@/components/ui/MegbyaTickets";
import YznanuYshemtu from "@/components/ui/YznanuYshemtu";
import AddisNegerAdvert from "@/components/ui/AddisNegerAdvert";
import Suppliers from "@/components/ui/Supplier_Companies";
import HowToParticipate from "@/components/ui/HowToParticipate";

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
      <section className="yznanu_yshemtu_section px-3 md:px-14 flex flex-col gap-4 bg-white md:text-[64px] py-4 md:py-[80px]">
        <ClientsCarousel />
      </section>
    </main>
  );
}
