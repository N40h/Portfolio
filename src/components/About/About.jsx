/* eslint-disable react/no-unescaped-entities */
import "./About.scss";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about__image-wrapper">
                <img
                    className="about__image"
                    src="/img/picture_of_a_bonsaï.webp"
                    alt="A picture of a bonsaï"
                    width={250}
                    height={350}
                    loading="lazy"
                />
            </div>
            <div className="about__content-wrapper">
                <h2 className="about__title">About Me</h2>
                <p className="about__text">Hi, i'm Marc Villevieille, I'm deeply passionate about crafting engaging and user-friendly experiences through frontend development. From wireframes to pixel-perfect designs, I enjoy translating ideas into seamless, interactive interfaces that captivate and inspire.
                With a keen eye for design and a love for clean, efficient code, I'm dedicated to delivering solutions that not only meet but exceed expectations.</p>
                <p className="about__text">Having undergone intensive training for 9 months at OpenClassrooms, I had the opportunity to become familiar with React, Sass, working with API, using Figma, SEO optimization, debug and many other things to develop high-performing web applications.</p>
                <p className="about__text">My goal is to continue learning and growing as a developer, and to contribute to the success of a team that shares my passion for creating exceptional digital experiences. If you wish to collaborate or simply discuss projects, I would be delighted to engage in conversation with you!</p>
                <a href="#contact" className="about__cta">Get in Touch</a>
            </div>
        </section>
    )
}