import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from './Section';
import { User, Code2, Database } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <Section id="about" className="about-section">
            <div className="about-grid">
                <div className="about-text">
                    <h2>{t.about.title}</h2>
                    <p>{t.about.description}</p>
                </div>

                <div className="about-stats">
                    <div className="stat-card glass-card">
                        <Code2 size={32} className="stat-icon" />
                        <h3>Backend</h3>
                        <p>Specialist</p>
                    </div>
                    <div className="stat-card glass-card">
                        <Database size={32} className="stat-icon" />
                        <h3>API</h3>
                        <p>Architecture</p>
                    </div>
                    <div className="stat-card glass-card">
                        <User size={32} className="stat-icon" />
                        <h3>2+ Years</h3>
                        <p>Experience</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
