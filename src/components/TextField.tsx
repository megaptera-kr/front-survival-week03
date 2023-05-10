type TextFieldProps = {
	placeholder: string;
	textValue: string;
	setTextValue: (value: string) => void;
};

export default function TextField({placeholder, textValue, setTextValue}: TextFieldProps) {
	const handleText = e => {
		setTextValue(e.target.value.trim());
		console.log(textValue);
	};

	return (
		<div>
			<label htmlFor='search'>검색</label>
			<input type='text' placeholder={placeholder} onChange={handleText} id='search'/>
		</div>
	);
}
