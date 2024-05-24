'use client';
import ProjetsData from '@/app/data/projects';
import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Modal from './Modal';

export default function ProjectList() {
	const [selectedProject, setSelectedProject] = useState(null);
	const [numProjectsToShow, setNumProjectsToShow] = useState(4);
	const [showMoreClicked, setShowMoreClicked] = useState(false);

	const openModal = (project) => {
		setSelectedProject(project);
	};

	const closeModal = () => {
		setSelectedProject(null);
	};

	const showAllProjects = () => {
		setNumProjectsToShow(ProjetsData.length);
		setShowMoreClicked(true);
	};

	return (
		<>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{ProjetsData.slice(0, numProjectsToShow).map(
					(project, index) => (
						<Card
							key={project.id}
							project={project}
							index={index}
							showMoreClicked={showMoreClicked}
							openModal={openModal}
						/>
					)
				)}
			</div>
			<Modal selectedProject={selectedProject} closeModal={closeModal} />
			{numProjectsToShow < ProjetsData.length && (
				<Button
					className="mx-auto mb-0 mt-7 cursor-pointer rounded bg-sunny px-4 py-2 text-xs font-medium uppercase text-darken shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:text-sm lg:text-base"
					onClick={showAllProjects}
					text="Voir plus de projets"
				/>
			)}
		</>
	);
}
