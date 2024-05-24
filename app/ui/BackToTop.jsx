'use client';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';

export default function BackToTop() {
	const [showScrollToTop, setShowScrollToTop] = useState(false);

	const checkScrollToTop = useCallback(() => {
		const offset = window.scrollY;
		if (!showScrollToTop && offset > 100) {
			setShowScrollToTop(true);
		} else if (showScrollToTop && offset <= 100) {
			setShowScrollToTop(false);
		}
	}, [showScrollToTop]);

	useEffect(() => {
		window.addEventListener('scroll', checkScrollToTop);
		return () => window.removeEventListener('scroll', checkScrollToTop);
	}, [checkScrollToTop]);

	return (
		<>
			{showScrollToTop && (
				<div
					className="fixed bottom-5 right-5 z-1000 flex size-10 cursor-pointer items-center justify-center rounded-full bg-sunny text-2xl text-darken shadow-md"
					title="Retour en haut de la page"
					onClick={() =>
						window.scrollTo({ top: 0, behavior: 'smooth' })
					}
				>
					<FontAwesomeIcon icon={faChevronUp} />
				</div>
			)}
		</>
	);
}
