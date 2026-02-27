import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const curricula = [
    {
        title: "CBSE ONLINE TUITION",
        subjects: [
            "Maths tuition", "Science tuition", "Physics tuition", "Chemistry tuition",
            "Biology Tuition", "Computer Tuition", "Accountancy tuition", "Applied Maths tuition",
            "Economics tuition", "Business Studies tuition", "English Tuition", "Hindi Tuition",
            "History Tuition", "Geography Tuition", "Sanskrit Tuition"
        ]
    },
    {
        title: "ICSE / ISC ONLINE TUITION",
        subjects: [
            "Maths tuition", "Science tuition", "Physics tuition", "Chemistry tuition",
            "Biology Tuition", "Computer Science tuition", "Accountancy tuition", "Applied Maths tuition",
            "Economics tuition", "Business Studies tuition", "English Tuition", "Hindi Tuition",
            "History Tuition", "Geography Tuition", "Sanskrit Tuition"
        ]
    },
    {
        title: "IGCSE ONLINE TUITION",
        subjects: [
            "Mathematics tuition", "Additional Mathematics tuition", "English Language tuition", "Combined Science",
            "Chemistry tuition", "Physics tuition", "Biology tuition", "Science tuition",
            "Computer Science tuition", "Business Studies tuition", "Economics tuition",
            "Singapore-Cambridge GCE O Level Tuition", "Singapore-Cambridge GCE A Level Tuition",
            "History Tuition", "Geography Tuition", "Sanskrit Tuition"
        ]
    },
    {
        title: "Edexcel/CIE - AS & A-Level Tuition",
        subjects: [
            "Maths tuition", "Science tuition", "Physics tuition", "Chemistry tuition",
            "Biology Tuition", "Computer Science tuition", "Accountancy tuition", "Applied Maths tuition",
            "Economics tuition", "Business Studies tuition", "English Tuition"
        ]
    },
    {
        title: "IB PYP & MYP Tuition",
        subjects: [
            "Maths tuition", "Science Tuition", "Physics tuition", "Chemistry tuition",
            "Biology Tuition", "Computer Science tuition", "Accountancy tuition", "Applied Maths tuition",
            "Economics tuition", "Business Studies tuition", "English Tuition", "Hindi tuition"
        ]
    },
    {
        title: "IB DP Tuition",
        subjects: [
            "Mathematics tuition", "Additional Mathematics tuition", "English Language tuition", "English Literature tuition",
            "Chemistry tuition", "Physics tuition", "Biology tuition", "Science tuition",
            "Computer Science tuition", "Business Studies tuition", "Economics tuition",
            "Singapore-Cambridge GCE O Level Tuition", "Singapore-Cambridge GCE A Level Tuition"
        ]
    },
    {
        title: "US Curriculum",
        subjects: [
            "Math", "Pre-algebra/Algebra", "Pre-calculus/Calculus", "Statistics",
            "Trigonometry", "Science (Lower grades)", "Social Science", "Environmental Studies",
            "Physics", "Chemistry", "Biology", "Economics", "Literature", "French", "Spanish", "English"
        ]
    },
    {
        title: "Canadian Curriculum",
        subjects: [
            "Mathematics", "Environmental Studies", "Political Science", "Chemistry",
            "Geography", "Computer Science", "History", "Science", "Social Studies",
            "English", "Biology"
        ]
    },
    {
        title: "UK Curriculum",
        subjects: [
            "Mathematics", "English Literature", "English Language", "Biology",
            "Chemistry", "Physics", "Combined Science", "Further Mathematics",
            "Computer Science", "History", "Geography", "Economics", "Business Studies"
        ]
    },
    {
        title: "Australian Curriculum",
        subjects: [
            "Math", "Advanced Math", "Science", "English",
            "Physics", "Chemistry", "Biology", "Economics", "Business Management"
        ]
    },
    {
        title: "Singapore Curriculum",
        subjects: [
            "Mathematics", "Additional Mathematics", "Physics", "Chemistry",
            "Biology", "Science", "Economics", "English Language",
            "Singapore-Cambridge GCE O Level", "Singapore-Cambridge GCE A Level"
        ]
    },
    {
        title: "CAIE & EDEXCEL Tuition",
        subjects: [
            "Mathematics", "Physics", "Chemistry", "Biology",
            "English Language", "English Literature", "Economics", "Business Studies",
            "Further Mathematics", "Computer Science"
        ]
    }
];

const CurriculumCard = ({ item, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayedSubjects = isExpanded ? item.subjects : item.subjects.slice(0, 4);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                delay: index * 0.1,
                layout: { duration: 0.3 }
            }}
            className="curriculum-card"
            style={{
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid #eee',
                background: '#fff',
                height: 'fit-content'
            }}
        >
            <div style={{
                backgroundColor: '#333',
                color: 'white',
                padding: '15px 10px',
                textAlign: 'center',
                fontWeight: '800',
                fontSize: '15px',
                letterSpacing: '0.5px'
            }}>
                {item.title}
            </div>
            <div style={{
                padding: '30px 20px',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                textAlign: 'center'
            }}>
                <motion.div
                    layout
                    style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
                >
                    {displayedSubjects.map((sub, i) => (
                        <motion.div
                            layout
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{
                                color: '#444',
                                fontSize: '15px',
                                fontWeight: '500'
                            }}
                        >
                            {sub}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div style={{ padding: '0 20px 20px' }}>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="btn btn-accent"
                    style={{
                        width: '100%',
                        borderRadius: '4px',
                        padding: '12px',
                        textTransform: 'none',
                        fontWeight: '700'
                    }}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        </motion.div>
    );
};

const SubjectsCurriculums = () => {
    return (
        <section className="subjects-section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title">
                        BEST ONLINE TUTORING SERVICES
                    </h2>
                    <h3 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        color: '#111',
                        marginBottom: '20px',
                        lineHeight: '1.2'
                    }}>
                        Excel in CBSE, IGCSE & ISC with Subject-Certified Tutors
                    </h3>
                    <p style={{
                        maxWidth: '1100px',
                        margin: '0 auto',
                        color: '#555',
                        lineHeight: '1.8',
                        fontSize: '17px'
                    }}>
                        TuitionBees provides the best online classes for students worldwide. We offer tailored academic sessions for various curricula, including CBSE, IGCSE, A LEVEL, ICSE, ISC, IB, Singapore, US, UK, Australian, and Canadian boards. Our expert tutoring services ensure students excel in exams and receive the best academic and career guidance through our comprehensive online coaching classes.
                    </p>
                </div>

                <div className="grid grid-3" style={{ alignItems: 'start' }}>
                    {curricula.map((item, index) => (
                        <CurriculumCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SubjectsCurriculums;
