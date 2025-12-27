import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from './Section';
import { GraduationCap, Code } from 'lucide-react';
import '../styles/EducationSkills.css';

const EducationSkills = () => {
    const { t } = useLanguage();

    return (
        <div className="grid-container container">
            <Section id="education" className="col-education">
                <h2 className="section-title-small">
                    <GraduationCap className="icon" /> {t.education.title}
                </h2>
                <div className="edu-card glass-card">
                    {t.education.items.map((edu, idx) => (
                        <div key={idx} className="edu-item">
                            <h3>{edu.institution}</h3>
                            <p className="degree">{edu.degree}</p>
                            <span className="period">{edu.period}</span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="skills" className="col-skills">
                <h2 className="section-title-small">
                    <Code className="icon" /> {t.skills.title}
                </h2>
                <div className="skills-grid">
                    {t.skills.items.map((skill, idx) => (
                        <div key={idx} className="skill-card glass-card">
                            {skill}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default EducationSkills;
