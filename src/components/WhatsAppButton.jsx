import React from 'react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918122867303?text=Hello!%20I%20would%20like%20to%20enquire%20about%20your%20online%20tutoring%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{ width: '45px', height: '45px' }}
            />
        </a>
    );
};

export default WhatsAppButton;
