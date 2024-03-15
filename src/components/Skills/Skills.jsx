/* eslint-disable react/no-unknown-property */
import { useEffect } from "react";
import SkillsData from "../../data/skills.json";
import "./Skills.scss";

export default function Skills() {
    
    useEffect(() => {
        const scrollers = document.querySelectorAll(".skills__scroller");

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute('data-animated', true)

                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicateItem = item.cloneNode(true);
                    duplicateItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicateItem);
                })
            })
        }
    }, []);

    return (
        <section className="skills" id="skills">
            <h2 className="skills__title">My Skills</h2>
            <div className="skills__scroller">
                <ul className="skills__tags scroller__inner">
                    {SkillsData.map((skill) => {
                        return (
                            <li className="skills__tags__tag" key={skill.name}>
                                {skill.name} {skill.icon && <img className="tag__icon" src={skill.icon} alt={`${skill.name} icon`} width={50} height={50} loading="lazy" />}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}