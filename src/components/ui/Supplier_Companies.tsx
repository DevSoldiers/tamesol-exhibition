import Image from "next/image";

export default function Suppliers() {
    return (
        <section className="aqrabi_drjtoch_section px-3 md:px-14 flex flex-col gap-4 bg-white md:text-[64px] py-4">
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
        </section>
    )
}