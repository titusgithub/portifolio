import { useEffect, useRef } from 'react'

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const el = heroRef.current
        if (el) el.classList.add('hero-visible')
    }, [])

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-24 px-6 max-sm:pt-28 max-sm:pb-16 max-sm:px-4 xl:pt-40 xl:pb-32" ref={heroRef}>
            <div className="hero-bg-image"></div>
            <div className="hero-bg-overlay"></div>
            <div className="hero-content-inner text-center relative z-[1] max-w-[840px] xl:max-w-[1024px] mx-auto pt-6 xl:pt-10">
                <h1 className="text-[clamp(2.8rem,7vw,5.5rem)] xl:text-[6.5rem] font-black tracking-[-0.03em] leading-[1.05] mb-6 xl:mb-8">
                    Titus Kagina<br />
                    <span className="gradient-text">Njuguna</span>
                </h1>

                <p className="text-[clamp(1rem,2.5vw,1.4rem)] xl:text-[1.6rem] font-medium text-[var(--color-text-secondary)] mb-6 xl:mb-8 font-[var(--font-mono)] tracking-tight">
                    IT Support & Technical Operations Specialist
                </p>

                <p className="text-[1.05rem] xl:text-[1.25rem] text-[var(--color-text-secondary)] max-w-[650px] xl:max-w-[800px] mx-auto mb-12 xl:mb-16 leading-[1.85] xl:leading-[1.9]">
                    Ensuring <span className="text-[var(--color-accent-2)] font-semibold">99.9% uptime</span>, resolving complex infrastructure issues, and
                    building resilient IT systems for enterprise environments across Kenya.
                </p>

                <div className="flex gap-4 xl:gap-8 justify-center mb-16 xl:mb-20 flex-wrap max-sm:flex-col max-sm:items-stretch max-sm:px-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 xl:px-10 xl:py-4.5 rounded-[var(--radius-lg)] font-semibold text-[0.95rem] xl:text-[1.05rem] transition-all duration-300 gradient-bg text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(99,102,241,0.35)]"
                        onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="xl:w-5 xl:h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        Contact Me
                    </a>
                    <a
                        href="/Titus_Kagina_CV.pdf"
                        download
                        className="inline-flex items-center justify-center gap-3 px-8 py-4 xl:px-10 xl:py-4.5 rounded-[var(--radius-lg)] font-semibold text-[0.95rem] xl:text-[1.05rem] transition-all duration-300 bg-[var(--color-bg-card)] text-[var(--color-text-primary)] border border-[var(--color-border-default)] hover:border-[var(--color-accent-1)] hover:bg-[var(--color-bg-card-hover)] hover:-translate-y-1"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="xl:w-5 xl:h-5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                        Download CV
                    </a>
                </div>

                <div className="grid grid-cols-3 gap-10 xl:gap-20 max-w-[500px] xl:max-w-[700px] mx-auto max-sm:gap-4 mt-[6rem] xl:mt-[12rem] pt-10">
                    <div className="text-center group">
                        <span className="block text-[1.8rem] xl:text-[2.5rem] max-sm:text-[1.4rem] font-extrabold gradient-text leading-none mb-1.5 xl:mb-2 transition-transform duration-300 group-hover:scale-110">3+</span>
                        <span className="text-[0.75rem] xl:text-[0.85rem] text-[var(--color-text-muted)] font-medium uppercase tracking-wider">Years Exp.</span>
                    </div>
                    <div className="text-center group">
                        <span className="block text-[1.8rem] xl:text-[2.5rem] max-sm:text-[1.4rem] font-extrabold gradient-text leading-none mb-1.5 xl:mb-2 transition-transform duration-300 group-hover:scale-110">50+</span>
                        <span className="text-[0.75rem] xl:text-[0.85rem] text-[var(--color-text-muted)] font-medium uppercase tracking-wider">Systems</span>
                    </div>
                    <div className="text-center group">
                        <span className="block text-[1.8rem] xl:text-[2.5rem] max-sm:text-[1.4rem] font-extrabold gradient-text leading-none mb-1.5 xl:mb-2 transition-transform duration-300 group-hover:scale-110">99.9%</span>
                        <span className="text-[0.75rem] xl:text-[0.85rem] text-[var(--color-text-muted)] font-medium uppercase tracking-wider">Uptime</span>
                    </div>
                </div>
            </div>
        </section >
    )
}
