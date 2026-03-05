import { useState, FormEvent } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('https://formspree.io/f/xaqpweed', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                setStatus('sent')
                setForm({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatus('idle'), 4000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 4000)
            }
        } catch (error) {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <section id="contact" className="section relative">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <span className="section-tag">Get In Touch</span>
                        <h2 className="section-title">Contact Me</h2>
                        <div className="section-divider"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start max-w-[960px] mx-auto">
                    <ScrollReveal delay={100}>
                        <div>
                            <h3 className="text-[1.25rem] font-bold mb-3">Let's Work Together</h3>
                            <p className="text-[0.9rem] text-[var(--color-text-secondary)] leading-[1.8] mb-8">
                                Whether you need IT infrastructure support, technical consulting, or a reliable operations specialist, I'm ready to help. Let's discuss how I can contribute to your organization's success.
                            </p>

                            <div className="flex flex-col gap-4">
                                {[
                                    {
                                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
                                        label: 'Phone',
                                        value: '+254 745261738',
                                        href: 'tel:+254745261738',
                                    },
                                    {
                                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                                        label: 'Email',
                                        value: 'tituskagina78@gmail.com',
                                        href: 'mailto:tituskagina78@gmail.com',
                                    },
                                    {
                                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
                                        label: 'LinkedIn',
                                        value: 'linkedin.com/in/tituskagina',
                                        href: 'https://linkedin.com/in/tituskagina',
                                        external: true,
                                    },
                                    {
                                        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                                        label: 'Location',
                                        value: 'Nairobi, Kenya',
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3.5">
                                        <div className="icon-box">{item.icon}</div>
                                        <div>
                                            <span className="block text-[0.72rem] text-[var(--color-text-muted)] uppercase font-semibold tracking-wider mb-0.5">{item.label}</span>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                    className="text-[0.88rem] text-[var(--color-text-primary)] font-medium transition-colors duration-200 hover:text-[var(--color-accent-1)]"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span className="text-[0.88rem] text-[var(--color-text-primary)] font-medium">{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <form className="card p-7" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="name" className="block text-[0.82rem] font-semibold mb-1.5 text-[var(--color-text-secondary)]">Full Name</label>
                                    <input type="text" id="name" name="name" className="form-input" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required placeholder="Your full name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-[0.82rem] font-semibold mb-1.5 text-[var(--color-text-secondary)]">Email</label>
                                    <input type="email" id="email" name="email" className="form-input" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-[0.82rem] font-semibold mb-1.5 text-[var(--color-text-secondary)]">Subject</label>
                                <input type="text" id="subject" name="subject" className="form-input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} required placeholder="How can I help?" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block text-[0.82rem] font-semibold mb-1.5 text-[var(--color-text-secondary)]">Message</label>
                                <textarea id="message" name="message" rows={4} className="form-input resize-y min-h-[100px]" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required placeholder="Tell me about your project or opportunity..."></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[var(--radius-lg)] font-semibold text-[0.9rem] transition-all duration-300 gradient-bg text-white shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(99,102,241,0.35)] ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'sent' ? '✓ Message Sent!' : status === 'error' ? '❌ Error! Try Again' : 'Send Message'}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
