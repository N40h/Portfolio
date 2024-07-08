import BackToTop from './ui/BackToTop';
import Underline from './ui/Underline';
import About from './ui/homepage/About';
import Contact from './ui/homepage/Contact';
import Projects from './ui/homepage/Projects';
import Services from './ui/homepage/Services';

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
