import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Section from './Section';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import '../styles/Experience.css';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <Section id="experience" className="experience-section">
            <h2 className="section-title">{t.experience.title}</h2>

            <div className="timeline">
                {t.experience.items.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="timeline-item glass-card"
                    >
                        <div className="timeline-header">
                            <div className="role-company">
                                <h3>{job.role}</h3>
                                <h4>{job.company}</h4>
                            </div>
                            <div className="date-badge">
                                <Calendar size={16} />
                                <span>{job.period}</span>
                            </div>
                        </div>

                        <p className="job-description">{job.description}</p>

                        <div className="tech-stack">
                            {job.technologies.map((tech, i) => (
                                <span key={i} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
