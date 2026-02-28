import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle, GraduationCap, Users, Clock, BookOpen, Lightbulb, Trophy, Target, ShieldCheck, CreditCard, Smile, Globe, Monitor, ClipboardCheck, TrendingUp } from 'lucide-react';
import LeadForm from '../components/LeadForm';
import { examData } from '../data/examData';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ marginBottom: '10px', border: '1px solid #f0f0f0', borderRadius: '5px', overflow: 'hidden' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '15px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: '#f8f9fa',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontWeight: isOpen ? '800' : '600',
                    color: isOpen ? '#F39200' : '#333'
                }}
            >
                <span>{question}</span>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden', background: 'white' }}
                    >
                        <div style={{ padding: '20px', fontSize: '17px', color: '#444', lineHeight: '1.6' }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const InfoTable = ({ data }) => (
    <div style={{ overflowX: 'auto', marginBottom: '30px', borderRadius: '12px', border: '1px solid #eee', boxShadow: '0 5px 15px rgba(0,0,0,0.02)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i === data.length - 1 ? 'none' : '1px solid #f0f0f0' }}>
                        <td style={{ padding: '18px 25px', fontWeight: '800', background: '#fcfcfc', color: '#111', width: '35%', fontSize: '15px', borderRight: '1px solid #f0f0f0' }}>{row.label}</td>
                        <td style={{ padding: '18px 25px', color: '#333', fontSize: '17px', lineHeight: '1.5' }}>{row.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const ExamPage = () => {
    const { name } = useParams();
    const data = examData[name.toLowerCase()];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);

    if (!data) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Exam details coming soon...</h2>
                <Link to="/exams" className="btn btn-accent">Back to Exams</Link>
            </div>
        );
    }

    const whyChooseIcons = [
        "/images/icons/17-10-2024_05-41-35_tutor.png",
        "/images/icons/17-10-2024_05-49-03_training.png",
        "/images/icons/17-10-2024_05-50-28_working-hours.png",
        "/images/icons/17-10-2024_05-52-07_training_(1).png",
        "/images/icons/17-10-2024_05-53-13_interaction.png",
        "/images/icons/17-10-2024_05-54-02_progress-report.png",
        "/images/icons/17-10-2024_05-55-46_remote-access.png",
        "/images/icons/17-10-2024_05-57-04_growth.png"
    ];

    return (
        <div className="exam-page">
            {/* Red Hero Section */}
            <section className="exam-hero" style={{
                background: 'linear-gradient(135deg, #F39200 0%, #e68a00 100%)',
                padding: '80px 0',
                color: 'white',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '50px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <span style={{ fontSize: '18px', fontWeight: '500', opacity: 0.9 }}>{data.hero.subtitle}</span>
                            <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0', lineHeight: '1.1' }}>
                                {data.hero.title}
                            </h1>
                            <p style={{ fontSize: '19px', lineHeight: '1.6', opacity: 1, maxWidth: '550px' }}>
                                {data.hero.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <LeadForm
                                inquiryType={`${data.title} Coaching`}
                                title="BOOK A FREE DEMO TODAY!"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section style={{ padding: '60px 0 40px' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#F39200', marginBottom: '25px' }}>{data.intro.title}</h2>
                            <p style={{ fontSize: '20px', color: '#222', lineHeight: '1.8' }}>
                                {data.intro.content}
                            </p>
                            <div style={{ marginTop: '30px' }}>
                                <Link to="/book-free-demo" className="btn btn-accent" style={{ background: '#F39200', padding: '12px 35px', fontSize: '16px', fontWeight: '800' }}>BOOK A FREE DEMO</Link>
                            </div>
                        </div>
                        <div>
                            <img src={data.intro.image} alt={data.title} style={{ width: '100%', borderRadius: '15px' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section style={{ padding: '40px 0', background: '#fcfcfc' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '40px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#111', marginBottom: '20px' }}>{data.keyFeatures.title}</h2>
                            <p style={{ marginBottom: '30px', color: '#444', fontSize: '18px' }}>{data.keyFeatures.intro}</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {data.keyFeatures.features.map((feature, i) => (
                                    <div key={i}>
                                        <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#F39200', marginBottom: '8px' }}>
                                            {feature.title}
                                        </h4>
                                        <p style={{ color: '#333', fontSize: '18px', lineHeight: '1.7' }}>
                                            {feature.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <img src={data.keyFeatures.illustration} alt="Features" style={{ maxWidth: '400px', width: '100%', margin: '0 auto' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Scoring & Additional Info */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ background: 'white', borderRadius: '15px', padding: '0px' }}>
                        <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#111', marginBottom: '30px', textAlign: 'center' }}>Exam Structure & Scoring</h3>

                        {data.detailsTable ? (
                            <InfoTable data={data.detailsTable} />
                        ) : (
                            <div style={{ background: 'white', border: '1px solid #eee', borderRadius: '15px', padding: '40px 30px', boxShadow: '0 5px 30px rgba(0,0,0,0.03)', marginBottom: '30px' }}>
                                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#111', marginBottom: '25px' }}>{data.scoringSystem.title}</h3>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {data.scoringSystem.points.map((p, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '12px', color: '#333', fontSize: '18px' }}>
                                            <CheckCircle size={20} color="#F39200" style={{ flexShrink: 0, marginTop: '3px' }} />
                                            <span>{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="grid grid-2" style={{ gap: '30px', marginTop: '40px' }}>
                            {data.additionalInfo.map((info, i) => (
                                <div key={i} style={{ background: '#fcfcfc', padding: '30px', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#111', marginBottom: '12px' }}>{info.title}</h4>
                                    <p style={{ color: '#444', fontSize: '17px', lineHeight: '1.7' }}>{info.content}</p>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '40px', padding: '25px 30px', background: '#f8f9fa', borderRadius: '12px', fontSize: '15px', color: '#555', lineHeight: '1.8', borderLeft: '5px solid #F39200' }}>
                            <strong>Registration Info:</strong> {data.registryInfo}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section style={{ padding: '100px 0', background: '#fcfcfc' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '900', color: '#111', marginBottom: '60px', textTransform: 'uppercase' }}>
                        {data.whyChoose.title}
                    </h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {data.whyChoose.cards.map((card, i) => (
                            <div key={i} style={{
                                background: 'white',
                                padding: '40px 30px',
                                borderRadius: '15px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid #f0f0f0',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div style={{ marginBottom: '20px' }}>
                                    <img src={whyChooseIcons[i % whyChooseIcons.length]} alt={card.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                </div>
                                <h4 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '15px', color: '#111' }}>{card.title}</h4>
                                <p style={{ color: '#333', fontSize: '19px', lineHeight: '1.7' }}>
                                    {card.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ padding: '60px 0', background: '#F39200', textAlign: 'center' }}>
                <div className="container">
                    <h3 style={{ color: 'white', fontSize: '24px', fontWeight: '700', marginBottom: '30px', maxWidth: '900px', margin: '0 auto 30px' }}>
                        Choosing Tuition Bees Online Tutoring for {data.title} exam preparation is an investment in personalized, expert-driven learning designed to help you achieve your desired scores and stand out in the college admissions process.
                    </h3>
                    <Link to="/book-free-demo" className="btn" style={{ background: '#000', color: '#fff', fontWeight: '900', padding: '15px 40px', borderRadius: '30px' }}>
                        BOOK A FREE DEMO TODAY!
                    </Link>
                </div>
            </section>

            {/* FAQs */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '900', textAlign: 'center', marginBottom: '50px' }}>
                        Frequently Asked Questions: {data.title} Tutoring?
                    </h2>
                    <div>
                        {data.faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExamPage;
