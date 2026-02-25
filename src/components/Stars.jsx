import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const starsData = [
    { id: 1, name: 'Rohan', result: 'Scored 95% in CBSE Class 12', img: '/student1 tutionbees.webp' },
    { id: 2, name: 'Ananya Iyer', result: 'Scored 98% in ICSE Class 10', img: '/student2 tutionbees.webp', position: 'center 20%' },
    { id: 3, name: 'Rahul', result: 'Topped IGCSE Mathematics', img: '/student4 tutionbees.webp', position: 'center 20%' },
    { id: 4, name: 'Sanjana Shri', result: 'Scored 94% in IB Physics', img: '/student3 tutionbees.webp', position: 'center 20%' },
    { id: 5, name: 'Vikram', result: '96% in ISC Computer Science', img: '/student5 tutionbees.webp', position: 'center 20%' },
    { id: 6, name: 'Akshaya priya', result: 'Global Rank 1 in IGCSE English', img: 'student6 tutionbees.webp', position: 'center 10%' },
];

const Confetti = () => {
    return (
        <div className="confetti-container">
            {[...Array(12)].map((_, i) => (
                <div key={i} className={`particle p${i % 4}`} style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                }}></div>
            ))}
        </div>
    );
};

const Stars = () => {
    // Duplicate data for infinite loop effect
    const duplicatedData = [...starsData, ...starsData, ...starsData];

    return (
        <section className="stars-section" id="stars" style={{ overflow: 'hidden' }}>
            <div className="container">
                <h2 className="section-title">STARS OF TUITIONBEES</h2>
                <div className="carousel-wrapper">
                    <motion.div
                        className="stars-carousel"
                        animate={{ x: [0, -1860] }} // 6 cards * (280px + 30px gap) = 1860px
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 25,
                                ease: "linear"
                            }
                        }}
                        whileHover={{ animationPlayState: 'paused' }}
                    >
                        {duplicatedData.map((star, index) => (
                            <div key={`${star.id}-${index}`} className="star-card">
                                <Confetti />
                                <div className="trophy-overlay">
                                    <img src="/trophy.webp" alt="Trophy" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                                </div>
                                <div className="star-card-inner">
                                    <div className="star-img">
                                        <img
                                            src={star.img}
                                            alt={star.name}
                                            style={{ objectPosition: star.position || 'center' }}
                                        />
                                    </div>
                                    <div className="star-info">
                                        <h4>{star.name}</h4>
                                        <p>{star.result}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Stars;

