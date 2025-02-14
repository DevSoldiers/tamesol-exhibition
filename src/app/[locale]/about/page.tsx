import { TCreativeMinds, TStandOut } from "@/_types/content.interface";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {

    const t = useTranslations('aboutpage');
    const content = useTranslations();
    const standOut: TStandOut[] = content.raw('standOut');

    const creativeMinds: TCreativeMinds = content.raw('creativeMinds');

    return (
        <main className="min-h-screen mt-[-95px]">
            {/* Hero Section */}
            <section className="relative w-full bg-[#fcdfb6] py-16 md:py-24 px-3 md:px-14">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>

                <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-4 md:flex-row">
                    {/* Left Content */}
                    <div className="relative z-10 max-w-2xl text-center md:w-1/2 md:text-left">
                        <h1 className="bg-gradient-to-r from-redishcolor via-secondarybrand to-[#fcdfb6] bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
                            {t('heroSection.title')}
                        </h1>
                        <p className="mt-6 text-lg text-brownishBrand md:text-xl">
                            {t('heroSection.description')}
                        </p>
                    </div>
                    {/* Right Image */}
                    <div className="relative w-full md:w-1/2">
                        <Image
                            width={300}
                            height={300}
                            src="/headphone_girl.png"
                            alt="Creative digital work"
                            className="h-auto w-full rounded-lg object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/* Our Story */}
            <section className="bg-brownishBrand/10 py-20 px-3 md:px-14">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 md:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-brownishBrand">
                                {t('storySection.title')}
                            </h2>
                            <p className="text-lg text-gray-700">
                                {t('storySection.description')}
                            </p>
                            <a
                                href="#team"
                                className="inline-block rounded-md bg-brand-gradient-var1 px-8 py-3 text-white transition-transform hover:scale-105"
                            >
                                {t('storySection.meetTheTeam')}
                            </a>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-96 w-full overflow-hidden rounded-2xl shadow-xl">
                            <Image
                                src="/headphone_girl.png"
                                alt="Creative digital work"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-3 md:px-14">
                <div className="container mx-auto px-4">
                    <h2 className="mb-16 text-center text-4xl font-bold text-brownishBrand">
                        {t('weStandOut.title')}
                    </h2>
                    <div className="grid gap-8 md:grid-cols-3">
                        {standOut?.map((content, key) => {
                            const { description } = content ?? {};
                            const icons = ['🚀', '📈', '⚡']
                            return (
                                <div key={key} className="rounded-xl border p-8 transition-all hover:shadow-lg">
                                    <div className="mb-4 text-4xl">{icons[key]}</div>
                                    <h3 className="mb-3 text-2xl font-semibold text-redishcolor">{content.title}</h3>
                                    <div className="text-gray-600">
                                        <ul className="flex flex-col gap-3">
                                            {description.map((content, key) => (
                                                <li key={key}>{content}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>)
                        }
                        )
                        }
                    </div>
                </div>
            </section>

            {/* Team Showcase */}
            <section className="bg-brand-gradient-var5 py-20">
                <div className="container mx-auto px-3 md:px-14">
                    <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
                        {creativeMinds.title}
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {creativeMinds.companies.map((content, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl bg-white"
                            >
                                {/* Image Container with Gradient Overlay */}
                                <div className="relative aspect-video w-full bg-[#fef4e7]">
                                    <Image
                                        src={content.icon || "/supplier_logos/Tamcon_Solutions_Logo.png"}
                                        alt="Team Member"
                                        fill
                                        className="object-contain p-4 transition-opacity duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Text Content with Hover Animation */}
                                <div className="bg-white p-6 text-center transition-all duration-300 ">
                                    <h3 className="mb-2 text-xl font-bold text-gray-900 lg:text-2xl">
                                        {content.name}
                                    </h3>
                                    <p className="text-sm text-secondarybrand opacity-90 md:text-base">
                                        {content.description}
                                    </p>
                                </div>

                                {/* Decorative Corner Elements */}
                                <div className="absolute top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#ff6b6b] opacity-20 transition-opacity " />
                                <div className="absolute bottom-0 right-0 h-8 w-8 translate-x-1/2 translate-y-1/2 transform rounded-full bg-[#f7a838] opacity-20 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}