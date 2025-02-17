import Image from 'next/image';
import Container from '../Container';

export default function Suppliers() {
  return (
    <Container className=" bg-white md:text-[64px] py-4">
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">አቅራቢ ድርጅቶች</p>
      <article className="flex flex-wrap justify-center gap-6 p-6 bg-white rounded-md">
        <Image
          src="/supplier_logos/lyan.svg"
          width={200}
          height={200}
          alt="company logos"
          className="w-32 sm:w-40 md:w-48 lg:w-52"
        />
        <Image
          src="/supplier_logos/Tamcon_Solutions_Logo.png"
          width={200}
          height={200}
          alt="company logos"
          className="w-32 sm:w-40 md:w-48 lg:w-52"
        />
        <Image
          src="/supplier_logos/Tamesol_Communications_Logo.png"
          width={200}
          height={200}
          alt="company logos"
          className="w-32 sm:w-40 md:w-48 lg:w-52"
        />
      </article>
    </Container>
  );
}
