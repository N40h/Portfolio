'use client';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_API_KEY);

export default function ContactForm() {
	const [isFocused, setIsFocused] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		object: '',
		message: '',
	});
	const [isSubmitted, setIsSubmitted] = useState(false);
	const form = useRef();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			formData.name &&
			formData.email &&
			formData.object &&
			formData.message
		) {
			emailjs.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
				form.current,
				process.env.NEXT_PUBLIC_EMAILJS_API_KEY
			);
			setIsSubmitted(true);
			setFormData({
				name: '',
				email: '',
				phone: '',
				object: '',
				message: '',
			});
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		}
	};

	return (
		<form
			method="POST"
			ref={form}
			onSubmit={handleSubmit}
			className="my-12 w-11/12 md:w-4/5 lg:w-3/5"
		>
			<div className="flex flex-col md:flex-row md:gap-9 lg:gap-14">
				<div className="w-full lg:w-1/2">
					<div className="relative mb-11 lg:mb-16">
						<input
							className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
							type="text"
							id="name"
							name="name"
							placeholder=""
							value={formData.name}
							onChange={handleChange}
							onFocus={() => setIsFocused(true)}
							onBlur={(e) => setIsFocused(e.target.value !== '')}
							required
						></input>
						<label
							htmlFor="name"
							className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
						>
							Votre nom *
						</label>
					</div>
					<div className="relative mb-11 lg:mb-16">
						<input
							className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
							type="email"
							id="email"
							name="email"
							placeholder=""
							value={formData.email}
							onChange={handleChange}
							onFocus={() => setIsFocused(true)}
							onBlur={(e) => setIsFocused(e.target.value !== '')}
							required
						></input>
						<label
							htmlFor="email"
							className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
						>
							Votre email *
						</label>
					</div>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="relative mb-11 lg:mb-16">
						<input
							className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
							type="tel"
							id="phone"
							name="phone"
							placeholder=""
							value={formData.phone}
							onChange={handleChange}
							onFocus={() => setIsFocused(true)}
							onBlur={(e) => setIsFocused(e.target.value !== '')}
						></input>
						<label
							htmlFor="phone"
							className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
						>
							Numéro de téléphone
						</label>
					</div>
					<div className="relative mb-11 lg:mb-16">
						<input
							className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
							type="text"
							id="object"
							name="object"
							placeholder=""
							value={formData.object}
							onChange={handleChange}
							onFocus={() => setIsFocused(true)}
							onBlur={(e) => setIsFocused(e.target.value !== '')}
							required
						></input>
						<label
							htmlFor="object"
							className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
						>
							Objet *
						</label>
					</div>
				</div>
			</div>
			<div>
				<div className="relative mb-11 lg:mb-16">
					<textarea
						className="h-40 w-[95%] resize-none border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
						id="message"
						name="message"
						placeholder=""
						value={formData.message}
						onChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => setIsFocused(e.target.value !== '')}
						required
					></textarea>
					<label
						htmlFor="message"
						className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
					>
						Message *
					</label>
				</div>
				{isSubmitted && (
					<p className="w-full p-1 text-center my-5 mx-auto text-sm">
						Message envoyée avec succés!
					</p>
				)}
				<button
					type="submit"
					className="cursor-pointer rounded bg-sunny px-4 py-2 text-xs font-medium uppercase text-darken shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:text-sm lg:text-base"
				>
					Envoyer
				</button>
			</div>
		</form>
	);
}
