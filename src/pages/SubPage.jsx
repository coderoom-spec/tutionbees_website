import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LeadForm from '../components/LeadForm';
import { Users, Clock, BookOpen, Laptop, Plus, Minus } from 'lucide-react';

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
                    fontWeight: '600',
                    fontWeight: isOpen ? '800' : '600',
                    color: isOpen ? '#000' : '#333'
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

const SubPage = () => {
    const { category, name } = useParams();

    const title = name ? name.toUpperCase().replace('-', ' ') : 'CURRICULUM';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [name]);

    const prepPoints = [
        { t: "Targeted Revision Plans", d: "We help students create effective revision plans that cover all the essential topics, ensuring they are well-prepared for their exams." },
        { t: "Mock Tests", d: "Tuition Bees provides mock tests that simulate real exam conditions, helping students manage time efficiently and gain confidence in their exam taking abilities." },
        { t: "Doubt Clearing Sessions", d: "We offer regular doubt-clearing sessions where students can get their queries resolved, ensuring they have a thorough understanding of each subject." },
        { t: "Performance Tracking", d: "Our platform tracks student performance over time, providing insights into strengths and areas that need improvement. This data-driven approach helps in tailoring the learning experience to maximize success." },
        { t: "Stress Management Techniques", d: "We also provide guidance on managing exam stress through relaxation techniques and time management strategies, helping students approach their exams with a calm and focused mind-set." }
    ];

    const faqs = [
        { q: `What is the structure of the ${title} curriculum?`, a: `The ${title} curriculum is designed to provide a comprehensive and balanced education, focusing on both academic excellence and practical skills across core subjects.` },
        { q: "How does online tutoring work with Tuition Bees?", a: "Our platform uses interactive virtual classrooms where students meet 1-on-1 with certified tutors for real-time instruction and collaboration." },
        { q: `Are the tutors at Tuition Bees qualified to teach ${title} students?`, a: "Yes, all our tutors undergo rigorous selection and training, specializing in specific boards and age groups to ensure expertise." },
        { q: "How can I track my child's progress with Tuition Bees?", a: "We provide regular performance reports, session feedback, and a dedicated parent dashboard to monitor growth and attendance." },
        { q: "Is online tutoring as effective as traditional classroom learning?", a: "Absolutely! The personalized 1-on-1 focus often yields better results than crowded classrooms, allowing for tailored pacing and immediate feedback." }
    ];

    return (
        <div className="subpage">
            {/* Premium Hero Section */}
            <section className="home-conversion" style={{
                background: 'linear-gradient(135deg, #fd6730 0%, #ff930f 100%)',
                padding: '100px 0',
                position: 'relative',
                overflow: 'hidden',
                color: 'white'
            }}>
                {/* Abstract Circles */}
                <div className="abstract-circle" style={{ position: 'absolute', top: '-50px', left: '-50px', width: '300px', height: '300px', border: '40px solid rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                <div className="abstract-circle" style={{ position: 'absolute', bottom: '-100px', right: '10%', width: '400px', height: '400px', border: '60px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>

                <div className="container subpage-hero-container" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span style={{ fontSize: '18px', fontWeight: '500', opacity: 0.9 }}>Start Learning Today</span>
                        <h1 style={{ fontSize: '48px', fontWeight: '900', margin: '20px 0', lineHeight: '1.1' }}>
                            BEST ONLINE {title} <br />TUTORING & CLASSES
                        </h1>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', opacity: 0.9 }}>
                            Our tailored virtual classrooms meet your child's unique needs! Enjoy peace of mind with reliable online support from our expert tutors, just a click away. No more stress—we provide top-notch tuition that empowers your child for success, wherever they are!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <LeadForm
                            inquiryType={`${title} Coaching`}
                            title={`BOOK A FREE ${title} DEMO TODAY!`}
                        />
                    </motion.div>
                </div>
            </section>

            {/* Yellow CTA Banner */}
            <div style={{ background: '#000000', padding: '25px 0', textAlign: 'center', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)', marginTop: '40px' }}>
                <div className="container">
                    <Link to="/book-free-demo" style={{
                        display: 'inline-block',
                        background: '#ffc107',
                        color: '#333',
                        padding: '12px 40px',
                        borderRadius: '30px',
                        fontWeight: '900',
                        fontSize: '15px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        BOOK A FREE DEMO TODAY!
                    </Link>
                </div>
            </div>

            {/* Introduction */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '28px', color: 'var(--accent-red)', marginBottom: '10px', textTransform: 'capitalize' }}>Online {title} Coaching Class</h2>
                            <h3 style={{ fontSize: '32px', fontWeight: '801', marginBottom: '20px' }}>1 on 1 Online Classes for all Subjects</h3>
                            <p style={{ fontSize: '18px', color: '#333', lineHeight: '1.8', marginBottom: '25px' }}>
                                We offer a comprehensive curriculum designed to help students master {title} subjects. Our tutors are experts in the field, providing personalized attention that traditional classrooms often lack. We focus on building a strong foundation, encouraging critical thinking, and ensuring that students are well-prepared for their academic journey.
                            </p>
                            <button className="btn btn-accent" style={{ padding: '12px 30px' }}>BOOK A FREE DEMO</button>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img src="/tutoring-illustration.webp" alt="Online Tutoring" style={{ width: '100%', borderRadius: '15px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Prep Help Section */}
            <section style={{ padding: '80px 0', background: '#fcfcfc' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#000000', marginBottom: '40px', lineHeight: '1.3' }}>
                                How Can Tuition Bees Help with Your {title} Online Tutoring Exam Preparations?
                            </h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                {prepPoints.map((point, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <span style={{ fontWeight: '800', color: '#333', minWidth: '20px' }}>{i + 1}.</span>
                                        <p style={{ color: '#333', fontSize: '20px', lineHeight: '1.6' }}>
                                            <strong style={{ color: '#111' }}>{point.t}:</strong> {point.d}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ position: 'relative', background: '#fff', padding: '20px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                                <img
                                    src="/exam.jpg"
                                    alt="Exam Preparation"
                                    style={{ width: '100%', borderRadius: '10px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center', color: '#1a237e' }}>
                        Frequently Asked Questions: {title} Online Tutoring Tutoring?
                    </h2>
                    <div className="faq-list">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-light" style={{ padding: '80px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '801', color: 'var(--accent-red)', marginBottom: '10px', textTransform: 'uppercase' }}>OUR TESTIMONIALS</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--accent-red)', margin: '0 auto 40px' }}></div>
                    <div className="testimonials-slider">
                        <div className="testimonial-card">
                            <div style={{ fontSize: '40px', color: 'var(--accent-red)', marginBottom: '10px' }}>“</div>
                            <p style={{ fontStyle: 'italic' }}>"The sessions have really helped my daughter improve her math scores drastically. The tutor is patient and clear."</p>
                            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)', fontWeight: 700 }}>Soniya S.</h4>
                            <span style={{ fontSize: '14px', color: '#777' }}>Grade 10 - {title}</span>
                        </div>
                        <div className="testimonial-card">
                            <div style={{ fontSize: '40px', color: 'var(--accent-red)', marginBottom: '10px' }}>“</div>
                            <p style={{ fontStyle: 'italic' }}>"Best platform for prep. I was struggling with Science, but now I feel much more confident in my exams!"</p>
                            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)', fontWeight: 700 }}>Arjun K.</h4>
                            <span style={{ fontSize: '14px', color: '#777' }}>Grade 11 - {title}</span>
                        </div>
                    </div>
                    <a href="#" style={{ display: 'block', marginTop: '30px', fontWeight: '700', color: 'var(--primary-blue)', textDecoration: 'none' }}>VIEW MORE REVIEWS FROM GOOGLE ↗</a>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ background: '#f8fbff', borderRadius: '30px', padding: '60px', border: '1px solid #e1e8f0' }}>
                        <div className="grid grid-2" style={{ alignItems: 'center' }}>
                            <div className="benefit-list">
                                <h2 style={{ fontSize: '32px', fontWeight: '801', marginBottom: '30px', color: '#2c3e50' }}>The Benefits of Choosing the {title} Curriculum</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    {[
                                        { t: "Recognized Standard", d: "Recognized globally and follows a rigorous standard of education." },
                                        { t: "Conceptual Learning", d: "Focuses on understanding concepts rather than rote learning." },
                                        { t: "Exam Preparation", d: "Aligned with competitive exams like JEE, NEET, and SAT." },
                                        { t: "Global Acceptance", d: "Widely accepted for higher education missions worldwide." }
                                    ].map((item, i) => (
                                        <div key={i} style={{ display: 'flex', gap: '15px' }}>
                                            <span style={{ color: 'var(--accent-red)', fontWeight: '900', fontSize: '20px' }}>{i + 1}.</span>
                                            <p style={{ fontSize: '20px', color: '#333', lineHeight: '1.6' }}><strong>{item.t}:</strong> {item.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', position: 'relative' }}>
                                <img
                                    src="/images/blog/blog_hero_illustration_1772121781699.png"
                                    alt="Student Learning on Laptop"
                                    style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section style={{ padding: '100px 0', background: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '801', marginBottom: '50px', color: '#2c3e50' }}>Why Choose Tuition Bees ONLINE TUTORING for your {title} Tuition?</h2>
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {[
                            { title: "Expert Tutors", icon: <Users size={48} />, desc: "Access to experienced tutors well-versed in the specific curriculum and its requirements." },
                            { title: "Flexible Learning", icon: <Clock size={48} />, desc: "Learn at your own pace, anytime, anywhere. Our platform is accessible 24/7." },
                            { title: "Study Materials", icon: <BookOpen size={48} />, desc: "Providing students with high-quality study materials and practice papers." },
                        ].map((feature, i) => (
                            <div key={i} className="feature-card-detailed" style={{ background: 'white', padding: '50px 40px', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
                                <div style={{ color: 'var(--accent-red)', marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
                                <h4 style={{ fontSize: '22px', fontWeight: '801', marginBottom: '15px', color: 'var(--primary-blue)' }}>{feature.title}</h4>
                                <p style={{ color: '#444', fontSize: '20px', marginBottom: '10px', lineHeight: '1.7' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubPage;
