import { viaodaLibre } from '../fonts';
import ProjectList from './ProjectList';

export default function Projects() {
	return (
		<section
			className="relative mx-auto my-6 flex flex-col gap-8 p-12 md:p-14 lg:max-w-7xl lg:p-16"
			id="projects"
		>
			<h2
				className={`${viaodaLibre.className} p-1 text-center text-3xl lg:text-4xl`}
			>
				Mes Réalisations
			</h2>
			<ProjectList />
		</section>
	);
}
