/* eslint-disable react/no-unescaped-entities */
import { viaodaLibre } from '../fonts';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<section
			className="p-12 md:p-14 lg:m-auto lg:max-w-7xl lg:p-16"
			id="contact"
		>
			<h2
				className={`${viaodaLibre.className} p-1 text-center text-3xl lg:text-4xl`}
			>
				Contactez-moi
			</h2>
			<p className="p-1 text-center text-sm font-normal text-darken/70 sm:m-auto sm:w-4/5 lg:w-3/5 lg:text-base">
				Vous avez un projet en tête ou besoin de mes services en
				développement web ? N'hésitez pas à me contacter pour en
				discuter.
			</p>
			<div className="flex justify-center">
				<ContactForm />
			</div>
		</section>
	);
}
