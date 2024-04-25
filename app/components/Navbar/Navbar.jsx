'use client';
import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 50 || window.innerWidth < 768) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	const handleClick = (e, id) => {
		e.preventDefault();
		const element = document.getElementById(id);
		window.scrollTo({
			top: element.offsetTop - 98,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	// let navbarClasses = [`${className}`];
	// if (scrolled) {
	// 	navbarClasses.push('bg-sakura-white');
	// }

	return (
		<nav
			className={`w-screen z-100 fixed top-0 left-0 transition-all duration-75 ease-out shadow-2md shadow-webkit-2md ${
				scrolled
					? 'bg-sakura-white opacity-1'
					: 'bg-transparent opacity-0'
			}`}
		>
			<div>
				<a href="/">
					<Logo />
				</a>
			</div>
		</nav>
	);
}
