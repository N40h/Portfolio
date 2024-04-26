'use client';
import { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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

	const handleBurgerMenu = () => {
		setIsBurgerMenuOpen(!isBurgerMenuOpen);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`w-screen z-100 fixed top-0 left-0 transition-all duration-75 ease-out shadow-2md shadow-webkit-2md ${
				scrolled ? 'bg-sakura-white opacity-1' : 'bg-transparent' // opacity-0
			}`}
		>
			<div className="w-auto py-6 px-8 flex justify-between items-center my-0 mx-20 relative tablet:block tablet:m-0 tablet:py-4 tablet:px-6 mobile:block mobile:m-0 mobile:py-2 mobile:px-4">
				<Link className="self-start" href="/">
					<Logo />
				</Link>
				<div
					className="hidden text-2xl cursor-pointer absolute top-10 right-10 tablet:block tablet:top-8 tablet:right-8 mobile:block mobile:top-6 mobile:right-6"
					onClick={handleBurgerMenu}
				>
					{isBurgerMenuOpen ? (
						<FontAwesomeIcon icon={faXmark} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</div>
				<ul
					className={`w-auto flex items-center gap-[30px] tracking-widest ${
						isBurgerMenuOpen
							? 'tablet:flex tablet:flex-col tablet:gap-[15px] tablet:absolute tablet:right-0 tablet:bg-sakura-white tablet:w-full mobile:flex mobile:flex-col mobile:gap-[15px] mobile:absolute mobile:right-0 mobile:bg-sakura-white mobile:w-full'
							: 'tablet:hidden mobile:hidden'
					}`}
				>
					<li className="text-[0.8rem] font-medium uppercase tablet:text-sm mobile:text-sm">
						<Link
							className="text-mauve-text no-underline cursor-pointer"
							href="/#about"
							onClick={(e) => handleClick(e, 'about')}
						>
							About
						</Link>
					</li>
					<li className="text-[0.8rem] font-medium uppercase tablet:text-sm mobile:text-sm">
						<Link
							className="text-mauve-text no-underline cursor-pointer"
							href="/#skills"
							onClick={(e) => handleClick(e, 'skills')}
						>
							Skills
						</Link>
					</li>
					<li className="text-[0.8rem] font-medium uppercase tablet:text-sm mobile:text-sm">
						<Link
							className="text-mauve-text no-underline cursor-pointer"
							href="/#projects"
							onClick={(e) => handleClick(e, 'projects')}
						>
							My Projects
						</Link>
					</li>
					<li className="text-[0.8rem] font-medium uppercase tablet:text-sm mobile:text-sm last:tablet:mb-0 last:mobile:mb-0">
						<Link
							className="text-mauve-text no-underline cursor-pointer"
							href="/#contact"
							onClick={(e) => handleClick(e, 'contact')}
							title="contact"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="inline-block text-base tablet:hidden mobile:hidden"
								aria-hidden="false"
							/>
							<span className="hidden tablet:inline-block mobile:inline-block">
								Contact
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
