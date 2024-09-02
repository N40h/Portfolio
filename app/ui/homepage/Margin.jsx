import { viaodaLibre } from '@/app/ui/fonts';

export default function Margin() {
	return (
		<section
			className="flex flex-col items-center p-12 sm:p-14 lg:mx-auto lg:my-7 lg:max-w-6xl lg:p-16"
			id="margin"
		>
			<div className="flex w-full flex-col items-center gap-8 p-2 text-center lg:w-4/5">
				<h2
					className={`${viaodaLibre.className} p-1 text-center text-3xl font-normal lg:text-4xl`}
				>
					Margin Web Solutions
				</h2>
				<p className="p-1 text-sm font-normal text-darken/70 lg:text-base">
					En 2024 je démarre mon activité en freelance en même temps
					que{' '}
					<a
						href="https://adrienblanco.com/"
						className="font-bold text-darken underline"
					>
						Adrien Blanco
					</a>
					, un ami développeur.
				</p>
				<p className="p-1 text-sm font-normal text-darken/70 lg:text-base">
					Pour plus d&apos;efficacité, et également car nous aimons le
					travail en équipe, nous décidons de lancer{' '}
					<a
						href="https://margin-web.com/"
						className="font-bold text-darken underline"
					>
						Margin
					</a>
					, notre micro-agence de création de{' '}
					<span className="font-bold">sites vitrines</span> à
					destination{' '}
					<span className="font-bold">des artisans et des PME</span>{' '}
					autour de chez nous.
				</p>
				<p className="p-1 text-sm font-normal text-darken/70 lg:text-base">
					N&apos;hésitez pas à venir jeter un oeil et à nous contacter
					:{' '}
					<a href="https://margin-web.com" className="underline">
						margin-web.com
					</a>
				</p>
			</div>
		</section>
	);
}
