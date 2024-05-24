/* eslint-disable react/no-unescaped-entities */
import { viaodaLibre } from '@/app/ui/fonts';
import Navbar from '../components/Navbar';
import Overlay from '../ui/Overlay';
import Scroller from '../ui/Scroller';

export default function Header({ title, description }) {
	return (
		<header className="relative h-screen bg-darken bg-hero bg-cover bg-scroll bg-50-70 bg-no-repeat lg:bg-fixed">
			<Overlay />
			<Navbar />
			<div className="absolute left-[6%] top-[35%] flex w-11/12 flex-col gap-1.5 text-whity sm:w-8/12 lg:w-1/2">
				<h1
					className={`${viaodaLibre.className} text-8xl font-normal sm:text-9xl lg:text-[10.25rem]`}
				>
					{title}
				</h1>
				<p className="ml-4 w-5/6 text-base font-normal leading-5 sm:w-4/5 lg:w-3/5">
					{description}
				</p>
			</div>
			<Scroller />
		</header>
	);
}
