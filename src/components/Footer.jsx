import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="main-footer" style={{ background: '#1a1a1a', color: '#999', paddingTop: '0' }}>
            <div className="container footer-grid" style={{ paddingBottom: '40px', paddingTop: '60px' }}>
                <div className="footer-col about-col">
                    <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', background: 'white', padding: '8px', borderRadius: '4px' }}>
                        <img
                            src="/Tution bees logo.jpg"
                            alt="Tuition Bees Logo"
                            style={{
                                height: '40px',
                                display: 'block'
                            }}
                        />
                    </Link>
                    <p style={{ lineHeight: '1.8', fontSize: '14px' }}>
                        Our mission is to provide quality teaching to help students achieve their dream scores. We offer 1-on-1 online tutoring for various curriculums and subjects globally, ensuring personalized attention and academic excellence.
                    </p>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: 'white', marginBottom: '25px', fontWeight: '700' }}>Curriculum</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/cbse" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>CBSE</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/icse-isc" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>ICSE/ISC</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/igcse" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>IGCSE</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/ib" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>INTERNATIONAL BACCALAUREATE - IB</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/us" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>US CURRICULUM</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/uk" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>UK CURRICULUM</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/australian" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>AUSTRALIAN CURRICULUM</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/singapore" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>SINGAPORE CURRICULUM</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/canadian" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>CANADIAN CURRICULUM</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/a-level" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>AS AND A LEVEL</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/curriculum/caie-edexcel" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>CAIE & EDEXCEL</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: 'white', marginBottom: '25px', fontWeight: '700' }}>Subjects</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/math" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Math Tuition</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/science" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Science Tuition</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/english" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>English Tuition</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/physics" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Physics Tuition</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/chemistry" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Chemistry Tuition</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/subjects/computer-science" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Computer Science</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/study-portal" style={{ color: '#999', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>Study Portal</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 style={{ color: 'white', marginBottom: '25px', fontWeight: '700' }}>Exams</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/psat" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>PSAT Exam</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/sat" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>SAT Exam</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/act" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>ACT Exam</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/ielts" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>IELTS</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/naplan" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>NAPLAN</Link></li>
                        <li style={{ marginBottom: '12px' }}><Link to="/exams/jee" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>JEE</Link></li>
                    </ul>
                </div>
            </div>

            {/* Contact Details Bar */}
            <div style={{ background: '#222', padding: '40px 0', borderTop: '1px solid #333' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <MapPin size={24} color="var(--accent-red)" style={{ marginTop: '5px' }} />
                        <span style={{ fontSize: '13px', lineHeight: '1.5' }}>
                            2nd floor, GM COMPLEX, Mettupalayam Rd,<br />
                            Themaiyan Street, Koundampalayam,<br />
                            Coimbatore, Tamil Nadu 641030
                        </span>
                    </div>
                    <a href="tel:+918122867303" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                        <Phone size={24} color="var(--accent-red)" />
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>+91 81228 67303</span>
                    </a>
                    <a href="mailto:info@tutionbees.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                        <Mail size={24} color="var(--accent-red)" />
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>info@tutionbees.com</span>
                    </a>
                    <a href="https://wa.me/918122867303?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20online%20tutoring%20services." target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>WhatsApp Support</span>
                    </a>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{ background: '#111', padding: '20px 0' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <p style={{ fontSize: '13px', margin: 0 }}>&copy; {new Date().getFullYear()} Tuition Bees Online Tutoring. All rights reserved.</p>
                    <div className="social-links" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                        <a href="#" style={{ color: 'white' }}><Facebook size={20} /></a>
                        <a href="#" style={{ color: 'white' }}><Youtube size={20} /></a>
                        <a href="#" style={{ color: 'white' }}><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
