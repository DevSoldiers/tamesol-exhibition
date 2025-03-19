import Image from 'next/image';
import Container from '../Container';

export default function Suppliers() {
  return (
    <Container className=" bg-white md:text-[64px] py-4">
      <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">አቅራቢ ድርጅቶች</p>
      <article className="flex flex-wrap max-sm:flex-col justify-center gap-6 p-6 bg-white rounded-md items-center">
        <Image
          src="/supplier_logos/lyan.svg"
          width={0}
          height={0}
          alt="company logos"
          className="w-72"
        />
        <Image src="/Tamcon_SVG.svg" width={0} height={0} alt="company logos" className="w-72" />
        <Image
          src="/tamcon_tamesol.svg"
          width={0}
          height={0}
          alt="company logos"
          className="w-64"
        />
      </article>
    </Container>
  );
}
