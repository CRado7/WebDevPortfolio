import React, { useEffect } from 'react';

export default function BackToTop() {
    function handleScroll() {
        const backToTop = document.getElementById('back-to-top');
        if (window.scrollY > 400) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBackToTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <a id="back-to-top" className="rounded-circle" data-bs-toggle="tooltip" title="Back to Top" onClick={handleBackToTopClick}>
            <i className="fas fa-arrow-up"></i>
        </a>
    );
}