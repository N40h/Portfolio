import Link from 'next/link';

export default function NavItem({ href, onClick, title, children }) {
	return (
		<li className="text-lg font-medium uppercase lg:text-xs">
			<Link
				className="no-underline focus:outline-none lg:cursor-pointer"
				href={href}
				onClick={onClick}
				title={title}
			>
				{children}
			</Link>
		</li>
	);
}
