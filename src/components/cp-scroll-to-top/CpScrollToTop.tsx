'use client';

import { useEffect, useState } from 'react';

const CpScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const whenToAppear = 200;
        const handleScroll = () => {
            setShowButton(window.scrollY >= whenToAppear);
        };
        // Check initial scroll position
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!showButton) return null;

    return (
        <button
            type="button"
            className="cp-scroll-to-top active"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <span className="icon unu" aria-hidden="true" />
            <span className="icon doi" aria-hidden="true" />
        </button>
    );
};

export default CpScrollToTop;