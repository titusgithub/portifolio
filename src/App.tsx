import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Competencies from './components/Competencies'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved ? saved === 'dark' : true
    })

    useEffect(() => {
        const root = document.documentElement
        if (darkMode) {
            root.classList.remove('light')
        } else {
            root.classList.add('light')
        }
        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    return (
        <div className="relative">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="overflow-x-hidden">
                <Hero />
                <About />
                <Competencies />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
                <Footer />
            </main>
        </div>
    )
}

export default App
