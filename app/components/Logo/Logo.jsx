import Image from 'next/image';

export default function Logo() {
	return (
		<Image
			className="flex items-center w-[50px] h-[50px]"
			src="/img/marc_villevieille_logo.webp"
			alt="logo"
			width={50}
			height={50}
			loading="lazy"
		/>
	);
}
