/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);
    
    const checkScrollToTop = () => {
        if (!showScrollToTop && window.pageYOffset > 100) {
            setShowScrollToTop(true)
        } else if (showScrollToTop && window.pageYOffset <= 100) {
            setShowScrollToTop(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollToTop)
        return () => window.removeEventListener('scroll', checkScrollToTop)
    }, [showScrollToTop]);

    return (
        <React.Fragment>
            {showScrollToTop && (
                <div title="Go to the top of the page" className="arrow__top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div>
            )}
            <About />
            <Skills />
            <Projects />
            <div className="underline"></div>
            <Contact />
        </React.Fragment>
    )
}