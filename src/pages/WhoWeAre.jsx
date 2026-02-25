import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BookOpen } from 'lucide-react';

const WhoWeAre = () => {
    return (
        <div className="about-page">
            <section className="subpage-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        WHO WE ARE | BEST TUTORING SERVICES
                    </motion.h1>
                    <p>Inspiring academic excellence through personalized online coaching.</p>
                </div>
            </section>

            <section className="about-details">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '60px', alignItems: 'center' }}>
                        <div className="about-image">
                            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" alt="TuitionBees Tutoring Team" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="about-text">
                            <h2 className="section-title" style={{ textAlign: 'left' }}>Our Mission</h2>
                            <p>At TuitionBees, our mission is to provide quality teaching to help students achieve their dream scores. We believe that every student has the potential to excel when given the right tools and guidance.</p>
                            <p>Since our inception, we have taught over 5000+ students across various curriculums including CBSE, ICSE, IGCSE, and IB. Our 1-on-1 tutoring model ensures that each student gets the individual attention they deserve.</p>

                            <div className="value-cards" style={{ marginTop: '30px' }}>
                                <div className="value-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                    <div className="icon-circle" style={{ backgroundColor: 'var(--accent-red)', color: 'white', padding: '10px', borderRadius: '50%' }}><Target size={20} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Personalized Learning</h4>
                                        <p style={{ fontSize: '14px', color: '#666' }}>Tailored study plans that adapt to each student's unique learning pace.</p>
                                    </div>
                                </div>
                                <div className="value-item" style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                    <div className="icon-circle" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '10px', borderRadius: '50%' }}><Users size={20} /></div>
                                    <div>
                                        <h4 style={{ marginBottom: '5px' }}>Expert Tutors</h4>
                                        <p style={{ fontSize: '14px', color: '#666' }}>Passionate educators from around the globe with extensive curriculum knowledge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats bg-light" style={{ padding: '60px 0' }}>
                <div className="container">
                    <div className="grid grid-3" style={{ textAlign: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '48px', color: 'var(--accent-red)' }}>5000+</h2>
                            <p>Students Taught</p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '48px', color: 'var(--primary-blue)' }}>18+</h2>
                            <p>Subjects Covered</p>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '48px', color: 'var(--accent-red)' }}>10+</h2>
                            <p>Curriculums</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeAre;
