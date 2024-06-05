import React from 'react';

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <a id="back-to-top" className="rounded-circle" data-bs-toggle="tooltip" title="Back to Top" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </a>
    );
}