import React from 'react';
import Hero from '../components/Hero';
import TrustedBrands from '../components/TrustedBrands';
import LeadForm from '../components/LeadForm';
import Stars from '../components/Stars';
import AdvantagesSection from '../components/AdvantagesSection';
import HowItWorks from '../components/HowItWorks';
import SubjectsCurriculums from '../components/SubjectsCurriculums';
import OurSubjects from '../components/OurSubjects';
import ExamsSection from '../components/ExamsSection';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustedBrands />

            {/* Featured Conversion Section */}
            <section className="home-conversion" style={{
                background: 'linear-gradient(90deg, #fd6730, #ff930f)',
                padding: '80px 0',
                position: 'relative',
                overflow: 'hidden',
                color: 'white',
                marginTop: '40px'
            }}>
                <div className="abstract-circle" style={{ position: 'absolute', top: '-50px', left: '-50px', width: '300px', height: '300px', border: '40px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                <div className="abstract-circle" style={{ position: 'absolute', bottom: '-100px', right: '10%', width: '400px', height: '400px', border: '60px solid rgba(255,255,255,0.03)', borderRadius: '50%' }}></div>

                <div className="container conversion-grid" style={{ alignItems: 'center', position: 'relative', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ fontSize: '18px', fontWeight: '500', opacity: 0.9, color: 'white' }}>Start Learning Today</span>
                        <h2 style={{ fontSize: '42px', fontWeight: '900', margin: '20px 0', lineHeight: '1.1', color: 'white' }}>
                            NEED AN ONLINE TUTOR <br />FOR YOUR CHILD?
                        </h2>
                        <p style={{ fontSize: '18px', lineHeight: '1.6', opacity: 0.9, color: 'white' }}>
                            Experience top-notch online tuition that empowers your child for success. Our tailored sessions meet unique learning needs, providing reliable support wherever you are!
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <LeadForm
                            inquiryType="Demo Request"
                            title="BOOK A FREE DEMO TODAY!"
                        />
                    </motion.div>
                </div>
            </section>

            <Stars />
            <AdvantagesSection />
            <HowItWorks />
            <OurSubjects />
            <SubjectsCurriculums />
            <ExamsSection />
            <Testimonials />
        </>
    );
};

export default Home;
