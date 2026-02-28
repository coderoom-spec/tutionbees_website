import React from 'react';

const TrustedBrands = () => {
    const logos = [
        { src: "/cbse.webp", alt: "CBSE", height: "50px" },
        { src: "/icse3.webp", alt: "CISCE", height: "60px" },
        { src: "/isc-logo.webp", alt: "ISC", height: "60px" },
        { src: "/gcse_top.webp", alt: "GCSE", height: "50px" },
        { src: "/ib.webp", alt: "IB", height: "50px" },
        { src: "/us.webp", alt: "US Curriculum", height: "40px" },
        { src: "/canadian1.webp", alt: "Canadian Curriculum", height: "40px" },
        { src: "/australia.webp", alt: "Australian Curriculum", height: "40px" },
        { src: "/uk.webp", alt: "UK Curriculum", height: "40px" },
    ];

    return (
        <div style={{ background: 'white', padding: '30px 10px', borderBottom: '1px solid #f0f0f0' }}>
            <div className="container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px 30px'
            }}>
                {logos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        style={{ height: logo.height, objectFit: 'contain' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default TrustedBrands;
