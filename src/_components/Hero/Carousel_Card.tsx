import CImageCard from '../Cards/CImageCard';

export default function CarouselCard({
  title,
  subTitle,
  signUp,
  login,
  imgSrc,
}: {
  title: string;
  subTitle: string;
  signUp: string;
  login: string;
  imgSrc: string;
}) {
  return (
    <div className="h-[90dvh] relative">
      <div className="bg-no-repeat h-full flex items-center justify-between">
        <div className="grid md:grid-cols-2 w-full">
          {/* left section */}
          <section className="left_side relative flex flex-col items-center md:items-start justify-center bg-cover bg-center h-full">
            <h1 className="text-3xl sm:text-3xl md:text-5xl max-w-lg font-bold text-white md:text-left leading-[120%]">
              {title}
            </h1>
            {/* Display the subtitle below the title */}
            <p className="text-lg sm:text-xl md:text-2xl text-white text-center md:text-left mt-4 max-w-lg xl:max-w-3xl xl:leading-relaxed">
              {subTitle}
            </p>
            <div className="mt-6 flex gap-4">
              <button className="px-6 py-2 text-black bg-white border rounded-full shadow-md hover:bg-gray-200 transition">
                {signUp}
              </button>
              <button className="px-6 py-2 text-white bg-orange-500 rounded-full shadow-md hover:bg-orange-600 transition">
                {login}
              </button>
            </div>
          </section>
          {/* right section */}
          <section className="right_side relative self-end hidden md:block">
            <CImageCard imgSrc={imgSrc} alt="advert pic" />
          </section>
        </div>
      </div>
    </div>
  );
}
