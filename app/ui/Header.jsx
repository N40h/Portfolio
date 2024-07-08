/* eslint-disable react/no-unescaped-entities */
import { viaodaLibre } from '@/app/ui/fonts';
import Overlay from './Overlay';
import Scroller from './Scroller';
import Navbar from './homepage/Navbar';

export default function Header({ title, description, promesse }) {
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
				<p className="ml-4 w-5/6 text-base font-normal leading-5 sm:w-4/5 lg:w-4/5">
					{description}
				</p>
				<p className="ml-4 w-5/6 text-base font-normal leading-5 sm:w-4/5 lg:w-4/5">
					{promesse}
				</p>
			</div>
			<Scroller />
		</header>
	);
}
