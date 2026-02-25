import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LeadForm = ({
    title = "BOOK A FREE DEMO TODAY!",
    inquiryType = "Demo Request",
    showSubject = false,
    showMessage = false,
    buttonText = "SUBMIT NOW"
}) => {
    const [userType, setUserType] = useState('parent');
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const newErrors = {};
        if (!data.name || data.name.trim().length < 2) {
            newErrors.name = "Please enter your full name";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email || !emailRegex.test(data.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!phone || phone.length < 10) {
            newErrors.phone = "Please enter a valid phone number";
        }
        if (showSubject && !data.subject) {
            newErrors.subject = "Please select a subject";
        }
        if (showMessage && (!data.message || data.message.trim().length < 5)) {
            newErrors.message = "Message must be at least 5 characters";
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append("page_url", window.location.href);
        const data = Object.fromEntries(formData.entries());

        const formErrors = validateForm(data);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setErrors({});
        setStatus('sending');

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
        formData.append("subject", `New Submission: ${inquiryType} from ${data.name}`);
        formData.append("from_name", "TuitionBees Website");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const responseData = await response.json();

            if (responseData.success) {
                setStatus('success');
                setPhone('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="form-card-premium success-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '60px', color: '#4CAF50', marginBottom: '20px' }}>✓</div>
                <h3 style={{ color: 'var(--primary-blue)', marginBottom: '10px' }}>Thank You!</h3>
                <p>Your request has been received. Our team will contact you shortly.</p>
                <button
                    onClick={() => setStatus('')}
                    className="btn btn-accent"
                    style={{ marginTop: '20px' }}
                >
                    Send Another Request
                </button>
            </div>
        );
    }

    return (
        <div className="form-card-premium">
            <h3 className="form-title">
                {title.split(' ').map((word, i) => (
                    <span key={i} className={word === 'TODAY!' || word === 'DEMO' ? 'text-accent' : ''}>{word} </span>
                ))}
            </h3>

            <form onSubmit={handleSubmit} className="premium-form">
                {/* Meta Context Fields */}
                <input type="hidden" name="inquiryType" value={inquiryType} />
                <input type="hidden" name="user_type" value={userType} />

                {!showSubject && !showMessage && (
                    <div className="form-type-toggle-wrapper">
                        <div className="form-type-toggle">
                            <button
                                type="button"
                                onClick={() => setUserType('parent')}
                                className={`toggle-btn ${userType === 'parent' ? 'active' : ''}`}
                            >Parent</button>
                            <button
                                type="button"
                                onClick={() => setUserType('student')}
                                className={`toggle-btn ${userType === 'student' ? 'active' : ''}`}
                            >Student</button>
                        </div>
                    </div>
                )}

                <div className="input-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                <div className="input-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="input-group">
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={setPhone}
                        enableSearch={true}
                        containerStyle={{ width: '100%' }}
                        inputClass={errors.phone ? 'error' : ''}
                        placeholder="Phone Number"
                        inputProps={{
                            name: 'phone',
                            required: true,
                        }}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                {showSubject && (
                    <div className="input-group">
                        <select name="subject" className={`form-input ${errors.subject ? 'error' : ''}`}>
                            <option value="">Select Subject</option>
                            <option>Admission Inquiry</option>
                            <option>Tutor Application</option>
                            <option>General Feedback</option>
                        </select>
                        {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>
                )}

                {showMessage && (
                    <div className="input-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className={`form-input ${errors.message ? 'error' : ''}`}
                        ></textarea>
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                )}

                <button
                    type="submit"
                    className="btn btn-accent btn-submit"
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'SENDING...' : buttonText}
                </button>
                {status === 'error' && (
                    <p style={{ color: 'red', fontSize: '12px', marginTop: '10px', textAlign: 'center' }}>
                        Something went wrong. Please try again.
                    </p>
                )}
            </form>
        </div>
    );
};

export default LeadForm;
