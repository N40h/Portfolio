'use client';
import ProjetsData from '@/app/data/projects';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
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
			<div className="grid grid-cols-1 gap-7 md:grid-cols-2">
				{ProjetsData.slice(0, numProjectsToShow).map(
					(project, index) => (
						<a
							key={project.id}
							className={`relative h-72 translate-y-5 overflow-hidden rounded opacity-0 shadow-xl transition-all duration-500 ease-linear lg:h-96 ${
								index < 4 || showMoreClicked
									? 'animate-fadeIn'
									: ''
							}`}
						>
							<Image
								className="size-full rounded object-cover transition-transform duration-300 ease-in-out"
								src={project.mockup_desktop}
								alt={`Mockup du site ${project.title}`}
								width={580}
								height={300}
								sizes="(max-width: 500px) 500px, 800px"
							/>
							<div
								className="absolute inset-0 flex size-full cursor-pointer items-center justify-center rounded bg-cherry-blossom/80 opacity-0 transition-opacity delay-100 duration-300 hover:opacity-100"
								onClick={() => openModal(project)}
							>
								<h3 className="text-xl">{`Front-end du site ${project.title}`}</h3>
								<div className="absolute bottom-4 right-4">
									Voir plus{' '}
									<FontAwesomeIcon icon={faArrowRight} />
								</div>
							</div>
						</a>
					)
				)}
			</div>
			<Modal selectedProject={selectedProject} closeModal={closeModal} />
			{numProjectsToShow < ProjetsData.length && (
				<button
					className="mx-auto mb-0 mt-7 cursor-pointer rounded bg-cherry-blossom p-2 text-xs font-medium uppercase text-mauve-text shadow-md transition-colors duration-500 hover:border hover:border-solid hover:border-zinc-700 hover:bg-transparent md:text-sm lg:text-base"
					onClick={showAllProjects}
				>
					Voir plus de projets
				</button>
			)}
		</>
	);
}
