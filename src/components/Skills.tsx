import ScrollReveal from './ScrollReveal'

const skillCategories = [
    {
        title: 'Operating Systems',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>,
        skills: [
            { name: 'Windows Server / Desktop', level: 95 },
            { name: 'Linux (Ubuntu / CentOS)', level: 75 },
        ],
    },
    {
        title: 'Networking',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
        skills: [
            { name: 'TCP/IP & Subnetting', level: 90 },
            { name: 'Wireless Networking', level: 85 },
            { name: 'Network Diagnostics', level: 90 },
        ],
    },
    {
        title: 'Tools & Software',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
        skills: [
            { name: 'Wireshark', level: 85 },
            { name: 'Cisco Packet Tracer', level: 80 },
            { name: 'Git & Version Control', level: 75 },
            { name: 'VS Code', level: 90 },
        ],
    },
    {
        title: 'Systems & Platforms',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>,
        skills: [
            { name: 'Active Directory', level: 90 },
            { name: 'VMware Fundamentals', level: 70 },
        ],
    },
    {
        title: 'Hardware & Security',
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
        skills: [
            { name: 'Hardware Troubleshooting', level: 90 },
            { name: 'CCTV Systems', level: 85 },
            { name: 'Access Control Systems', level: 80 },
            { name: 'POS Systems', level: 85 },
        ],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="section relative">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">Expertise</span>
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((cat, i) => (
                        <ScrollReveal key={i} delay={i * 80}>
                            <div className="card p-6 h-full hover:shadow-[var(--shadow-card)]">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="icon-box">{cat.icon}</div>
                                    <h3 className="text-[0.9rem] font-bold">{cat.title}</h3>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {cat.skills.map((s, j) => (
                                        <div key={j}>
                                            <div className="flex justify-between items-baseline mb-1.5">
                                                <span className="text-[0.82rem] font-medium text-[var(--color-text-secondary)]">{s.name}</span>
                                                <span className="text-[0.75rem] font-semibold font-[var(--font-mono)] text-[var(--color-accent-1)]">{s.level}%</span>
                                            </div>
                                            <div className="w-full h-1.5 bg-[var(--color-border-default)] rounded-sm overflow-hidden">
                                                <div className="skill-fill" style={{ width: `${s.level}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
