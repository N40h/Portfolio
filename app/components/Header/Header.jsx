import Navbar from '../Navbar/Navbar';

export default function Header() {
	return (
		<header className="h-screen bg-hero bg-cover bg-no-repeat bg-fixed bg-50-70 relative bg-dark-background tablet:bg-scroll mobile:bg-scroll">
			<div className="absolute top-0 left-0 w-full h-full bg-overlay"></div>
			<Navbar />
		</header>
	);
}
