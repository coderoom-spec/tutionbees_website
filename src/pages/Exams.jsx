import React from 'react';
import ExamsSection from '../components/ExamsSection';
import { motion } from 'framer-motion';

const Exams = () => {
    return (
        <div className="exams-page">
            <section className="subpage-hero" style={{ background: 'linear-gradient(135deg, #0d47a1 0%, #002171 100%)' }}>
                <div className="container" style={{ textAlign: 'center', color: 'white', padding: '100px 0' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: '48px', fontWeight: '900', marginBottom: '20px' }}
                    >
                        GLOBAL EXAM PREPARATION
                    </motion.h1>
                    <p style={{ fontSize: '20px', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
                        Specialized coaching for competitive and entrance exams to help you secure admissions in top institutions worldwide.
                    </p>
                </div>
            </section>

            <ExamsSection />

            <section style={{ padding: '80px 0', background: '#f8fbff' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                        <div>
                            <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'var(--primary-blue)', marginBottom: '25px' }}>
                                Why Prepare with Tuition Bees?
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Customized study plans based on student's current level",
                                    "Regular full-length mock tests with detailed feedback",
                                    "Expert tutors specialized in standardized testing",
                                    "Extensive library of practice questions and resources",
                                    "Proven strategies for time management and accuracy"
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', fontSize: '17px', color: '#444' }}>
                                        <span style={{ color: 'var(--accent-red)', fontWeight: 'bold' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', textAlign: 'center' }}>Get a Free Counseling Session</h3>
                            <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Speak with our experts to understand which exam is right for your goals.</p>
                            <div style={{ textAlign: 'center' }}>
                                <a href="/book-free-demo" className="btn btn-accent" style={{ padding: '15px 40px', fontSize: '18px' }}>BOOK NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exams;
