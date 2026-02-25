import React from 'react';
import { UserCheck, Clock, Users, FileSearch, MessageSquare, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featureCards = [
    {
        icon: <UserCheck size={32} />,
        title: "Elite Academic Mentors",
        text: "Connect with top-tier educators regardless of your location. We bring you subject-matter specialists who are dedicated to driving academic excellence."
    },
    {
        icon: <Clock size={32} />,
        title: "Seamless Flexibility",
        text: "Education shouldn't be a burden. Book sessions that align with your lifestyle, saving hours of travel time while maintaining a consistent learning rhythm."
    },
    {
        icon: <Users size={32} />,
        title: "Focused One-on-One Engagement",
        text: "Every lesson is tailored to your unique needs. We provide dedicated attention that addresses specific challenges in real-time for faster mastery."
    },
    {
        icon: <FileSearch size={32} />,
        title: "Strategic Progress Tracking",
        text: "Data-driven learning leads to better results. With regular assessments and detailed tracking, we identify precise growth areas for every student."
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Continuous Feedback Loop",
        text: "Success is a collaborative effort. Receive transparent feedback after every session, keeping parents and students synced on goals and milestones."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Measurable Academic Growth",
        text: "From boosting exam scores to fostering lifelong curiosity, our results speak for themselves. We empower students with the tools to excel under any board."
    }
];

const AdvantagesSection = () => {
    return (
        <div className="advantages-container">
            {/* Section 1: Features Grid */}
            <section className="features-grid-section" style={{ padding: '100px 0', background: '#fcfcfc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: 'clamp(32px, 5vw, 42px)',
                            fontWeight: '900',
                            color: '#111',
                            lineHeight: '1.1',
                            marginBottom: '20px',
                            textTransform: 'uppercase'
                        }}>
                            Elevating Education: Why Online Tutoring <br />
                            <span style={{ color: 'var(--accent-red)' }}>Outperforms Traditional Home Visits</span>
                        </h2>
                        <p style={{ color: '#666', fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
                            Discover a smarter, more efficient way to learn that brings the world's best resources directly to your screen.
                        </p>
                    </div>

                    <div className="grid grid-3">
                        {featureCards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="benefit-card"
                                style={{
                                    background: 'white',
                                    padding: '40px 30px',
                                    borderRadius: '16px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    border: '1px solid #ffffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    marginBottom: '20px',
                                    color: 'white',
                                    background: 'var(--accent-red)',
                                    width: '64px',
                                    height: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    boxShadow: '0 8px 16px rgba(192, 18, 1, 0.2)'
                                }}>
                                    {card.icon}
                                </div>
                                <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px', color: '#111' }}>{card.title}</h4>
                                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Exam Prep Block */}
            <section className="exam-prep-section" style={{ padding: '100px 0', background: 'white' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            style={{ position: 'relative' }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '-20px',
                                width: '100px',
                                height: '100px',
                                background: 'var(--accent-red)',
                                opacity: 0.1,
                                borderRadius: '50%',
                                zIndex: 0
                            }}></div>
                            <img
                                src="/tutoring-illustration.webp"
                                alt="Online Tutoring Illustration"
                                style={{
                                    width: '100%',
                                    borderRadius: '24px',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.05)'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                width: '150px',
                                height: '150px',
                                background: 'var(--primary-blue)',
                                opacity: 0.05,
                                borderRadius: '24px',
                                transform: 'rotate(15deg)',
                                zIndex: 0
                            }}></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span style={{
                                color: 'var(--accent-red)',
                                fontWeight: '700',
                                fontSize: '14px',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '15px'
                            }}>Exam Excellence</span>
                            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: '900', color: '#111', lineHeight: '1.2', marginBottom: '25px' }}>
                                Navigate Your Exams with <br />
                                <span style={{ color: 'var(--accent-red)' }}>Confidence and Absolute Clarity</span>
                            </h2>
                            <p style={{ fontSize: '17px', color: '#555', lineHeight: '1.8', marginBottom: '35px' }}>
                                Turn the pressure of high-stakes testing into a showcase of your true potential. Our structured approach specializes in streamlining preparation for major school boards like <strong>CBSE and ICSE</strong>, as well as competitive challenges like <strong>SAT, JEE, and NEET</strong>. By focusing on deep conceptual understanding and extensive practice, we help students walk into every exam hall with absolute calmness.
                            </p>
                            <Link to="/book-free-demo" style={{ textDecoration: 'none' }}>
                                <button className="btn btn-accent" style={{
                                    padding: '18px 45px',
                                    fontSize: '16px',
                                    borderRadius: '50px',
                                    fontWeight: '800',
                                    boxShadow: '0 10px 25px rgba(192, 18, 1, 0.3)',
                                    transition: 'all 0.3s'
                                }}>
                                    UNLOCK YOUR FULL POTENTIAL
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdvantagesSection;
