import React from 'react';

const steps = [
    { num: '01', title: 'Book a Free Trial', text: 'Start your journey by booking a 1-on-1 demo session with our expert tutors.' },
    { num: '02', title: 'Personalized Matching', text: 'We match you with the best tutor based on your curriculum and specific needs.' },
    { num: '03', title: 'Start Learning', text: 'Get access to high-quality teaching and start achieving your academic goals.' },
];

const HowItWorks = () => {
    return (
        <section className="how-we-work">
            <div className="container">
                <h2 className="section-title">HOW WE WORK</h2>
                <div className="grid grid-3">
                    {steps.map((step, i) => (
                        <div key={i} className="step-card">
                            <div className="step-num">{step.num}</div>
                            <h4>{step.title}</h4>
                            <p>{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
