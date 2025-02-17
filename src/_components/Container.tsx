export default function Container({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={`px-3 md:px-14 flex flex-col gap-4 -mt-20 ${className}`}>
            {children}
        </section>
    )
}