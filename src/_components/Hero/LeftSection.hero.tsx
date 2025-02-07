export default function HeroLeft() {
  return (
    <aside className="hero_title_button_container flex flex-col  gap-y-5">
      <p className="font-medium text-5xl leading-[120%] text-white font-extrabold">
        Unlock Your Business Potential with OurExpert Solutions.
      </p>
      <section className="flex gap-3">
        <div className="bg-white text-gray-900 text-sm font-semibold px-4 py-1 rounded-lg">
          Buy Your Tickets
        </div>
        {/* <div className="bg-white text-gray-900 text-sm font-semibold px-4 py-1 rounded-lg">
          100K+ Our Clients Here
        </div> */}
      </section>
    </aside>
  );
}
