import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Card({ project, index, showMoreClicked, openModal }) {
	return (
		<div
			className={`relative h-72 translate-y-5 overflow-hidden rounded opacity-0 shadow-xl transition-all duration-500 ease-linear lg:h-96 ${
				index < 4 || showMoreClicked ? 'animate-fadeIn' : ''
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
				className="absolute inset-0 flex size-full cursor-pointer items-center justify-center rounded bg-sunny/90 opacity-0 transition-opacity delay-100 duration-300 hover:opacity-100"
				onClick={() => openModal(project)}
			>
				<h3 className="text-xl">{`Front-end du site ${project.title}`}</h3>
				<div className="absolute bottom-4 right-4">
					Voir plus <FontAwesomeIcon icon={faArrowRight} />
				</div>
			</div>
		</div>
	);
}
