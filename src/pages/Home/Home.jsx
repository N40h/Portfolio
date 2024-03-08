import React from "react";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";

export default function Home() {
    return (
        <React.Fragment>
            <About />
            <Skills />
            <Projects />
        </React.Fragment>
    )
}