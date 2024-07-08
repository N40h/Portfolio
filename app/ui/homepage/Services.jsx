import { viaodaLibre } from '@/app/ui/fonts';
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceItem from './ServiceItem';

export default function Services() {
	return (
		<section
			className="flex flex-col items-center p-12 text-darken sm:p-14 lg:mx-auto lg:my-7 lg:p-16"
			id="services"
		>
			<div className="flex w-full flex-col gap-24 p-2 text-center sm:items-center md:items-center lg:gap-20">
				<h2
					className={`${viaodaLibre.className} p-1 text-3xl font-normal lg:text-4xl`}
				>
					Mes Services
				</h2>
				<div className="flex flex-col sm:w-3/4 md:w-3/4 lg:grid lg:w-full lg:grid-cols-2 lg:justify-center lg:gap-20 xl:flex xl:w-full xl:flex-row">
					<ServiceItem
						icon={
							<FontAwesomeIcon
								icon={faCode}
								className="absolute -top-14 rounded-full bg-sunny p-9 text-4xl"
							/>
						}
						title="Développement d'Applications Web"
						description="Création de sites web et développement d'applications avec React. Je transforme vos idées en interfaces utilisateurs réactives et intuitives."
						tags={[
							'HTML',
							'CSS',
							'JavaScript',
							'React',
							'Sass',
							'Redux',
							'NextJS',
							'TailwindCSS',
							'Swagger',
							'Git',
							'GitHub',
							'Figma',
						]}
					/>
					<ServiceItem
						icon={
							<FontAwesomeIcon
								icon={faGlobe}
								className="absolute -top-14 rounded-full bg-cherry-blossom p-9 text-4xl"
							/>
						}
						title="Optimisation de sites web"
						description="Amélioration du référencement naturel de votre site par l'optimisation du contenu, de la structure du site, de l'accessibilité et de la performance."
						subtitle="Outils utilités"
						tags={[
							'SEO',
							'Local SEO',
							'Rich Snippets',
							'Wave',
							'Lighthouse',
						]}
					/>
				</div>
			</div>
		</section>
	);
}
