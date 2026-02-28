import { motion } from 'framer-motion';

const TrustedBrands = () => {
    const logos = [
        { src: "/icse3.webp", alt: "CISCE", height: "60px" },
        { src: "/cbse.webp", alt: "CBSE", height: "50px" },
        { src: "/isc-logo.webp", alt: "ISC", height: "60px" },
        { src: "/gcse_top.webp", alt: "GCSE", height: "50px" },
        { src: "/ib.webp", alt: "IB", height: "50px" },
        { src: "/us.webp", alt: "US Curriculum", height: "40px" },
        { src: "/canadian1.webp", alt: "Canadian Curriculum", height: "40px" },
        { src: "/australia.webp", alt: "Australian Curriculum", height: "40px" },
        { src: "/uk.webp", alt: "UK Curriculum", height: "40px" },
    ];

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <div style={{
            background: 'white',
            padding: '25px 0',
            borderBottom: '1px solid #f0f0f0',
            overflow: 'hidden',
            position: 'relative',
            width: '100%'
        }}>
            <motion.div
                className="logo-ticker"
                animate={{
                    x: [-1000, 0],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '60px',
                    width: 'max-content',
                    padding: '0 30px'
                }}
            >
                {duplicatedLogos.map((logo, index) => (
                    <img
                        key={index}
                        src={logo.src}
                        alt={logo.alt}
                        style={{
                            height: logo.height,
                            width: 'auto',
                            objectFit: 'contain',
                            flexShrink: 0,
                            filter: 'grayscale(0.2) opacity(0.8)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.filter = 'grayscale(0) opacity(1)';
                            e.currentTarget.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.filter = 'grayscale(0.2) opacity(0.8)';
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default TrustedBrands;
