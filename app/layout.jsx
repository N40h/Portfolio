import { numans } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import Footer from './ui/Footer';
import Header from './ui/Header';
config.autoAddCss = false;

export const metadata = {
	title: 'Marc VILLEVIEILLE | Développeur Web Freelance à Fourchambault | Spécialiste React',
	description:
		"Marc VILLEVIEILLE est un développeur web freelance basé à Fourchambault, spécialisé en React. Découvrez ses projets et compétences en création de sites web et d'applications dynamiques.",
	keywords:
		"développeur web freelance, développeur web Fourchambault, spécialiste React, création de sites web, développement d'applications, freelance développeur web",
	openGraph: {
		title: 'Marc VILLEVIEILLE | Développeur Web Freelance à Fourchambault | Spécialiste React',
		type: 'website',
		siteName:
			'Marc VILLEVIEILLE | Développeur Web Freelance à Fourchambault | Spécialiste React',
		url: 'https://marc-villevieille.com',
		description:
			"Marc VILLEVIEILLE est un développeur web freelance basé à Fourchambault, spécialisé en React. Découvrez ses projets et compétences en création de sites web et d'applications dynamiques.",
		images: 'https://marc-villevieille.com/img/opengraph-image.png',
	},
	twitter: {
		title: 'Marc VILLEVIEILLE | Développeur Web Freelance à Fourchambault | Spécialiste React',
		cardType: 'summary_large_image',
		site: '@Naohyo_',
		url: 'https://marc-villevieille.com',
		description:
			"Marc VILLEVIEILLE est un développeur web freelance basé à Fourchambault, spécialisé en React. Découvrez ses projets et compétences en création de sites web et d'applications dynamiques.",
		image: 'https://marc-villevieille.com/img/twitter-image.png',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'Marc VILLEVIEILLE',
	image: 'https://marc-villevieille.com/img/opengraph-imapge.png',
	description:
		"Marc VILLEVIEILLE est un développeur web freelance basé à Fourchambault, spécialisé en React. Découvrez ses projets et compétences en création de sites web et d'applications dynamiques.",
	telephone: '+33 6 98 29 20 20',
	email: 'marc.villevieille.contact@gmail.com',
	address: {
		'@type': 'PostalAddress',
		streetAddress: '14 C Rue Saint Louis',
		addressLocality: 'Fourchambault',
		postalCode: '58600',
		addressRegion: 'Bourgogne-Franche-Comté',
		addressCountry: 'FR',
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '18:00',
		},
	],
	priceRange: '€€',
	areaServed: 'France',
	url: 'https://marc-villevieille.com',
};

export default function RootLayout({ children }) {
	return (
		<html lang="fr">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				></script>
				<Script src="https://www.googletagmanager.com/gtag/js?id=G-N8NKJ6NBG0"></Script>
			</head>
			<body
				className={`${numans.className} m-auto box-border bg-whity text-darken antialiased`}
			>
				<div className="m-auto box-border min-h-screen">
					<Header
						title="Marc Villevieille"
						description="Développeur Web Freelance à Fourchambault"
						promesse="Bienvenue sur mon portfolio ! Je suis un développeur web freelance basé à Fourchambault, spécialisé en React. Découvrez mes projets et compétences dans la création de sites web performants et d'applications dynamiques. Je suis prêt à répondre à vos besoins en développement web, en vous offrant des solutions sur mesure et innovantes."
					/>
					<main>
						{children}
						<Analytics />
						<SpeedInsights />
					</main>
					<Footer copyright="© 2024 Marc Villevieille, All Rights Reserved." />
				</div>
			</body>
		</html>
	);
}
