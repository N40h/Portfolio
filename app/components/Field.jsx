export const FIELD_TYPES = {
	INPUT_TEXT: 1,
	INPUT_EMAIL: 2,
	INPUT_PHONE: 3,
	TEXTAREA: 4,
};

export default function Field({
	type = FIELD_TYPES.INPUT_TEXT,
	label,
	name,
	placeholder,
	value,
	handleChange,
	required,
}) {
	let component;
	switch (type) {
		case FIELD_TYPES.INPUT_TEXT:
			component = (
				<input
					type="text"
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					required={required}
					className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
				/>
			);
			break;
		case FIELD_TYPES.INPUT_EMAIL:
			component = (
				<input
					type="email"
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					required={required}
					className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
				/>
			);
			break;
		case FIELD_TYPES.INPUT_PHONE:
			component = (
				<input
					type="tel"
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
				/>
			);
			break;
		case FIELD_TYPES.TEXTAREA:
			component = (
				<textarea
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="h-40 w-[95%] resize-none border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
				/>
			);
			break;
		default:
			component = (
				<input
					type="text"
					id={name}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					required={required}
					className="w-[95%] border-x-0 border-b border-t-0 border-solid border-darken bg-transparent p-2 text-sm outline-none lg:w-full"
				/>
			);
	}

	return (
		<div className="relative mb-11 lg:mb-16">
			{component}
			<label
				htmlFor={name}
				className="absolute left-0 top-0 inline-block text-sm transition-all duration-500 ease-in-out"
			>
				{label}
			</label>
		</div>
	);
}
