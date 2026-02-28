import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, MessageSquare, Lightbulb } from 'lucide-react';
import LeadForm from '../components/LeadForm';

const StudyPortal = () => {
    const resources = [
        { title: "E-Books & Notes", icon: <BookOpen size={24} />, desc: "Download comprehensive study materials and colored notes for all major subjects." },
        { title: "Mock Tests", icon: <FileText size={24} />, desc: "Practise with our timed mock tests designed by subject experts to simulate real exams." },
        { title: "Video Lessons", icon: <Video size={24} />, desc: "Access recorded sessions and conceptual video explainers for complex topics." },
        { title: "Previous Year Papers", icon: <Download size={24} />, desc: "Get all past papers for CBSE, IGCSE, SAT, and other competitive exams." },
        { title: "Doubt Clearing", icon: <MessageSquare size={24} />, desc: "Post your questions in our student forum and get answers from certified tutors." },
        { title: "Study Strategies", icon: <Lightbulb size={24} />, desc: "Learn time management and memory techniques to boost your performance." },
    ];

    return (
        <div className="study-portal-page">
            <section className="home-conversion" style={{
                background: 'linear-gradient(135deg, #fd6730 0%, #ff930f 100%)',
                padding: '100px 0',
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Abstract Circles */}
                <div className="abstract-circle" style={{ position: 'absolute', top: '-50px', left: '-50px', width: '300px', height: '300px', border: '40px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                <div className="abstract-circle" style={{ position: 'absolute', bottom: '-100px', right: '10%', width: '400px', height: '400px', border: '60px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                <div className="container conversion-grid" style={{ alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span style={{ fontSize: '18px', fontWeight: '500', opacity: 0.9 }}>Digital Learning Hub</span>
                        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0', lineHeight: '1.1' }}>
                            WELCOME TO THE <br />STUDY PORTAL
                        </h1>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', opacity: 0.9 }}>
                            Unlock premium educational resources, interactive tests, and expert guidance.
                            Everything you need to boost your grades and master your curriculum, all in one place.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <LeadForm
                            inquiryType="Portal Access"
                            title="ACCESS PREMIUM RESOURCES"
                        />
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: '80px 0', background: '#f8fbff' }}>
                <div className="container text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#1a237e', marginBottom: '20px' }}>Your One-Stop Learning Center</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: '#555', fontSize: '17px' }}>
                        The TuitionBees Study Portal provides students with modern tools and high-quality content to excel in their academic journey.
                    </p>
                </div>

                <div className="container">
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {resources.map((res, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    background: 'white',
                                    padding: '40px',
                                    borderRadius: '20px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                                    border: '1px solid #e1e8f0',
                                    textAlign: 'center'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'rgba(26, 35, 126, 0.05)',
                                    color: '#1a237e',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 25px'
                                }}>
                                    {res.icon}
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '15px' }}>{res.title}</h3>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{res.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '100px 0', background: 'white' }}>
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(135deg, #fdfbf7 0%, #fefcfb 100%)',
                        padding: '60px',
                        borderRadius: '30px',
                        border: '1px solid #fee2e2',
                        textAlign: 'center'
                    }}>
                        <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#111', marginBottom: '30px' }}>How to Join the Portal?</h2>
                        <div className="grid grid-3" style={{ gap: '40px', marginTop: '50px' }}>
                            <div>
                                <span style={{ fontSize: '48px', fontWeight: '900', color: 'rgba(26, 35, 126, 0.1)', display: 'block', marginBottom: '10px' }}>01</span>
                                <h4 style={{ fontSize: '20px', fontWeight: '800' }}>Register</h4>
                                <p style={{ color: '#555', marginTop: '10px' }}>Sign up for our online tutoring services and get portal credentials.</p>
                            </div>
                            <div>
                                <span style={{ fontSize: '48px', fontWeight: '900', color: 'rgba(26, 35, 126, 0.1)', display: 'block', marginBottom: '10px' }}>02</span>
                                <h4 style={{ fontSize: '20px', fontWeight: '800' }}>Log In</h4>
                                <p style={{ color: '#555', marginTop: '10px' }}>Access the dashboard using your unique student ID and password.</p>
                            </div>
                            <div>
                                <span style={{ fontSize: '48px', fontWeight: '900', color: 'rgba(26, 35, 126, 0.1)', display: 'block', marginBottom: '10px' }}>03</span>
                                <h4 style={{ fontSize: '20px', fontWeight: '800' }}>Start Learning</h4>
                                <p style={{ color: '#555', marginTop: '10px' }}>Explore thousands of pages of content and practise at your own pace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudyPortal;
