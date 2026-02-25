import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const RegistrationForm = () => {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [captcha, setCaptcha] = useState('');
    const [userInputCaptcha, setUserInputCaptcha] = useState('');
    const [errors, setErrors] = useState({});

    // Simple captcha generator
    const generateCaptcha = () => {
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < 6; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setCaptcha(result);
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const validateForm = (data) => {
        const newErrors = {};
        if (!data.studentName) newErrors.studentName = "Required";
        if (!data.mobile) newErrors.mobile = "Required";
        if (!data.grade) newErrors.grade = "Required";
        if (!data.region) newErrors.region = "Required";
        if (userInputCaptcha !== captcha) newErrors.captcha = "Captcha mismatch";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (data.email && !emailRegex.test(data.email)) {
            newErrors.email = "Invalid email";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const formErrors = validateForm(data);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setErrors({});
        setStatus('sending');

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "317084dd-7a0b-458c-800b-073c467d74e4");
        formData.append("subject", `New Demo Registration: ${data.studentName}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const responseData = await response.json();
            if (responseData.success) {
                setStatus('success');
                e.target.reset();
                setUserInputCaptcha('');
                generateCaptcha();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{ padding: '40px', textAlign: 'center', background: '#f9f9f9', borderRadius: '8px' }}>
                <h3 style={{ color: '#4CAF50' }}>Success!</h3>
                <p>Your registration for the FREE DEMO CLASS has been received. We will contact you soon.</p>
                <button onClick={() => setStatus('')} className="btn-submit" style={{ width: 'auto', padding: '10px 30px', marginTop: '20px', background: 'var(--accent-red)', color: 'white', border: 'none', cursor: 'pointer' }}>OK</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>

                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333' }}>Sign Up for FREE DEMO CLASS</h3>
            </div>

            <div className="registration-form-grid">
                <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '18px' }}>Name of the student *</label>
                    <input
                        type="text"
                        name="studentName"
                        placeholder="Name of the student*"
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '18px' }}
                    />
                    {errors.studentName && <span style={{ color: 'red', fontSize: '12px' }}>{errors.studentName}</span>}
                </div>

                <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '18px' }}>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '18px' }}
                    />
                    {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
                </div>

                <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '18px' }}>Mobile Number *</label>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile Number *"
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '18px' }}
                    />
                    {errors.mobile && <span style={{ color: 'red', fontSize: '12px' }}>{errors.mobile}</span>}
                </div>

                <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '18px' }}>Grade *</label>
                    <select
                        name="grade"
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', background: 'white', fontSize: '18px' }}
                    >
                        <option value="">Select Grade</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                        <option value="Grade 6">Grade 6</option>
                        <option value="Grade 7">Grade 7</option>
                        <option value="Grade 8">Grade 8</option>
                        <option value="Grade 9">Grade 9</option>
                        <option value="Grade 10">Grade 10</option>
                        <option value="Grade 11">Grade 11</option>
                        <option value="Grade 12">Grade 12</option>
                    </select>
                    {errors.grade && <span style={{ color: 'red', fontSize: '12px' }}>{errors.grade}</span>}
                </div>

                <div className="input-group">
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '18px' }}>Region *</label>
                    <select
                        name="region"
                        style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', background: 'white', fontSize: '18px' }}
                    >
                        <option value="">Select Region</option>
                        <option value="India">India</option>
                        <option value="Middle East">Middle East</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.region && <span style={{ color: 'red', fontSize: '12px' }}>{errors.region}</span>}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px' }} className="captcha-row">
                <input
                    type="text"
                    placeholder="Enter Captcha Code *"
                    value={userInputCaptcha}
                    onChange={(e) => setUserInputCaptcha(e.target.value)}
                    style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', width: '250px' }}
                />
                <div style={{
                    background: '#fff',
                    padding: '8px 20px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    letterSpacing: '5px',
                    fontStyle: 'italic',
                    userSelect: 'none',
                    color: '#333'
                }}>
                    {captcha}
                </div>
                <button
                    type="button"
                    onClick={generateCaptcha}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--accent-red)' }}
                >
                    <RefreshCw size={20} />
                </button>
            </div>
            {errors.captcha && <span style={{ color: 'red', fontSize: '12px', display: 'block', marginTop: '5px' }}>{errors.captcha}</span>}

            <div style={{ marginTop: '30px' }}>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    style={{
                        background: 'var(--accent-red)',
                        color: 'white',
                        padding: '12px 40px',
                        border: 'none',
                        borderRadius: '0px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        textTransform: 'uppercase'
                    }}
                >
                    {status === 'sending' ? 'Sending...' : 'SUBMIT'}
                </button>
            </div>
        </form>
    );
};

export default RegistrationForm;
