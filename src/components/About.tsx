import ScrollReveal from './ScrollReveal'

export default function About() {
    return (
        <section id="about" className="section relative">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">About Me</span>
                        <h2 className="section-title">Professional Profile</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
                    <ScrollReveal delay={100}>
                        <div className="space-y-5">
                            <p className="text-[var(--color-text-secondary)] text-[0.92rem] leading-[1.85]">
                                I am a results-driven <strong className="text-[var(--color-text-primary)] font-semibold">IT Support & Technical Operations Specialist</strong> with hands-on
                                experience in enterprise infrastructure management, POS system deployment, network administration,
                                and security systems integration. Based in Nairobi, Kenya, I specialize in ensuring seamless IT
                                operations across multi-site environments.
                            </p>
                            <p className="text-[var(--color-text-secondary)] text-[0.92rem] leading-[1.85]">
                                My expertise spans <strong className="text-[var(--color-text-primary)] font-semibold">Active Directory management</strong>, router and switch configuration,
                                Wi-Fi optimization, CCTV and access control systems, and ICT policy development. I excel at
                                diagnosing and resolving complex technical issues rapidly, minimizing downtime, and implementing
                                proactive maintenance strategies.
                            </p>
                            <p className="text-[var(--color-text-secondary)] text-[0.92rem] leading-[1.85]">
                                With a strong foundation in both <strong className="text-[var(--color-text-primary)] font-semibold">hardware and software systems</strong>, I bring a
                                holistic approach to IT operations — from helpdesk support and system installation to infrastructure
                                planning and data security compliance.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="flex flex-col gap-3">
                            {[
                                {
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
                                    title: 'Enterprise Ready',
                                    desc: 'Proven track record in government and corporate IT environments'
                                },
                                {
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
                                    title: 'Multi-Site Support',
                                    desc: 'Experience managing IT across distributed office locations'
                                },
                                {
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                                    title: 'Security Focused',
                                    desc: 'CCTV, access control, and ICT policy implementation'
                                },
                                {
                                    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                                    title: 'Rapid Response',
                                    desc: 'Fast diagnosis and resolution of critical infrastructure issues'
                                },
                            ].map((item, i) => (
                                <div key={i} className="card card-glow flex items-start gap-4 p-5 hover:translate-x-1">
                                    <div className="icon-box">{item.icon}</div>
                                    <div>
                                        <h4 className="text-[0.9rem] font-bold mb-0.5">{item.title}</h4>
                                        <p className="text-[0.82rem] text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
