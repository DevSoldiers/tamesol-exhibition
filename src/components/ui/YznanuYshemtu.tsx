import { useTranslations } from 'next-intl';

export default function YznanuYshemtu() {
  const t = useTranslations();
  const url = 'https://res.cloudinary.com/dzsa1ehta/image/upload';

  return (
    <section className="yznanu_yshemtu_section px-3 md:px-14 mt-5 flex flex-col gap-4 bg-white md:text-[64px] py-7 md:py-[80px]">
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">
        {t('eyeteznanuYshemtu')}
      </p>
      <div className="ygobgnu_wrapper flex flex-col md:flex-row gap-5 justify-between">
        <article className="w-full max-h-[400px] h bg-exhibition-img rounded-md">
          <video width="100%" height="150%" autoPlay loop playsInline muted>
            <source
              src="https://res.cloudinary.com/dzsa1ehta/video/upload/expo_lqouoh.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </article>
        <article
          className="w-full h-[400px] rounded-md bg-exhibition-img bg-cover"
          style={{ backgroundImage: `url(${url}/advert_1)` }}
        ></article>
      </div>
    </section>
  );
}
