import React from 'react';
import { motion } from 'framer-motion';
import RegistrationForm from '../components/RegistrationForm';
import { Link } from 'react-router-dom';

const BookFreeDemo = () => {
    return (
        <div className="book-demo-page" style={{ background: '#fff' }}>
            {/* Custom Hero Banner matching screenshot */}
            <section style={{
                minHeight: '450px',
                background: 'var(--accent-red)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                padding: '100px 0 60px',
                overflow: 'hidden'
            }}>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-flex-container" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '30px'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ color: 'white', flex: '1 1 300px' }}
                        >
                            <h1 style={{
                                fontSize: 'clamp(32px, 8vw, 64px)',
                                fontWeight: '900',
                                lineHeight: '1',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                textShadow: '0 5px 15px rgba(0,0,0,0.2)'
                            }}>
                                BOOK FREE DEMO <br />ONLINE CLASSES
                            </h1>
                            <nav style={{ marginTop: '20px', fontSize: '15px' }}>
                                <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>Registration Form</span>
                            </nav>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                flex: '1 1 300px',
                                display: 'flex',
                                justifyContent: 'center',
                                maxWidth: '100%'
                            }}
                        >
                            <img
                                src="/registration-header.png"
                                alt="Registration"
                                style={{
                                    width: '100%',
                                    maxWidth: '350px',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.15))'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Decorative background shape */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    background: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                    opacity: 0.03,
                    zIndex: 2
                }}></div>
            </section>

            {/* Form Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <RegistrationForm />
                </div>
            </section>
        </div>
    );
};

export default BookFreeDemo;
