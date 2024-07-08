import { viaodaLibre } from '@/app/ui/fonts';

export default function ServiceItem({ icon, title, description, tags }) {
	return (
		<div className="relative mb-24 flex flex-col items-center gap-8 rounded-lg border border-solid border-darken/10 bg-white px-5 pb-8 pt-20 shadow-sm lg:mb-0 xl:w-1/3">
			{icon}
			<h3 className={`${viaodaLibre.className} text-2xl`}>{title}</h3>
			<p>{description}</p>
			<ul className="flex flex-wrap justify-center gap-3">
				{tags.map((tag, index) => (
					<li
						key={index}
						className="rounded-full border border-solid border-sunny px-4 py-1"
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
}
