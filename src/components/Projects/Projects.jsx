import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Projects.scss";
import ProjectsData from "../../data/projects.json";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [numProjectsToShow, setNumProjectsToShow] = useState(3);
    const [showMoreClicked, setShowMoreClicked] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
    }

    const closeModal = () => {
        setSelectedProject(null);
    }

    const showAllProjects = () => {
        setNumProjectsToShow(ProjectsData.length);
        setShowMoreClicked(true);
    }

    return (
        <section className="projects" id="projects">
            <h2 className="projects__title">My Projects</h2>
            <div className="projects__cards">
                {ProjectsData.slice(0, numProjectsToShow).map((project, index) => (
                    <div key={project.id} className={`projects__cards__card ${index < 3 || showMoreClicked ? 'visible' : ''}`}>
                        <img
                            className="projects__card-image"
                            srcSet={`${project.mockup_responsive} 500w`}
                            src={project.mockup_desktop}
                            alt={project.title}
                            width={800}
                            height={560}
                            sizes="(max-width: 500px) 500px, 800px"
                            loading="lazy"
                        />
                        <div className="projects__card-content">
                            <h3 className="projects__card-title">{project.title}</h3>
                            <div className="projects__card-links">
                                <div title="See more" className="projects__card-link" onClick={() => openModal(project)}>
                                    <i className="fa-solid fa-circle-plus"></i>
                                </div>
                                <a href={project.repository} title={`Code of ${project.title}`} target="_blank" className="projects__card-link">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                {project.url && (
                                    <a href={project.url} title={`Link to the site`} target="_blank" className="projects__card-link">
                                        <i className="fa-solid fa-link"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}    
            </div>
            <Modal
                selectedProject={selectedProject}
                closeModal={closeModal}
            />
            {numProjectsToShow < ProjectsData.length && (
                <button className="projects__cta" onClick={showAllProjects}>See more projects</button>
            )}
        </section>
    )
}