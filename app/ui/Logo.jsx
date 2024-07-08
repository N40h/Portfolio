import Image from 'next/image';

export default function Logo() {
	return (
		<Image
			className="flex size-12 select-none items-center"
			src="/img/marc_villevieille_developpeur_web_freelance_fourchambault_logo.webp"
			width={50}
			height={50}
			alt="Logo de Marc Villevieille développeur web freelance basé à Fourchambault"
		/>
	);
}
