/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Logo/Logo";
import "./Navbar.scss";

export default function Navbar({ className }) {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        window.scrollTo({ top: element.offsetTop - 98, behavior: "smooth" });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

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
                        <a onClick={(e) => handleClick(e, 'about')}>About</a>
                    </li>
                    <li className="navbar__links__link">
                        <a onClick={(e) => handleClick(e, 'skills')}>Skills</a>
                    </li>
                    <li className="navbar__links__link">
                        <a onClick={(e) => handleClick(e, 'projects')}>My Projects</a>
                    </li>
                    <li className="navbar__links__link">
                        <a onClick={(e) => handleClick(e, 'contact')} title="contact">
                            <FontAwesomeIcon icon={faEnvelope} className="navbar__contact" aria-hidden="false"/>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}