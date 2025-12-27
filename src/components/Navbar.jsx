import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css'; // We'll create this specific CSS file

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.about, href: '#about' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.education, href: '#education' },
        { name: t.nav.skills, href: '#skills' },
    ];

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">
                    Nathan<span>Fiorito</span>.
                </a>

                <div className="desktop-nav">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
                        <Globe size={18} />
                        <span>{language.toUpperCase()}</span>
                    </button>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mobile-menu glass-card"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="mobile-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mobile-lang-toggle" onClick={toggleLanguage}>
                                Current: {language === 'en' ? 'English' : 'Português'} (Tap to switch)
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
