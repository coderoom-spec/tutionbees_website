import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Mail, Phone } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileSubmenu = (menu) => {
        if (activeMobileSubmenu === menu) {
            setActiveMobileSubmenu(null);
        } else {
            setActiveMobileSubmenu(menu);
        }
    };

    const navLinks = (isMobile = false) => (
        <ul className={isMobile ? "mobile-nav" : ""}>
            <li className={`has-dropdown ${isMobile && activeMobileSubmenu === 'about' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        toggleMobileSubmenu('about');
                    }
                }}>
                    ABOUT <ChevronDown size={14} />
                </a>
                <ul className="dropdown">
                    <li><Link to="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>WHO WE ARE</Link></li>
                    <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link></li>
                </ul>
            </li>
            <li className={`has-mega ${isMobile && activeMobileSubmenu === 'curriculum' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        toggleMobileSubmenu('curriculum');
                    }
                }}>
                    CURRICULUM <ChevronDown size={14} />
                </a>
                <div className="mega-menu">
                    <ul className="mega-list">
                        <li><Link to="/curriculum/cbse" onClick={() => setIsMobileMenuOpen(false)}>CBSE</Link></li>
                        <li><Link to="/curriculum/icse-isc" onClick={() => setIsMobileMenuOpen(false)}>ICSE/ISC</Link></li>
                        <li><Link to="/curriculum/igcse" onClick={() => setIsMobileMenuOpen(false)}>IGCSE</Link></li>
                        <li><Link to="/curriculum/ib" onClick={() => setIsMobileMenuOpen(false)}>INTERNATIONAL BACCALAUREATE - IB</Link></li>
                        <li><Link to="/curriculum/us" onClick={() => setIsMobileMenuOpen(false)}>US CURRICULUM</Link></li>
                        <li><Link to="/curriculum/uk" onClick={() => setIsMobileMenuOpen(false)}>UK CURRICULUM</Link></li>
                        <li><Link to="/curriculum/australian" onClick={() => setIsMobileMenuOpen(false)}>AUSTRALIAN CURRICULUM</Link></li>
                        <li><Link to="/curriculum/singapore" onClick={() => setIsMobileMenuOpen(false)}>SINGAPORE CURRICULUM</Link></li>
                        <li><Link to="/curriculum/canadian" onClick={() => setIsMobileMenuOpen(false)}>CANADIAN CURRICULUM</Link></li>
                        <li><Link to="/curriculum/a-level" onClick={() => setIsMobileMenuOpen(false)}>AS AND A LEVEL</Link></li>
                        <li><Link to="/curriculum/caie-edexcel" onClick={() => setIsMobileMenuOpen(false)}>CAIE & EDEXCEL</Link></li>
                    </ul>
                </div>
            </li>
            <li className={`has-mega ${isMobile && activeMobileSubmenu === 'subjects' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        toggleMobileSubmenu('subjects');
                    }
                }}>
                    SUBJECTS <ChevronDown size={14} />
                </a>
                <div className="mega-menu" style={{ width: '1000px' }}>
                    <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                        <ul>
                            <li><Link to="/subjects/math" onClick={() => setIsMobileMenuOpen(false)}>Math Tuition</Link></li>
                            <li><Link to="/subjects/science" onClick={() => setIsMobileMenuOpen(false)}>Science Tuition</Link></li>
                            <li><Link to="/subjects/english" onClick={() => setIsMobileMenuOpen(false)}>English Tuition</Link></li>
                            <li><Link to="/subjects/social-studies" onClick={() => setIsMobileMenuOpen(false)}>Social Studies Tuition</Link></li>
                            <li><Link to="/subjects/physics" onClick={() => setIsMobileMenuOpen(false)}>Physics Tuition</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/subjects/chemistry" onClick={() => setIsMobileMenuOpen(false)}>Chemistry Tuition</Link></li>
                            <li><Link to="/subjects/biology" onClick={() => setIsMobileMenuOpen(false)}>Biology Tuition</Link></li>
                            <li><Link to="/subjects/computer-science" onClick={() => setIsMobileMenuOpen(false)}>Computer Science Tuition</Link></li>
                            <li><Link to="/subjects/pre-algebra-algebra" onClick={() => setIsMobileMenuOpen(false)}>Pre-Algebra / Algebra Tuition</Link></li>
                            <li><Link to="/subjects/pre-calculus-calculus" onClick={() => setIsMobileMenuOpen(false)}>Pre-Calculus / Calculus Tuition</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/subjects/statistics" onClick={() => setIsMobileMenuOpen(false)}>Statistics Tuition</Link></li>
                            <li><Link to="/subjects/trigonometry" onClick={() => setIsMobileMenuOpen(false)}>Trigonometry Tuition</Link></li>
                            <li><Link to="/subjects/economics" onClick={() => setIsMobileMenuOpen(false)}>Economics Tuition</Link></li>
                            <li><Link to="/subjects/accountancy" onClick={() => setIsMobileMenuOpen(false)}>Accountancy Tuition</Link></li>
                            <li><Link to="/subjects/business-studies" onClick={() => setIsMobileMenuOpen(false)}>Business Studies Tuition</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/subjects/french" onClick={() => setIsMobileMenuOpen(false)}>French Tuition</Link></li>
                            <li><Link to="/subjects/spanish" onClick={() => setIsMobileMenuOpen(false)}>Spanish Tuition</Link></li>
                            <li><Link to="/subjects/hindi" onClick={() => setIsMobileMenuOpen(false)}>Hindi Tuition</Link></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className={`has-mega ${isMobile && activeMobileSubmenu === 'exams' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        toggleMobileSubmenu('exams');
                    }
                }}>
                    EXAMS <ChevronDown size={14} />
                </a>
                <div className="mega-menu">
                    <ul className="mega-list">
                        <li><Link to="/exams/psat" onClick={() => setIsMobileMenuOpen(false)}>PSAT Exam</Link></li>
                        <li><Link to="/exams/sat" onClick={() => setIsMobileMenuOpen(false)}>SAT Exam</Link></li>
                        <li><Link to="/exams/act" onClick={() => setIsMobileMenuOpen(false)}>ACT Exam</Link></li>
                        <li><Link to="/exams/ap" onClick={() => setIsMobileMenuOpen(false)}>AP TESTS</Link></li>
                        <li><Link to="/exams/ssat" onClick={() => setIsMobileMenuOpen(false)}>SSAT EXAM</Link></li>
                        <li><Link to="/exams/11-plus" onClick={() => setIsMobileMenuOpen(false)}>11 + EXAM</Link></li>
                        <li><Link to="/exams/13-plus" onClick={() => setIsMobileMenuOpen(false)}>13 + EXAM</Link></li>
                        <li><Link to="/exams/naplan" onClick={() => setIsMobileMenuOpen(false)}>NAPLAN</Link></li>
                        <li><Link to="/exams/ielts" onClick={() => setIsMobileMenuOpen(false)}>IELTS</Link></li>
                        <li><Link to="/exams/toefl" onClick={() => setIsMobileMenuOpen(false)}>TOEFL</Link></li>
                        <li><Link to="/exams/neet" onClick={() => setIsMobileMenuOpen(false)}>NEET</Link></li>
                    </ul>
                </div>
            </li>
            <li className={`has-dropdown ${isMobile && activeMobileSubmenu === 'study-portal' ? 'open' : ''}`}>
                <a href="#" onClick={(e) => {
                    if (isMobile) {
                        e.preventDefault();
                        toggleMobileSubmenu('study-portal');
                    }
                }}>
                    STUDY PORTAL <ChevronDown size={14} />
                </a>
                <ul className="dropdown">
                    <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link></li>
                </ul>
            </li>
        </ul>
    );

    return (
        <>
            {/* Top Contact Bar */}
            <div className={`top-bar ${isScrolled ? 'hidden' : ''}`} style={{
                background: 'var(--primary-blue)',
                color: 'white',
                padding: '8px 0',
                fontSize: '13px',
                transition: 'all 0.3s ease'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '25px' }}>
                    <a href="tel:+918122867303" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Phone size={14} /> +91 81228 67303
                    </a>
                    <a href="mailto:info@tutionbees.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mail size={14} /> info@tutionbees.com
                    </a>
                    <a href="https://wa.me/918122867303?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20online%20tutoring%20services." target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '18px', height: '18px' }} /> WhatsApp Us
                    </a>
                </div>
            </div>
            <header className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <div className="logo">
                        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <img
                                src="/Tution bees logo.jpg"
                                alt="Tuition Bees Logo"
                                style={{
                                    height: '50px',
                                    width: 'auto',
                                    display: 'block',
                                    padding: '5px 0',
                                    filter: 'brightness(1.1) contrast(1.1)'
                                }}
                            />
                        </Link>
                    </div>

                    <nav className="main-nav">
                        {navLinks(false)}
                    </nav>

                    <div className="header-action">
                        <Link to="/book-free-demo" className="btn btn-accent" onClick={() => setIsMobileMenuOpen(false)}>BOOK A FREE DEMO</Link>
                    </div>

                    <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="mobile-menu-overlay">
                        <nav className="mobile-nav-container">
                            {navLinks(true)}
                        </nav>
                    </div>
                )}

                {/* Fixed Mobile Footer CTA */}
                {!isMobileMenuOpen && (
                    <div className="mobile-fixed-footer">
                        <Link to="/book-free-demo" className="btn btn-accent">BOOK A FREE DEMO</Link>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
