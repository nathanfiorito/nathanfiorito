import React, { useEffect } from 'react';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import EducationSkills from './components/EducationSkills';
import Footer from './components/Footer';

function App() {
    const { t, toggleLanguage, language } = useLanguage(); // Keep useLanguage if it's still needed for Navbar/Footer or other components

    // Smooth scroll fix for anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                e.preventDefault();
                const id = target.getAttribute('href');
                const element = document.querySelector(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };
        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="app-container">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <EducationSkills />
            </main>
            <Footer />
        </div>
    );
}

export default App;
