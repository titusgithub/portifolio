import ScrollReveal from './ScrollReveal'

const competencies = [
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        title: 'IT Support & Helpdesk',
        desc: 'End-to-end technical support for enterprise users, troubleshooting hardware and software issues with rapid resolution times.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>,
        title: 'Network & Hardware',
        desc: 'Diagnosing and resolving complex network and hardware failures across enterprise environments.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Active Directory',
        desc: 'User account administration, group policy configuration, and domain management in Windows Server.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
        title: 'Router & Switch Config',
        desc: 'Configuration and management of enterprise networking equipment including Cisco routers and switches.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>,
        title: 'Wi-Fi & IP Addressing',
        desc: 'Wireless network design, optimization, and IP address management including DHCP and DNS.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>,
        title: 'CCTV & Access Control',
        desc: 'Installation, configuration, and maintenance of surveillance and physical access control systems.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15" /><circle cx="18" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /></svg>,
        title: 'System Installation',
        desc: 'OS deployment, software installation, system imaging, and configuration across enterprise devices.',
    },
    {
        icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        title: 'ICT Policy & Security',
        desc: 'Development and implementation of IT policies, data protection protocols, and security compliance.',
    },
]

export default function Competencies() {
    return (
        <section id="competencies" className="section relative bg-[var(--color-bg-secondary)]">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">What I Do</span>
                        <h2 className="section-title">Core Competencies</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {competencies.map((c, i) => (
                        <ScrollReveal key={i} delay={i * 60}>
                            <div className="card card-glow p-6 text-center h-full flex flex-col items-center hover:-translate-y-1">
                                <div className="icon-box icon-box-lg mx-auto mb-4 group-hover:scale-110">
                                    {c.icon}
                                </div>
                                <h3 className="text-[0.88rem] font-bold mb-2">{c.title}</h3>
                                <p className="text-[0.8rem] text-[var(--color-text-muted)] leading-relaxed">{c.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
