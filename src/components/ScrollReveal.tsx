import { useEffect, useRef, ReactNode } from 'react'

interface Props {
    children: ReactNode
    delay?: number
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        let timeoutId: number | undefined
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    timeoutId = window.setTimeout(() => {
                        el.classList.add('revealed')
                    }, delay)
                    observer.unobserve(el)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )
        observer.observe(el)
        return () => {
            observer.disconnect()
            if (timeoutId) window.clearTimeout(timeoutId)
        }
    }, [delay])

    return (
        <div ref={ref} className="scroll-reveal">
            {children}
        </div>
    )
}
