import ScrollReveal from './ScrollReveal'

const experiences = [
    {
        period: 'January 2026 – Present',
        role: 'ICT Intern',
        company: 'Salary and Remuneration Commission',
        points: [
            'Providing first-line and second-line IT support to 200+ staff members, achieving a 95% ticket resolution rate within SLA targets.',
            'Managing Active Directory user accounts, group policies, and access controls across the organization.',
            'Configuring and maintaining network infrastructure including routers, switches, and wireless access points.',
            'Supporting CCTV surveillance and biometric access control systems ensuring physical security compliance.',
            'Assisting in ICT asset inventory management and lifecycle tracking for 500+ devices.',
        ],
    },
    {
        period: 'January 2026 – Present',
        role: 'Technical Operations Consultant',
        company: 'Tribus TSG Ltd',
        points: [
            'Leading POS system deployment, configuration, and maintenance for retail clients across multiple locations.',
            'Designing and implementing network solutions including structured cabling, router configuration, and Wi-Fi optimization.',
            'Providing technical consultation on CCTV installation, DVR/NVR configuration, and remote monitoring setup.',
            'Troubleshooting critical hardware and software failures with an average resolution time of under 2 hours.',
            'Training end-users on system usage, basic troubleshooting, and security best practices.',
        ],
    },
    {
        period: 'January 2025 – April 2025',
        role: 'Repairs Assistant',
        company: 'Close The Gap Kenya',
        points: [
            'Refurbishing and repairing donated laptops and desktops for redistribution to schools and communities.',
            'Performing hardware diagnostics, component replacement, and OS installations on 100+ devices monthly.',
            'Documenting repair procedures and maintaining quality control standards for refurbished equipment.',
        ],
    },
    {
        period: 'May 2024 – Dec 2024',
        role: 'Operations Intern',
        company: 'Close The Gap Kenya',
        points: [
            'Coordinated logistics for ICT equipment distribution to educational institutions across Kenya.',
            'Assisted in inventory management and quality assurance processes for donated technology.',
            'Contributed to impact assessment reporting on technology access in underserved communities.',
        ],
    },
    {
        period: 'May 2023 – August 2023',
        role: 'Industrial Attachment',
        company: 'Tribus TSG Ltd',
        points: [
            'Gained foundational experience in enterprise IT support, POS system installation, and network cabling.',
            'Assisted senior technicians in CCTV installation projects and hardware troubleshooting.',
            'Developed skills in structured cabling, network testing, and documentation.',
        ],
    },
]

export default function Experience() {
    return (
        <section id="experience" className="section relative bg-[var(--color-bg-secondary)]">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">Career Path</span>
                        <h2 className="section-title">Professional Experience</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>
                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="relative mb-8">
                                <div className="timeline-dot"></div>
                                <div className="card card-glow p-6">
                                    <span className="inline-block font-[var(--font-mono)] text-[0.72rem] font-semibold text-[var(--color-accent-2)] bg-[rgba(6,182,212,0.08)] px-3 py-1 rounded-full">{exp.period}</span>
                                    <h3 className="text-[1.05rem] font-bold mt-3 mb-0.5">{exp.role}</h3>
                                    <span className="block text-[0.85rem] text-[var(--color-accent-1)] font-semibold mb-3">{exp.company}</span>
                                    <ul className="timeline-points">
                                        {exp.points.map((p, j) => (
                                            <li key={j}>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
