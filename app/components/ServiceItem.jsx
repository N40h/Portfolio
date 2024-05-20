import { viaodaLibre } from '@/app/ui/fonts';

export default function ServiceItem({
	icon,
	title,
	description,
	subtitle,
	tags,
}) {
	return (
		<div className="relative mb-24 flex flex-col items-center rounded-lg border border-solid border-neutral-100 bg-zinc-900 px-5 pb-8 pt-20 lg:mb-0 xl:w-1/3">
			{icon}
			<h3 className={`${viaodaLibre.className} text-2xl`}>{title}</h3>
			<p className="my-6">{description}</p>
			<ul className="flex flex-wrap justify-center gap-3">
				{tags.map((tag, index) => (
					<li
						key={index}
						className="rounded-full border border-solid border-cherry-blossom px-4 py-1 text-cherry-blossom"
					>
						{tag}
					</li>
				))}
			</ul>
		</div>
	);
}
