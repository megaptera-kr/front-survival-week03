type TextFieldProps = {
	placeholder: string;
	textValue: string;
	setTextValue: (value: string) => void;
};

export default function TextField({ placeholder, textValue, setTextValue }: TextFieldProps) {

	const handleText = (e) => {
		setTextValue(e.target.value);
		console.log(textValue);
	};

	return (
		<div>
			<span>검색</span>
			<input type='text' placeholder={placeholder} onChange={handleText}/>
		</div>
	);
}
