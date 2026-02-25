import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The 1-on-1 sessions have really helped my daughter improve her math scores. The tutor is very patient and explains concepts very well.",
        name: "Rohan S.",
        meta: "Grade 10 - CBSE",
        score: "95% in Mathematics"
    },
    {
        id: 2,
        quote: "TuitionBees is the best platform for IGCSE prep. I was struggling with Physics, but now I feel much more confident!",
        name: "Arjun K.",
        meta: "Grade 11 - IGCSE",
        score: "A* in Physics"
    },
    {
        id: 3,
        quote: "Highly recommended for online tutoring. The personalized approach and flexible timing suited my schedule perfectly.",
        name: "Sanya M.",
        meta: "Grade 12 - IB",
        score: "7/7 in Economics"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials bg-light">
            <div className="container">
                <h2 className="section-title">What our Parents & Students Say</h2>
                <div className="testimonials-slider">
                    {testimonials.map((t) => (
                        <div key={t.id} className="testimonial-card" style={{ textAlign: 'center' }}>
                            <div className="quote" style={{ color: 'var(--accent-red)', marginBottom: '20px' }}>
                                <Quote size={40} fill="var(--accent-red)" style={{ margin: '0 auto' }} />
                            </div>
                            <p style={{ minHeight: '100px', fontSize: '16px' }}>"{t.quote}"</p>
                            <div className="student-meta" style={{ marginTop: '20px' }}>
                                <strong style={{ fontSize: '18px', color: 'var(--primary-blue)' }}>{t.name}</strong>
                                <span style={{ display: 'block', fontSize: '14px', color: '#666', marginTop: '5px' }}>{t.meta}</span>
                                <span style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'var(--accent-red)', marginTop: '2px' }}>{t.score}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
