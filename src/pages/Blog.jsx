import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        id: 1,
        date: 'Oct 12, 2025',
        title: 'The Impact of Online Math Tutoring on Academic Achievement',
        desc: 'How one-on-one digital sessions are changing the way students learn mathematics and achieve their dream scores.',
        img: 'https://images.unsplash.com/photo-1596495573175-975a6a9bb8be?q=80&w=600&h=400&auto=format&fit=crop'
    },
    {
        id: 2,
        date: 'Sep 28, 2025',
        title: 'Master Math With TuitionBees Online Tutoring – And Feel the Difference',
        desc: 'Techniques and strategies used by our top tutors to make math easy and fun for students of all grades.',
        img: 'https://images.unsplash.com/photo-1501504905992-0b32066d9972?q=80&w=600&h=400&auto=format&fit=crop'
    },
    {
        id: 3,
        date: 'Aug 15, 2025',
        title: 'AI Generation in 2026: Shaping the Future of Learning',
        desc: 'Shaping the future of learning for school kids with cutting-edge AI tools and personalized coaching.',
        img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&h=400&auto=format&fit=crop'
    }
];

const Blog = () => {
    return (
        <div className="blog-page">
            <section className="subpage-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        TUTORING BLOGS & STUDY GUIDES | CBSE & IGCSE
                    </motion.h1>
                    <p>Stay updated with the latest in education and tutoring.</p>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="container">
                    <div className="grid grid-3">
                        {blogPosts.map((post) => (
                            <motion.article
                                key={post.id}
                                className="blog-card"
                                whileHover={{ translateY: -10 }}
                            >
                                <div className="blog-img">
                                    <img src={post.img} alt={post.title} />
                                </div>
                                <div className="blog-content">
                                    <span className="blog-date">{post.date}</span>
                                    <h4>{post.title}</h4>
                                    <p>{post.desc}</p>
                                    <a href="#" className="read-more">
                                        Read More <ArrowRight size={14} style={{ display: 'inline', marginLeft: '5px' }} />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
