import { viaodaLibre } from '../ui/fonts';
import ContactForm from './ContactForm';

export default function Contact() {
	return (
		<section
			className="p-12 md:p-14 lg:m-auto lg:max-w-7xl lg:p-16"
			id="contact"
		>
			<h2
				className={`${viaodaLibre.className} flex justify-center p-1 text-3xl lg:text-4xl`}
			>
				Me Contacter
			</h2>
			<div className="flex justify-center">
				<ContactForm />
			</div>
		</section>
	);
}
