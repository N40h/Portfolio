'use client';
import { faBars, faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Logo from './Logo';
import NavItem from './NavItem';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

	const handleScroll = useCallback(() => {
		const offset = window.scrollY;
		if (offset > 50 || window.innerWidth < 768) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	}, []);

	const handleClick = useCallback((e, id) => {
		e.preventDefault();
		const element = document.getElementById(id);
		window.scrollTo({
			top: element.offsetTop - 50,
			behavior: 'smooth',
		});
	}, []);

	const handleBurgerMenu = useCallback(() => {
		setIsBurgerMenuOpen((prev) => !prev);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	return (
		<nav
			className={`fixed left-0 top-0 z-100 w-screen shadow-md transition-all duration-700 ease-out ${
				scrolled ? 'bg-whity opacity-100' : 'bg-transparent opacity-0'
			}`}
		>
			<div className="relative block w-auto px-4 py-2 sm:px-6 sm:py-4 lg:mx-20 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-6">
				<Link
					href="/"
					className="inline-block size-[50px] focus:outline-none"
				>
					<Logo />
				</Link>
				<div className="absolute right-4 top-4 block text-2xl sm:right-6 sm:top-6 lg:hidden">
					{isBurgerMenuOpen ? (
						<FontAwesomeIcon
							icon={faXmark}
							onClick={handleBurgerMenu}
							className="cursor-pointer"
						/>
					) : (
						<FontAwesomeIcon
							icon={faBars}
							onClick={handleBurgerMenu}
							className="cursor-pointer"
						/>
					)}
				</div>
				<ul
					className={`flex h-screen w-auto flex-col items-center justify-center gap-4 tracking-widest lg:h-full lg:flex-row lg:gap-8 ${
						isBurgerMenuOpen ? '' : 'hidden lg:flex'
					}`}
				>
					<NavItem
						href="/#a-propos"
						onClick={(e) => {
							handleClick(e, 'about');
							handleBurgerMenu();
						}}
					>
						À propos
					</NavItem>
					<NavItem
						href="/#services"
						onClick={(e) => {
							handleClick(e, 'services');
							handleBurgerMenu();
						}}
					>
						Mes Services
					</NavItem>
					<NavItem
						href="/#projets"
						onClick={(e) => {
							handleClick(e, 'projects');
							handleBurgerMenu();
						}}
					>
						Mes Projets
					</NavItem>
					<NavItem
						href="/#contact"
						onClick={(e) => {
							handleClick(e, 'contact');
							handleBurgerMenu();
						}}
						title="contact"
					>
						<FontAwesomeIcon
							icon={faEnvelope}
							className="inline-block lg:text-base"
							aria-hidden="false"
						/>
					</NavItem>
				</ul>
			</div>
		</nav>
	);
}
