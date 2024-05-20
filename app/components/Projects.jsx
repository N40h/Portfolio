import { viaodaLibre } from '../ui/fonts';
import ProjectList from './ProjectList';

export default function Projects() {
	return (
		<section
			className="relative mx-auto my-6 flex flex-col gap-5 bg-projects bg-cover bg-fixed bg-center bg-no-repeat p-8 md:p-12 lg:max-w-7xl lg:p-16"
			id="projects"
		>
			<h2
				className={`${viaodaLibre.className} p-1 text-center text-3xl lg:text-4xl`}
			>
				Réalisations
			</h2>
			<ProjectList />
		</section>
	);
}
