import React from 'react';
import { motion } from 'framer-motion';
import {
    Calculator, Microscope, BookText, Globe, Atom, FlaskConical, Dna, Cpu,
    Sigma, Activity, BarChart3, Triangle, TrendingUp, Coins, Briefcase,
    MessageCircle, MessagesSquare, Languages
} from 'lucide-react';
import { Link } from 'react-router-dom';

const subjectsList = [
    { title: "Math Tuition", icon: <Calculator size={24} />, path: "/subjects/math" },
    { title: "Science Tuition", icon: <Microscope size={24} />, path: "/subjects/science" },
    { title: "English Tuition", icon: <BookText size={24} />, path: "/subjects/english" },
    { title: "Social Studies Tuition", icon: <Globe size={24} />, path: "/subjects/social-studies" },
    { title: "Physics Tuition", icon: <Atom size={24} />, path: "/subjects/physics" },
    { title: "Chemistry Tuition", icon: <FlaskConical size={24} />, path: "/subjects/chemistry" },
    { title: "Biology Tuition", icon: <Dna size={24} />, path: "/subjects/biology" },
    { title: "Computer Science Tuition", icon: <Cpu size={24} />, path: "/subjects/computer-science" },
    { title: "Pre-Algebra / Algebra Tuition", icon: <Sigma size={24} />, path: "/subjects/pre-algebra-algebra" },
    { title: "Pre-Calculus / Calculus Tuition", icon: <Activity size={24} />, path: "/subjects/pre-calculus-calculus" },
    { title: "Statistics Tuition", icon: <BarChart3 size={24} />, path: "/subjects/statistics" },
    { title: "Trigonometry Tuition", icon: <Triangle size={24} />, path: "/subjects/trigonometry" },
    { title: "Economics Tuition", icon: <TrendingUp size={24} />, path: "/subjects/economics" },
    { title: "Accountancy Tuition", icon: <Coins size={24} />, path: "/subjects/accountancy" },
    { title: "Business Studies Tuition", icon: <Briefcase size={24} />, path: "/subjects/business-studies" },
    { title: "French Tuition", icon: <MessageCircle size={24} />, path: "/subjects/french" },
    { title: "Spanish Tuition", icon: <MessagesSquare size={24} />, path: "/subjects/spanish" },
    { title: "Hindi Tuition", icon: <Languages size={24} />, path: "/subjects/hindi" },
];

const OurSubjects = () => {
    return (
        <section className="our-subjects" style={{ padding: '100px 0', background: '#f8f9fa' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">OUR SUBJECTS</h2>
                    <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>Comprehensive 1-on-1 Tutoring for All Major Subjects</h3>
                    <p style={{ maxWidth: '800px', margin: '0 auto', color: '#666', fontSize: '18px' }}>
                        From foundational mathematics to advanced languages, our subject-expert tutors provide personalized online coaching tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-3" style={{ gap: '20px' }}>
                    {subjectsList.map((subject, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            style={{
                                background: '#fff',
                                padding: '25px',
                                borderRadius: '12px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '20px',
                                border: '1px solid #eee'
                            }}
                        >
                            <div style={{ color: 'var(--accent-red)', display: 'flex' }}>
                                {subject.icon}
                            </div>
                            <Link to={subject.path} style={{ fontWeight: '700', color: '#333', fontSize: '16px', flexGrow: 1 }}>
                                {subject.title}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurSubjects;
