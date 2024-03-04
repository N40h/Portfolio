/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

export default function Navbar({ className }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
            setActiveSection("");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
                    setActiveSection(entry.target.id);
                }
            })
        }, { threshold: 0.8 });

        const sections = document.querySelectorAll("section");
        sections.forEach(section => observer.observe(section));
        
        return () => {
            sections.forEach(section => observer.unobserve(section));
        }
    }, [setActiveSection, activeSection]);

    let navbarClasses = [`${className}`];
    if (scrolled) {
        navbarClasses.push('header__navbar--scrolled');
    }

    return (
        <nav className={navbarClasses.join(" ")}>
            <div className="navbar__wrapper">
                <a href="/" className="navbar__logo">
                    <Logo />
                </a>
                <ul className="navbar__links">
                    <li className="navbar__links__link">
                        <a href="#about" className={activeSection === "about" ? 'active' : ''}>About</a>
                    </li>
                    <li className="navbar__links__link">
                        <a href="#skills" className={activeSection === "skills" ? 'active' : ''}>Skills</a>
                    </li>
                    <li className="navbar__links__link">
                        <a href="#projects" className={activeSection === "projects" ? 'active' : ''}>My Projects</a>
                    </li>
                    <li className="navbar__links__link">
                        <a href="#contact" title="contact" className={activeSection === "contact" ? 'active' : ''}>
                            <FontAwesomeIcon icon={faEnvelope} className="navbar__contact" aria-hidden="false"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}