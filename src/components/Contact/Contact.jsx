/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Contact.scss";

export default function Contact() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">Contact Me</h2>
            <div className="contact__content">
                <form method="POST" className="contact__form">
                    <div className="contact__form__inputs">
                        <div className="contact__form__input">
                            <div className="input__wrapper">
                                <input type="text" id="name" name="name" placeholder=''  onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')}required />
                                <label htmlFor="name">Your name *</label>
                            </div>
                            <div className="input__wrapper">
                                <input type="email" id="email" name="email" placeholder='' onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required />
                                <label htmlFor="email">Your Email *</label>
                            </div>
                        </div>
                        <div className="contact__form__input">
                            <div className="input__wrapper">
                                <input type="tel" id="phone" name="phone" placeholder='' onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} />
                                <label htmlFor="phone">Phone number</label>
                            </div>
                            <div className="input__wrapper">
                                <input type="text" id="object" name="object" placeholder='' onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required />
                                <label htmlFor="object">Object *</label>
                            </div>
                        </div>
                    </div>
                    <div className="contact__form__textarea">
                        <div className="input__wrapper">
                            <textarea id="message" name="message" placeholder='' onFocus={() => setIsFocused(true)} onBlur={(e) => setIsFocused(e.target.value !== '')} required></textarea>
                            <label htmlFor="message">Message *</label>
                        </div>
                    </div>
                    <button type="submit" className="contact__form__cta">Send</button>
                </form>
                {/* <div className="contact__infos">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur iste obcaecati cumque quos, illum quidem reprehenderit, ratione sequi atque voluptatem quia. Quae ullam vel modi reprehenderit officia cupiditate illo accusantium.
                    Error, corrupti, adipisci exercitationem cupiditate officia culpa iusto a quibusdam quos ratione natus omnis ullam tempora maiores possimus saepe perferendis aliquid, itaque temporibus aut nam iste assumenda nemo. Voluptate, repellat.
                    Vero exercitationem consequatur laudantium, nostrum velit obcaecati saepe in perferendis totam impedit expedita eligendi iusto temporibus, aperiam odio rem reprehenderit alias corporis cumque esse illum facere qui? Animi, ab quibusdam.
                    Reiciendis atque, consectetur ipsam soluta, eos odit ratione officiis animi, sed corrupti accusamus facere necessitatibus repellat tempora doloribus molestiae itaque pariatur voluptates fugit eligendi saepe amet corporis rem. Praesentium, beatae?
                    Magnam distinctio eos ullam ut, provident architecto consequatur voluptas aperiam, at natus velit sed dignissimos nesciunt sapiente? Enim quae, veritatis tenetur iure expedita, modi laborum optio laboriosam facilis dicta deleniti!</p>
                </div> */}
            </div>
        </section>
    )
}