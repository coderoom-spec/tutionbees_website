import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import WhoWeAre from './pages/WhoWeAre';
import BookFreeDemo from './pages/BookFreeDemo';

import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopHandler from './components/ScrollToTopHandler';

function App() {
    return (
        <Router>
            <ScrollToTopHandler />
            <div className="app-container">
                <Header />
                <WhatsAppButton />
                <ScrollToTop />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/who-we-are" element={<WhoWeAre />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/book-free-demo" element={<BookFreeDemo />} />
                        <Route path="/:category/:name" element={<SubPage />} />
                        <Route path="/:name" element={<SubPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
