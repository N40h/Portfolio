/* eslint-disable react/no-unescaped-entities */
import { viaodaLibre } from '@/app/ui/fonts';
import Navbar from './Navbar';

export default function Header() {
	return (
		<header className="relative h-screen bg-darken bg-hero bg-cover bg-scroll bg-50-70 bg-no-repeat lg:bg-fixed">
			<div className="absolute left-0 top-0 size-full bg-darken/20"></div>
			<Navbar />
			<div className="absolute left-[6%] top-[35%] flex w-11/12 flex-col gap-1.5 text-whity sm:w-8/12 lg:w-1/2">
				<h1
					className={`${viaodaLibre.className} text-8xl font-normal sm:text-9xl lg:text-[10.25rem]`}
				>
					Marc <br /> Villevieille
				</h1>
				<p className="w-5/6 text-base font-normal leading-5 sm:w-4/5 lg:w-3/5">
					Bonjour, je suis Marc Villevieille développeur front-end en
					freelance. Enchanté de faire votre connaissance et bienvenue
					sur mon portfolio personnel.
				</p>
			</div>
			<div className="absolute bottom-[3%] left-1/2 h-9 w-6 rounded-[30px] border-2 border-solid border-whity before:absolute before:left-1/2 before:size-1.5 before:-translate-x-2/4 before:animate-scroll before:rounded-50% before:bg-whity"></div>
		</header>
	);
}
