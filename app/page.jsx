import About from '@/app/components/About';
import BackToTop from '@/app/components/BackToTop';
import Contact from '@/app/components/Contact';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';

export default function Homepage() {
	return (
		<>
			<BackToTop />
			<About />
			<div className="m-auto h-px w-3/4 border border-solid border-gray-200"></div>
			<Services />
			<div className="m-auto h-px w-3/4 border border-solid border-gray-200"></div>
			<Projects />
			<div className="m-auto h-px w-3/4 border border-solid border-gray-200"></div>
			<Contact />
		</>
	);
}
