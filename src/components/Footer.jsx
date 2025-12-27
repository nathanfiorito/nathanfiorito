import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Footer.css';

const Footer = () => {
    const { t } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {year} Nathan Fiorito. {t.footer.rights}
                </p>
                <div className="footer-line"></div>
            </div>
        </footer>
    );
};

export default Footer;
