'use client';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Button from './Button';
import Field, { FIELD_TYPES } from './Field';
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
					<Field
						label="Votre nom *"
						id="name"
						name="name"
						placeholder=""
						value={formData.name}
						handleChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => setIsFocused(e.target.value !== '')}
						required
					/>
					<Field
						type={FIELD_TYPES.INPUT_EMAIL}
						label="Votre email *"
						id="email"
						name="email"
						placeholder=""
						value={formData.email}
						handleChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => setIsFocused(e.target.value !== '')}
						required
					/>
				</div>
				<div className="w-full lg:w-1/2">
					<Field
						type={FIELD_TYPES.INPUT_PHONE}
						label="Numéro de téléphone"
						id="phone"
						name="phone"
						placeholder=""
						value={formData.phone}
						handleChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => setIsFocused(e.target.value !== '')}
					/>
					<Field
						label="Objet *"
						id="object"
						name="object"
						placeholder=""
						value={formData.object}
						handleChange={handleChange}
						onFocus={() => setIsFocused(true)}
						onBlur={(e) => setIsFocused(e.target.value !== '')}
						required
					/>
				</div>
			</div>
			<div className="w-full">
				<Field
					type={FIELD_TYPES.TEXTAREA}
					label="Message *"
					id="message"
					name="message"
					placeholder=""
					value={formData.message}
					handleChange={handleChange}
					onFocus={() => setIsFocused(true)}
					onBlur={(e) => setIsFocused(e.target.value !== '')}
					required
				/>
				{isSubmitted && (
					<p className="mx-auto my-5 w-full p-1 text-center text-sm">
						Message envoyée avec succés!
					</p>
				)}
				<Button
					type="submit"
					text="Envoyer"
					className="cursor-pointer rounded bg-sunny px-4 py-2 text-xs font-medium uppercase text-darken shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:text-sm lg:text-base"
				/>
			</div>
		</form>
	);
}
