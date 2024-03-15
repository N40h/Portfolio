/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.scss';

export default function Modal({ selectedProject, closeModal}) {
    if (!selectedProject) {
        return null;
    }

    return (
        <React.Fragment>
            <div className='modal'>
                <div className='modal__overlay'></div>
                <div className='modal__content'>
                    <div className="projects__infos">
                        <div onClick={closeModal} className="projects__infos-btn">
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className="projects__infos__content">
                            <img className="projects__infos-image" src={selectedProject.banner} alt={`Banner of ${selectedProject.title}`} width={750} height={180} loading='lazy' />
                            <p><span className="bold">Client :</span> {selectedProject.client}</p>
                            <p><span className="bold">Presentation :</span> {selectedProject.presentation}</p>
                            <p><span className="bold">Objectives :</span> {selectedProject.objectives}</p>
                            <div className="projects__infos-tags">
                                {selectedProject.tags.map((tag, index) => (
                                    <span key={index} className="projects__infos-tag">{tag}</span>
                                ))}
                            </div>
                            <div className="projects__infos__links">
                                <a href={selectedProject.repository} title={`Code of ${selectedProject.title}`} target="_blank" className="projects__infos__links__link">
                                    Github Link
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                                <a href={selectedProject.url} title={`Link to the live site`} target="_blank" className="projects__infos__links__link">
                                    Link to the site
                                    <i className="fa-solid fa-up-right-from-square"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}