import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
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
                        <img src={project.mockup_desktop} alt={project.title} className="projects__card-image" />
                        <div className="projects__card-content">
                            <h3 className="projects__card-title">{project.title}</h3>
                            <div className="projects__card-links">
                                <div title="See more" className="projects__card-link" onClick={() => openModal(project)}>
                                    <FontAwesomeIcon icon={faCirclePlus} />
                                </div>
                                <a href={project.repository} title={`Code of ${project.title}`} target="_blank" className="projects__card-link">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a href={project.url} title={`Link to the site`} target="_blank" className="projects__card-link">
                                    <FontAwesomeIcon icon={faLink} />
                                </a>
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