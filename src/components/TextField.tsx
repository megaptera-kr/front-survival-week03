import { ChangeEvent, useState } from "react";

type TextFieldProps = {
	placeholder: string;
};

export default function TextField({placeholder}: TextFieldProps) {
	const [filterText, setFilterText] = useState<string>('');

	const handleChange = (e: ChangeEvent) => {
		const { value } = e.target;
		setFilterText(value);
	};

	return (
		<div>
			<input type='text' placeholder={placeholder} value={filterText} onChange={handleChange}/>
		</div>
	);
}
