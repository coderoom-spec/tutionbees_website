import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="subpage-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        CONTACT US | COIMBATORE TUITION CENTER
                    </motion.h1>
                    <p>We're here to help you achieve your academic goals.</p>
                </div>
            </section>

            <section className="contact-content-section">
                <div className="container">
                    <div className="content-wrapper">
                        <div className="main-content">
                            <h2>Get in Touch</h2>
                            <p>Have questions about our tutoring programs? Our team is available 24/7 to assist you. Fill out the form or reach us via our contact details.</p>

                            <div className="contact-info-grid">
                                <a href="mailto:info@tutionbees.com" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="icon-circle"><Mail size={24} /></div>
                                    <div>
                                        <h4>Email Us</h4>
                                        <p>info@tutionbees.com</p>
                                    </div>
                                </a>
                                <a href="tel:+918122867303" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="icon-circle"><Phone size={24} /></div>
                                    <div>
                                        <h4>Call Us</h4>
                                        <p>+91 81228 67303</p>
                                    </div>
                                </a>
                                <a href="https://wa.me/918122867303?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20online%20tutoring%20services." target="_blank" rel="noopener noreferrer" className="contact-item" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="icon-circle" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '42px', height: '42px' }} />
                                    </div>
                                    <div>
                                        <h4>WhatsApp</h4>
                                        <p>Chat with us now</p>
                                    </div>
                                </a>
                            </div>

                            <div className="map-placeholder">
                                <div className="map-box">
                                    <iframe
                                        src="https://maps.google.com/maps?q=2nd%20floor,%20GM%20COMPLEX,%20Mettupalayam%20Rd,%20Themaiyan%20Street,%20Koundampalayam,%20Coimbatore,%20Tamil%20Nadu%20641030&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                                <div style={{ marginTop: '20px', padding: '20px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
                                    <h5 style={{ color: 'var(--primary-blue)', marginBottom: '5px', fontSize: '16px' }}>Main Office</h5>
                                    <p style={{ color: '#444', fontSize: '14px' }}>
                                        2nd floor, GM COMPLEX, Mettupalayam Rd,<br />
                                        Themaiyan Street, Koundampalayam,<br />
                                        Coimbatore, Tamil Nadu 641030
                                    </p>
                                    <p style={{ color: '#666', fontSize: '13px', marginTop: '5px' }}>Availability: 24/7 Online Support</p>
                                </div>
                            </div>
                        </div>

                        <aside className="sidebar-form">
                            <LeadForm
                                title="Send a Message"
                                inquiryType="General Inquiry"
                                showSubject={true}
                                showMessage={true}
                                buttonText="SEND MESSAGE"
                            />
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
