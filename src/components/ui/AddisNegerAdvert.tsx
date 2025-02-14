import { useTranslations } from "next-intl";
import YznanuCards from "../SlidingCards";

export default function AddisNegerAdvert() {
    const t = useTranslations();

    return (
        <section className="yznanu_yshemtu_section px-3 md:px-14 flex flex-col gap-4 bg-white md:text-[64px] py-4 md:py-[80px]">
            <p className="mb-3 text-black p-0 text-3xl text-center md:text-left">{t('addis_neger_festival')}</p>
            <YznanuCards />
        </section>
    )
}