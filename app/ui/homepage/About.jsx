/* eslint-disable react/no-unescaped-entities */
import { viaodaLibre } from '@/app/ui/fonts';
import AboutText from './AboutText';
import SocialLinks from './SocialLinks';

export default function About() {
	return (
		<section
			className="flex flex-col items-center p-12 sm:p-14 lg:mx-auto lg:my-7 lg:max-w-6xl lg:p-16"
			id="about"
		>
			<div className="flex w-full flex-col items-center gap-8 p-2 lg:w-4/5">
				<h2
					className={`${viaodaLibre.className} p-1 text-center text-3xl font-normal lg:text-4xl`}
				>
					À propos de moi
				</h2>
				<AboutText text="Je m'appelle Marc VILLEVIEILLE et je suis un développeur web freelance basé à Fourchambault. Je me spécialise dans le développement de sites web et d'applications utilisant React." />
				<AboutText text="Mon expertise inclut la conception de wireframes, le développement d'interfaces pixel-perfect, et l'optimisation SEO pour garantir des performances optimales. Engagé à fournir un code propre et efficient, je m'efforce de dépasser vos attentes et de contribuer au succès de vos projets web." />
				<SocialLinks />
			</div>
		</section>
	);
}
