import Link from 'next/link';

export default function SocialLink({ href, title, children }) {
	return (
		<Link
			href={href}
			target="_blank"
			title={title}
			className="focus:outline-none"
		>
			{children}
		</Link>
	);
}
