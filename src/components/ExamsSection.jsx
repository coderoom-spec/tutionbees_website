import React from 'react';
import { motion } from 'framer-motion';
import { Award, ClipboardCheck, GraduationCap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const examsList = [
    { title: "PSAT Exam", icon: <Award size={32} />, path: "/exams/psat" },
    { title: "SAT Exam", icon: <GraduationCap size={32} />, path: "/exams/sat" },
    { title: "ACT Exam", icon: <ClipboardCheck size={32} />, path: "/exams/act" },
    { title: "AP TESTS", icon: <CheckCircle size={32} />, path: "/exams/ap" },
    { title: "SSAT EXAM", icon: <Award size={32} />, path: "/exams/ssat" },
    { title: "11 + EXAM", icon: <GraduationCap size={32} />, path: "/exams/11-plus" },
    { title: "13 + EXAM", icon: <GraduationCap size={32} />, path: "/exams/13-plus" },
    { title: "NAPLAN", icon: <ClipboardCheck size={32} />, path: "/exams/naplan" },
    { title: "IELTS", icon: <GraduationCap size={32} />, path: "/exams/ielts" },
    { title: "TOEFL", icon: <GraduationCap size={32} />, path: "/exams/toefl" },
    { title: "NEET", icon: <Award size={32} />, path: "/exams/neet" },
    { title: "JEE", icon: <Award size={32} />, path: "/exams/jee" },
];

const ExamsSection = () => {
    return (
        <section className="exams-section" style={{ padding: '100px 0', background: 'white' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">ENTRANCE & COMPETITIVE EXAMS</h2>
                    <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Ace Your Global Exams with Expert Training</h3>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '18px' }}>
                        We provide specialized test prep for international entrance exams, ensuring you're fully prepared to secure admissions and certifications.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '30px' }}>
                    {examsList.map((exam, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="exam-card-detailed"
                            style={{
                                background: '#fff',
                                padding: '40px 30px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '20px',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                background: 'rgba(243, 146, 0, 0.1)',
                                color: 'var(--accent-red)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {exam.icon}
                            </div>
                            <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary-blue)' }}>{exam.title}</h4>
                            <p style={{ color: '#666', fontSize: '15px' }}>Expert coaching and practice materials tailored for {exam.title} success.</p>
                            <Link to={exam.path} className="btn btn-outline" style={{ marginTop: '10px', width: '100%', borderRadius: '8px' }}>
                                Learn More
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExamsSection;
