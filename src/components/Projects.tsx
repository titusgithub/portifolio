import ScrollReveal from './ScrollReveal'

const projects = [
    {
        title: 'IoT Speed Control System',
        desc: 'An Arduino-based intelligent traffic speed control system that uses ultrasonic sensors to detect vehicle speed in real-time and triggers alerts when speed limits are exceeded.',
        tech: ['Arduino', 'C++', 'Ultrasonic Sensors', 'LCD Display', 'IoT'],
        problem: 'Manual speed monitoring is unreliable and resource-intensive. This system automates speed detection and enforcement, reducing accidents in controlled zones.',
        color: 'var(--color-accent-1)',
    },
    {
        title: 'Job Posting Portal',
        desc: 'A full-featured job posting and application platform built with Python and MySQL. Enables employers to post positions, manage applications, and candidates to search and apply.',
        tech: ['Python', 'MySQL', 'Flask', 'HTML/CSS', 'REST API'],
        problem: 'Fragmented job posting processes in local markets. This platform centralizes listings and streamlines the application workflow.',
        color: 'var(--color-accent-2)',
    },
    {
        title: 'E-Commerce Web Application',
        desc: 'A Java-based e-commerce platform with product catalog, shopping cart, user authentication, order processing, and payment integration with enterprise patterns.',
        tech: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf', 'Bootstrap'],
        problem: 'Small businesses lacking affordable online sales platforms. Provides a scalable, secure e-commerce solution with inventory management.',
        color: 'var(--color-accent-3)',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="section relative">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">Portfolio</span>
                        <h2 className="section-title">Featured Projects</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((p, i) => (
                        <ScrollReveal key={i} delay={i * 120}>
                            <div className="card card-glow overflow-hidden h-full flex flex-col hover:-translate-y-1">
                                <div className="h-1 w-full" style={{ background: p.color }}></div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-[1rem] font-bold mb-2.5">{p.title}</h3>
                                    <p className="text-[0.85rem] text-[var(--color-text-secondary)] leading-[1.7] mb-4">{p.desc}</p>

                                    <div className="flex items-start gap-2 text-[0.78rem] text-[var(--color-text-muted)] p-3 bg-[var(--color-bg-primary)] rounded-[var(--radius-sm)] mb-4 leading-relaxed border border-[var(--color-border-default)]">
                                        <svg className="min-w-[14px] mt-0.5 text-[var(--color-accent-3)]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                                        <span><strong className="text-[var(--color-text-secondary)]">Problem:</strong> {p.problem}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {p.tech.map((t, j) => (
                                            <span key={j} className="font-[var(--font-mono)] text-[0.68rem] font-medium px-2.5 py-1 rounded-full bg-[var(--color-glow-1)] text-[var(--color-accent-1)]">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
