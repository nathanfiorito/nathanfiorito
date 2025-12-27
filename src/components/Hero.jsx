import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section className="hero-section">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>

            <div className="container hero-content">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="hero-text"
                >
                    <motion.span variants={item} className="greeting-badge">
                        {t.hero.greeting}
                    </motion.span>

                    <motion.h1 variants={item} className="hero-title">
                        Nathan <br />
                        <span className="text-gradient">Fiorito</span>
                    </motion.h1>

                    <motion.h2 variants={item} className="hero-role">
                        {t.hero.role}
                    </motion.h2>

                    <motion.p variants={item} className="hero-description">
                        {t.hero.description}
                    </motion.p>

                    <motion.div variants={item} className="hero-actions">
                        <a href="mailto:contato@nathanfiorito.com.br" className="btn btn-primary">
                            {t.hero.cta} <ArrowRight size={20} />
                        </a>

                        <div className="social-links">
                            <a href="https://github.com/nathanfiorito" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/nathanfiorito" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:contato@nathanfiorito.com.br" className="social-icon">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div variants={item} className="status-badge">
                        <span className="status-dot"></span>
                        {t.hero.status}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
