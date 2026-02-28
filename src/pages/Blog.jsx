import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <div className="blog-hero-grid">
                        <motion.div
                            className="blog-hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <h1>BLOG</h1>
                            <p>
                                Our tailored virtual classrooms meet your child's unique needs! Enjoy
                                peace of mind with reliable online support from our expert tutors, just a
                                click away. No more stress—we provide top-notch tuition that empowers
                                your child for success, wherever they are!
                            </p>
                        </motion.div>
                        <motion.div
                            className="blog-hero-image"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <img
                                src="/images/blog/blog_hero_illustration_1772121781699.png"
                                alt="Blog Illustration"
                                style={{ width: '450px', height: '350px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section style={{ padding: '80px 0', background: '#fcfcfc' }}>
                <div className="container">
                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {blogPosts.map((post) => (
                            <Link
                                to={`/blog/${post.slug}`}
                                key={post.id}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <motion.article
                                    className="blog-card-new"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    style={{ height: '100%' }}
                                >
                                    <div className="blog-card-img">
                                        <img src={post.img} alt={post.title} />
                                    </div>
                                    <div className="blog-card-body">
                                        <div className="blog-card-meta">
                                            <span><Calendar className="meta-icon" size={14} /> {post.date}</span>
                                            <span><User className="meta-icon" size={14} /> {post.author}</span>
                                        </div>
                                        <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{post.title}</h3>
                                        <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-red)', fontWeight: '700', fontSize: '14px' }}>
                                            Read More <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </motion.article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
