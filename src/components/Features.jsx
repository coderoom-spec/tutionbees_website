import React from 'react';
import { GraduationCap, Clock, UserCheck, ClipboardList, TrendingUp, Award } from 'lucide-react';

const features = [
    { icon: <GraduationCap size={40} />, title: 'Highly-Qualified Tutors', text: 'Students learn from expert tutors from around the globe, trained to work with any learning pace.' },
    { icon: <Clock size={40} />, title: 'Flexible Scheduling', text: 'Classes can be scheduled according to the time and days convenient for the students.' },
    { icon: <UserCheck size={40} />, title: 'Personalized Tutoring', text: 'One-on-one online tuition helps students improve grades with customized lesson plans.' },
    { icon: <ClipboardList size={40} />, title: 'Periodic Assessments', text: 'Regular homework and tests are conducted to help students improve in their subjects.' },
    { icon: <TrendingUp size={40} />, title: 'Progress Reports', text: 'On a regular basis, students are provided with feedback sessions and detailed reports.' },
    { icon: <Award size={40} />, title: 'Guaranteed Success', text: 'With our expert tutoring, students score well in exams and succeed academically.' },
];

const Features = () => {
    return (
        <section className="why-choose-us bg-light">
            <div className="container">
                <h2 className="section-title">WHY CHOOSE US?</h2>
                <h3 className="section-subtitle">Unlock Your Potential with Tailored One-to-One Online Tutoring!</h3>
                <div className="grid grid-3">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card">
                            <div className="icon">
                                {f.icon}
                            </div>
                            <h4>{f.title}</h4>
                            <p>{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
