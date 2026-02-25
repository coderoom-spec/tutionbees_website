import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ color: 'var(--text-dark)', fontWeight: 900, marginBottom: '5px' }}>BEST ONLINE TUITION & TUTORING SERVICES</h1>
                    <h2 className="hero-subtitle" style={{ fontWeight: 800 }}>EXPERT <span style={{ color: 'var(--accent-red)' }}>CBSE & IGCSE CLASSES</span> IN COIMBATORE</h2>
                    <ul className="hero-features" style={{ marginTop: '20px' }}>
                        <li><ArrowRight size={18} color="var(--accent-red)" /> Trusted by parents and students globally</li>
                        <li><ArrowRight size={18} color="var(--accent-red)" /> 5000+ students taught and counting</li>
                        <li><ArrowRight size={18} color="var(--accent-red)" /> 1-on-1 Online tutoring for CBSE, ICSE, IGCSE, A & AS LEVEL</li>
                    </ul>
                    <p className="cta-text" style={{ fontSize: '20px', margin: '30px 0 20px' }}>Start Learning Today !</p>
                    <div className="hero-btns">
                        <Link to="/book-free-demo" className="btn btn-accent" style={{ padding: '0 30px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>BOOK A FREE DEMO</Link>
                        <Link to="/contact-us" className="btn btn-outline" style={{ padding: '0 30px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>CONTACT US</Link>
                    </div>
                    <div className="reviews-badges" style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '30px', display: 'flex', gap: '30px' }}>
                        <div className="badge">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: '22px', marginBottom: '8px' }} />
                            <span>Reviews 5/5</span>
                            <div className="stars">★★★★★</div>
                        </div>

                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 1, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    {/* Explicit Orange Background Shape (Behind) */}

                    <div className="image-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                        <img
                            src="/tutionbees_hero.webp"
                            alt="TuitionBees Hero Image"
                            style={{
                                position: 'relative',
                                zIndex: 12,
                                borderRadius: '20px',
                                width: '100%',
                                display: 'block'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
