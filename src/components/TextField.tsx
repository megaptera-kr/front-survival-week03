type TextFieldProps = {
	placeholder: string;
};

export default function TextField({ placeholder }: TextFieldProps) {

	return (
		<div>
			<span>검색</span>
			<input type='text' placeholder={placeholder}/>
		</div>
	);
}
