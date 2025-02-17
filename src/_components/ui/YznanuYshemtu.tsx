import { useTranslations } from 'next-intl';
import Container from '../Container';

export default function YznanuYshemtu() {
  const t = useTranslations();
  const url = 'https://res.cloudinary.com/dzsa1ehta/image/upload';

  return (
    <Container className="mt-5 flex bg-white md:text-[64px] py-7 md:py-[80px]">
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">
        {t('eyeteznanuYshemtu')}
      </p>
      <div className="ygobgnu_wrapper flex flex-col md:flex-row gap-5 justify-between">
        <article className="w-full max-h-[400px] h rounded-md">
          <video width="100%" height="150%" autoPlay loop playsInline muted>
            <source
              src="https://res.cloudinary.com/dzsa1ehta/video/upload/expo_lqouoh_dhab0l.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </article>
        <article
          className="w-full h-[400px] rounded-md bg-cover"
          style={{ backgroundImage: `url(${url}/advert_1)` }}
        ></article>
      </div>
    </Container>
  );
}
