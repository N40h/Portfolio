import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { viaodaLibre } from '../ui/fonts';

export default function Modal({ selectedProject, closeModal }) {
	if (!selectedProject) return null;

	return (
		<>
			<div className="fixed inset-0 z-100 h-screen w-screen">
				<div className="fixed inset-0 h-screen w-screen bg-modal-overlay"></div>
				<div className="absolute left-2/4 top-2/4 max-h-[80vh] w-[90%] min-w-80 -translate-x-1/2 -translate-y-1/2 overflow-auto rounded bg-neutral-100 p-4 lg:p-7">
					<div className="relative p-4 md:p-6 lg:p-9">
						<div
							className="absolute right-0 top-0 cursor-pointer border-none bg-transparent transition-transform duration-300 ease-in-out hover:scale-125"
							onClick={closeModal}
						>
							<FontAwesomeIcon icon={faX} />
						</div>
						<div className="flex flex-col gap-4 p-3 leading-5 lg:flex-row">
							<h2
								className={`${viaodaLibre.className} text-center text-3xl lg:hidden`}
							>{`Front-end du site ${selectedProject.title}`}</h2>
							<Image
								className="w-full rounded object-cover md:h-96 lg:w-1/2"
								src={selectedProject.mockup_desktop}
								alt={`Mockup du site ${selectedProject.title}`}
								width={580}
								height={400}
								sizes="(max-width: 500px) 500px, 800px"
							/>
							<div className="flex flex-col gap-4">
								<h2
									className={`${viaodaLibre.className} hidden text-center text-3xl lg:block`}
								>{`Front-end du site ${selectedProject.title}`}</h2>
								<p>
									<span className="font-bold">Année:</span>{' '}
									{selectedProject.year}
								</p>
								<p>
									<span className="font-bold">Mission:</span>{' '}
									{selectedProject.objectives}
								</p>
								<span className="font-bold">
									Technologies utilisés:
								</span>
								<div className="flex flex-wrap gap-2">
									{selectedProject.tags.map((tag, index) => (
										<span
											key={index}
											className="rounded-full border border-solid border-cherry-blossom px-2 py-1 text-sm text-mauve-text"
										>
											{tag}
										</span>
									))}
								</div>
								<div>
									{selectedProject.url && (
										<a
											href={selectedProject.url}
											title="Lien vers le site"
											target="_blank"
											className="rounded-full bg-cherry-blossom p-2 text-sm text-mauve-text shadow-md transition-colors duration-500 hover:border hover:border-solid hover:border-zinc-700 hover:bg-transparent"
										>
											Visiter le site
										</a>
									)}
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-5 p-3 lg:grid-cols-2">
							<Image
								className="w-full rounded object-cover md:h-96"
								src={selectedProject.mockup_desktop}
								alt={`Mockup du site ${selectedProject.title}`}
								width={580}
								height={400}
								sizes="(max-width: 500px) 500px, 800px"
							/>
							<Image
								className="w-full rounded object-cover md:h-96"
								src={selectedProject.mockup_desktop}
								alt={`Mockup du site ${selectedProject.title}`}
								width={580}
								height={400}
								sizes="(max-width: 500px) 500px, 800px"
							/>
							<Image
								className="w-full rounded object-cover md:h-96"
								src={selectedProject.mockup_desktop}
								alt={`Mockup du site ${selectedProject.title}`}
								width={580}
								height={400}
								sizes="(max-width: 500px) 500px, 800px"
							/>
							<Image
								className="w-full rounded object-cover md:h-96"
								src={selectedProject.mockup_desktop}
								alt={`Mockup du site ${selectedProject.title}`}
								width={580}
								height={400}
								sizes="(max-width: 500px) 500px, 800px"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
