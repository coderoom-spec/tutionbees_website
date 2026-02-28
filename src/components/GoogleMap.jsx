import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    useEffect(() => {
        // Load Google Maps Script
        const loadScript = () => {
            if (window.google && window.google.maps) {
                initMap();
                return;
            }

            const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
            if (!apiKey) {
                console.warn("Google Maps API Key missing. Please add VITE_GOOGLE_MAPS_API_KEY to your .env file.");
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.async = true;
            script.defer = true;
            script.onload = initMap;
            document.head.appendChild(script);
        };

        const initMap = () => {
            const studyPointCoords = { lat: 11.0411, lng: 76.9412 }; // Precise location

            const mapOptions = {
                center: studyPointCoords,
                zoom: 17,
                // Clean Map Styles (Hides POIs and Clutter)
                styles: [
                    {
                        featureType: "poi",
                        stylers: [{ visibility: "off" }]
                    },
                    {
                        featureType: "transit",
                        stylers: [{ visibility: "off" }]
                    },
                    {
                        featureType: "road",
                        elementType: "labels.icon",
                        stylers: [{ visibility: "off" }]
                    }
                ],
                disableDefaultUI: false,
                mapTypeControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true
            };

            if (mapRef.current) {
                mapInstance.current = new window.google.maps.Map(mapRef.current, mapOptions);

                // Custom Large Red Marker
                const marker = new window.google.maps.Marker({
                    position: studyPointCoords,
                    map: mapInstance.current,
                    title: "Study Point",
                    animation: window.google.maps.Animation.DROP,
                    icon: {
                        path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                        fillColor: "#e53e3e", // Premium Red
                        fillOpacity: 1,
                        strokeWeight: 2,
                        strokeColor: "#ffffff",
                        scale: 2.5, // Larger size
                        anchor: new window.google.maps.Point(12, 24),
                    }
                });

                // Info Window
                const infoWindow = new window.google.maps.InfoWindow({
                    content: `
                        <div style="padding: 12px; min-width: 150px;">
                            <h4 style="margin: 0; color: #1a365d; font-family: 'Poppins', sans-serif;">Study Point</h4>
                            <p style="margin: 4px 0 0; font-size: 13px; color: #4a5568; line-height: 1.4;">
                                2nd Floor, GM Complex,<br/>
                                Mettupalayam Road,<br/>
                                Coimbatore - 641030
                            </p>
                        </div>
                    `
                });

                marker.addListener("click", () => {
                    infoWindow.open(mapInstance.current, marker);
                });

                // Auto-open info window on load
                infoWindow.open(mapInstance.current, marker);
            }
        };

        loadScript();

    }, []);

    return (
        <div
            ref={mapRef}
            className="js-map-container"
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                borderRadius: 'inherit'
            }}
        />
    );
};

export default GoogleMap;
