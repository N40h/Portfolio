/* eslint-disable no-unused-vars */
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.scss";

export default function Contact() {
    emailjs.init(import.meta.env.VITE_EMAILJS_API_KEY)
    const [isFocused, setIsFocused] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', object: '', message: '' })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.object && formData.message) {
            emailjs.sendForm('service_au0g4ob', 'template_efmzczr', form.current, import.meta.env.VITE_EMAILJS_API_KEY)
            setIsSubmitted(true);
            setFormData({ name: '', email: '', phone: '', object: '', message: '' });
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }
    }

    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">Contact Me</h2>
            <div className="contact__content">
                <form method="POST" className="contact__form" ref={form} onSubmit={handleSubmit}>
                    <div className="contact__form__inputs">
                        <div className="contact__form__input">
                            <div className="input__wrapper">
                                <input type="text" id="name" name="name" placeholder='' value={formData.name} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required />
                                <label htmlFor="name">Your name *</label>
                            </div>
                            <div className="input__wrapper">
                                <input type="email" id="email" name="email" placeholder='' value={formData.email} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required />
                                <label htmlFor="email">Your Email *</label>
                            </div>
                        </div>
                        <div className="contact__form__input">
                            <div className="input__wrapper">
                                <input type="tel" id="phone" name="phone" placeholder='' value={formData.phone} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} />
                                <label htmlFor="phone">Phone number</label>
                            </div>
                            <div className="input__wrapper">
                                <input type="text" id="object" name="object" placeholder='' value={formData.object} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required />
                                <label htmlFor="object">Object *</label>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form__textarea">
                        <div className="input__wrapper">
                            <textarea id="message" name="message" placeholder='' value={formData.message} onChange={handleChange} onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required></textarea>
                            <label htmlFor="message">Message *</label>
                        </div>
                    </div>
                    {isSubmitted && <p className="validated">Message send successfully!</p>}
                    <button type="submit" className="contact__form__cta">Send</button>
                </form>
            </div>
        </section>
    )
}