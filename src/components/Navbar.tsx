import { useState, useEffect } from 'react'

interface NavbarProps {
    darkMode: boolean
    setDarkMode: (v: boolean) => void
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            const sections = ['home', 'about', 'competencies', 'skills', 'experience', 'projects', 'education', 'contact']
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const links = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'competencies', label: 'Competencies' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ]

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
            setMobileOpen(false)
        }
    }

    return (
        <>
            <nav className={`fixed z-[9999] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex justify-center w-full shadow-none ${scrolled ? 'top-4 px-4 max-sm:px-2 max-sm:top-2' : 'top-0 px-0'}`}>
                <div className={`flex items-center justify-between transition-all duration-500 w-full relative z-[1001]
                    ${scrolled
                        ? 'max-w-[1140px] rounded-2xl border border-[var(--color-border-hover)] py-3 px-6 max-sm:py-2.5 max-sm:px-4 shadow-[0_8px_32px_rgba(0,0,0,0.12)] bg-[var(--color-bg-glass)] backdrop-blur-2xl'
                        : 'max-w-[1140px] mx-auto rounded-none border-transparent py-6 px-8 max-sm:py-4 max-sm:px-4 bg-transparent shadow-none'
                    }`}
                >
                    <a className="flex items-center gap-3 cursor-pointer group shrink-0 relative z-[1002]" onClick={() => scrollTo('home')}>
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border-default)] group-hover:border-[var(--color-accent-1)] transition-colors overflow-hidden">
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-100 gradient-bg transition-opacity duration-300"></div>
                            <span className="relative font-extrabold text-[0.85rem] text-[var(--color-text-primary)] group-hover:text-white transition-colors duration-300 z-10">TK</span>
                        </div>
                        <span className="text-[1.05rem] font-bold tracking-[-0.01em] text-[var(--color-text-primary)] max-sm:hidden">Titus <span className="text-[var(--color-text-secondary)] font-medium">Kagina</span></span>
                    </a>

                    {/* Desktop nav (Hidden on Mobile) */}
                    <div className="flex gap-2 max-md:hidden">
                        {links.map(l => (
                            <a
                                key={l.id}
                                className={`relative px-4 py-2 rounded-full text-[0.85rem] font-medium transition-all duration-300 cursor-pointer group overflow-hidden
                                    ${activeSection === l.id
                                        ? 'text-[var(--color-text-primary)] font-semibold'
                                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                                    }`}
                                onClick={() => scrollTo(l.id)}
                            >
                                {activeSection === l.id && (
                                    <span className="absolute inset-0 bg-[var(--color-glow-1)] rounded-full border border-[rgba(99,102,241,0.2)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] pointer-events-none"></span>
                                )}
                                {activeSection !== l.id && (
                                    <span className="absolute inset-0 bg-[var(--color-bg-card)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 pointer-events-none"></span>
                                )}
                                <span className="relative z-10">{l.label}</span>
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            className="w-10 h-10 flex items-center justify-center rounded-full text-[var(--color-text-secondary)] transition-all duration-300 bg-[var(--color-bg-card)] border border-[var(--color-border-default)] hover:text-[var(--color-accent-1)] hover:border-[var(--color-accent-1)] hover:shadow-[0_0_15px_rgba(99,102,241,0.15)] group relative overflow-hidden"
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label="Toggle theme"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 gradient-bg transition-opacity duration-300"></div>
                            <span className="relative z-10 group-hover:rotate-12 transition-transform duration-300">
                                {darkMode ? (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                ) : (
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                )}
                            </span>
                        </button>
                        <button
                            className="hidden max-md:flex flex-col gap-[5px] w-10 h-10 items-center justify-center rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-default)] z-[10001] transition-all duration-300 hover:border-[var(--color-accent-1)] group"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Menu"
                        >
                            <span className={`w-[18px] h-0.5 rounded-sm transition-all duration-300 ${mobileOpen ? 'bg-[var(--color-accent-1)] bar-open' : 'bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-1)]'}`}></span>
                            <span className={`w-[18px] h-0.5 rounded-sm transition-all duration-300 ${mobileOpen ? 'bg-[var(--color-accent-1)] bar-open' : 'bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-1)]'}`}></span>
                            <span className={`w-[18px] h-0.5 rounded-sm transition-all duration-300 ${mobileOpen ? 'bg-[var(--color-accent-1)] bar-open' : 'bg-[var(--color-text-primary)] group-hover:bg-[var(--color-accent-1)]'}`}></span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div className={`fixed inset-0 min-h-[100dvh] bg-[var(--color-bg-primary)]/95 backdrop-blur-xl z-[9998] flex flex-col items-center justify-center gap-4 transition-all duration-300 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {links.map(l => (
                    <a
                        key={l.id}
                        className={`relative text-xl px-8 py-3 w-full max-w-[240px] text-center font-medium transition-all duration-300 cursor-pointer rounded-full group overflow-hidden
                            ${activeSection === l.id
                                ? 'text-[var(--color-text-primary)] font-semibold'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                            }`}
                        onClick={() => scrollTo(l.id)}
                    >
                        {activeSection === l.id && (
                            <span className="absolute inset-0 bg-[var(--color-glow-1)] rounded-full border border-[rgba(99,102,241,0.2)] shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] pointer-events-none"></span>
                        )}
                        {activeSection !== l.id && (
                            <span className="absolute inset-0 bg-[var(--color-bg-card)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 pointer-events-none"></span>
                        )}
                        <span className="relative z-10">{l.label}</span>
                    </a>
                ))}
            </div>
        </>
    )
}
