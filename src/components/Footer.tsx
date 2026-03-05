import { useState, useEffect } from 'react'

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const techStack = ['React', 'TypeScript', 'Node.js', 'Vite', 'Tailwind CSS']

    return (
        <footer className="pt-20 pb-0 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border-default)] relative overflow-hidden">
            <div className="footer-glow"></div>

            <div className="container relative z-1">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 pb-16">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div>
                            <a className="flex items-center gap-3 cursor-pointer font-bold mb-4 group" onClick={() => scrollTo('home')}>
                                <span className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center font-extrabold text-[0.85rem] text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">TK</span>
                                <span className="text-lg font-bold tracking-tight">Titus Kagina</span>
                            </a>
                            <p className="text-[0.9rem] text-[var(--color-text-secondary)] leading-relaxed max-w-[340px] mb-6">
                                IT Support & Technical Operations Specialist based in Nairobi, Kenya. Dedicated to building reliable, high-performance IT infrastructure for enterprise excellence.
                            </p>
                            <div className="status-badge inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-glow-1)] border border-[rgba(99,102,241,0.2)]">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-accent-1)]">Available for Hire</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-primary)] mb-6">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            {['about', 'experience', 'projects', 'contact'].map(id => (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    className="text-[0.9rem] text-[var(--color-text-secondary)] transition-all duration-300 hover:text-[var(--color-accent-1)] hover:translate-x-1 capitalize flex items-center gap-2"
                                    onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                                >
                                    <span className="w-1.5 h-[1px] bg-[var(--color-border-default)] transition-all duration-300 group-hover:w-3"></span>
                                    {id}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-primary)] mb-6">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map(tech => (
                                <span key={tech} className="px-3 py-1 rounded-md bg-[var(--color-bg-card)] border border-[var(--color-border-default)] text-[0.75rem] text-[var(--color-text-secondary)] font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Connect Section */}
                    <div>
                        <h4 className="text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[var(--color-text-primary)] mb-6">Connect</h4>
                        <div className="flex gap-3">
                            <a href="https://linkedin.com/in/tituskagina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="mailto:tituskagina78@gmail.com" aria-label="Email" className="social-icon group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </a>
                            <a href="https://github.com/tituskagina" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[var(--color-border-default)] py-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[0.85rem] text-[var(--color-text-muted)] font-medium">
                        © {new Date().getFullYear()} <span className="text-[var(--color-text-primary)]">Titus Kagina Njuguna</span>. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-[0.85rem] text-[var(--color-text-muted)] flex items-center gap-2">
                            Built with <span className="text-red-500 animate-pulse">❤️</span> by Titus
                        </p>
                        <button
                            className={`back-to-top hidden md:flex items-center gap-2 text-[0.8rem] font-bold uppercase tracking-widest text-[var(--color-accent-1)] transition-all duration-300 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                            onClick={backToTop}
                        >
                            Back to Top
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
