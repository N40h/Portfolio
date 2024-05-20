import About from '@/app/components/About';
import BackToTop from '@/app/components/BackToTop';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';

export default function Homepage() {
	return (
		<>
			<BackToTop />
			<About />
			<Services />
			<Projects />
			<div className="underline"></div>
			{/* <Contact /> */}
		</>
	);
}
