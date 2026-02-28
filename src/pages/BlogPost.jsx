import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link to="/blog" className="btn btn-accent">Back to Blog</Link>
            </div>
        );
    }

    // Filter out current post from recent posts
    const recentPosts = blogPosts
        .filter(p => p.slug !== slug)
        .slice(0, 5);

    return (
        <div className="blog-post-page">
            {/* Post Hero Section */}
            <section className="blog-post-hero" style={{
                background: 'linear-gradient(135deg, #F39200 0%, #D47F00 100%)',
                padding: '60px 0',
                color: 'white',
                marginTop: '10px'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: '36px',
                            fontWeight: '900',
                            textTransform: 'uppercase',
                            lineHeight: '1.2',
                            maxWidth: '900px'
                        }}
                    >
                        {post.title}
                    </motion.h1>
                </div>
            </section>

            <div className="container blog-post-container" style={{ padding: '40px 20px 80px' }}>
                <div className="blog-post-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 350px', gap: '40px' }}>

                    {/* Main Content Column */}
                    <main className="blog-post-main">
                        <div className="post-featured-image" style={{ marginBottom: '40px' }}>
                            <img
                                src={post.img}
                                alt={post.title}
                                style={{
                                    width: '100%',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>

                        <div className="post-content">
                            <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px', color: '#333' }}>Description</h2>
                            <div className="post-body" style={{
                                fontSize: '17px',
                                lineHeight: '1.8',
                                color: '#000',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {post.description}
                            </div>
                        </div>

                        <div className="post-footer-cta" style={{
                            marginTop: '60px',
                            padding: '40px',
                            background: '#f8f9fa',
                            borderRadius: '15px',
                            textAlign: 'center',
                            border: '1px dashed #ddd'
                        }}>
                            <h3 style={{ marginBottom: '20px', fontWeight: '800' }}>Ready to boost your academic performance?</h3>
                            <Link to="/book-free-demo" className="btn btn-accent" style={{ padding: '0 40px', height: '54px', display: 'inline-flex', alignItems: 'center' }}>
                                BOOK A FREE DEMO TODAY
                            </Link>
                        </div>
                    </main>

                    {/* Sidebar Column */}
                    <aside className="blog-post-sidebar">
                        <div className="sidebar-widget recent-blogs-widget" style={{
                            background: 'white',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            border: '1px solid #eee'
                        }}>
                            <div className="widget-header" style={{
                                background: 'var(--accent-red)',
                                color: 'white',
                                padding: '15px 25px',
                                textAlign: 'center'
                            }}>
                                <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '800' }}>Recent Blog</h4>
                            </div>
                            <div className="widget-content" style={{ padding: '20px' }}>
                                {recentPosts.map((rPost) => (
                                    <Link
                                        key={rPost.id}
                                        to={`/blog/${rPost.slug}`}
                                        style={{
                                            display: 'flex',
                                            gap: '15px',
                                            padding: '15px 0',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid #f5f5f5'
                                        }}
                                    >
                                        <div className="r-post-img" style={{ width: '80px', height: '60px', flexShrink: 0 }}>
                                            <img src={rPost.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                        </div>
                                        <div className="r-post-info">
                                            <h5 style={{
                                                fontSize: '14px',
                                                lineHeight: '1.4',
                                                color: '#333',
                                                margin: '0 0 5px',
                                                fontWeight: '700',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 2,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}>
                                                {rPost.title}
                                            </h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Additional Sidebar Info */}
                        <div style={{ marginTop: '30px', padding: '25px', background: 'var(--primary-blue)', borderRadius: '12px', color: 'white' }}>
                            <h4 style={{ fontWeight: '800', marginBottom: '15px' }}>Quick Support</h4>
                            <p style={{ fontSize: '14px', opacity: 0.9, lineHeight: '1.5', marginBottom: '20px' }}>
                                Need immediate assistance with choosing the right curriculum?
                            </p>
                            <a href="tel:+918122867303" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700', marginBottom: '10px' }}>
                                <Phone size={16} /> +91 81228 67303
                            </a>
                            <a href="https://wa.me/918122867303" style={{ color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '700' }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="" style={{ width: '18px' }} /> WhatsApp Chat
                            </a>
                        </div>
                    </aside>
                </div>
            </div >

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (max-width: 992px) {
                    .blog-post-layout {
                        grid-template-columns: 1fr !important;
                    }
                    .blog-post-sidebar {
                        margin-top: 40px;
                    }
                    .blog-post-container {
                        padding: 30px 15px 100px !important;
                    }
                }
            `}} />
        </div >
    );
};

export default BlogPost;
