import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';
import BackToTop from './ui/BackToTop';
import Underline from './ui/Underline';

export default function Homepage() {
	return (
		<>
			<BackToTop />
			<About />
			<Underline />
			<Services />
			<Underline />
			<Projects />
			<Underline />
			<Contact />
		</>
	);
}
