import Footer from '@/app/layout/Footer';
import Header from '@/app/layout/Header';
import { numans } from '@/app/ui/fonts';
import '@/app/ui/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
config.autoAddCss = false;

export const metadata = {
	title: 'Marc VILLEVIEILLE - Développeur Front-End',
	description:
		"Marc VILLEVIEILLE, développeur front-end en freelance. Spécialisé en React pour la création de sites web et d'applications web. Enchanté de faire votre connaissance et bienvenue sur mon portfolio personnel.",
	openGraph: {
		title: 'Marc VILLEVIEILLE - Développeur Front-End en freelance',
		type: 'website',
		siteName: 'Marc VILLEVIEILLE - Développeur Front-End',
		url: 'https://marc-villevieille.com',
		description:
			"Marc VILLEVIEILLE, développeur front-end en freelance. Spécialisé en React pour la création de sites web et d'applications web. Enchanté de faire votre connaissance et bienvenue sur mon portfolio personnel.",
		images: 'https://marc-villevieille.com/img/opengraph-image.png',
	},
	twitter: {
		title: 'Marc VILLEVIEILLE - Développeur Front-End',
		cardType: 'summary_large_image',
		site: '@Naohyo_',
		url: 'https://marc-villevieille.com',
		description:
			"Marc VILLEVIEILLE, développeur front-end en freelance. Spécialisé en React pour la création de sites web et d'applications web. Enchanté de faire votre connaissance et bienvenue sur mon portfolio personnel.",
		image: 'https://marc-villevieille.com/img/twitter-image.png',
	},
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'Marc VILLEVIEILLE',
	image: 'https://marc-villevieille.com/img/opengraph-imapge.png',
	description:
		"Développeur front-end en freelance. Spécialisé en React pour la création de sites web et d'applications web.",
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
						description="Bonjour, je suis Marc Villevieille développeur front-end en
					freelance. Enchanté de faire votre connaissance et bienvenue
					sur mon portfolio personnel."
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
