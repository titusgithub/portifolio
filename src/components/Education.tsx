import ScrollReveal from './ScrollReveal'

export default function Education() {
    return (
        <section id="education" className="section relative bg-[var(--color-bg-secondary)]">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">Credentials</span>
                        <h2 className="section-title">Education & Certifications</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px] mx-auto">
                    <ScrollReveal delay={100}>
                        <div className="card card-glow p-8 text-center h-full hover:-translate-y-0.5">
                            <div className="w-14 h-14 mx-auto mb-5 bg-[var(--color-glow-1)] rounded-xl flex items-center justify-center text-[var(--color-accent-1)]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 6 3 12 0v-5" /></svg>
                            </div>
                            <h3 className="text-[1rem] font-bold mb-2">Bachelor of Science in Computer Technology</h3>
                            <p className="text-[0.85rem] text-[var(--color-accent-2)] font-semibold mb-3">Meru University of Science and Technology</p>
                            <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-[1.75]">Comprehensive program covering computer systems, networking, software development, and IT infrastructure management.</p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className="card card-glow p-8 text-center h-full hover:-translate-y-0.5">
                            <div className="w-14 h-14 mx-auto mb-5 bg-[var(--color-glow-1)] rounded-xl flex items-center justify-center text-[var(--color-accent-1)]">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            </div>
                            <h3 className="text-[1rem] font-bold mb-2">ICT Authority, Kenya</h3>
                            <p className="text-[0.85rem] text-[var(--color-accent-2)] font-semibold mb-3">SalaamTechnology</p>
                            <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-[1.75]">, Cybersecurity and Emerging Technologies Awareness Training.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
