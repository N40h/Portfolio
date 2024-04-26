import Image from 'next/image';
import logoImage from '/public/img/marc_villevieille_logo.webp';

export default function Logo() {
	return (
		<Image
			className="flex items-center w-[50px] h-[50px]"
			src={logoImage}
			alt="logo"
			width={50}
			height={50}
			loading="lazy"
		/>
	);
}
