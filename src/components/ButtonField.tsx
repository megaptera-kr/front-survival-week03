type ButtonFieldProps = {
	value: string;
};

export default function ButtonField({ value }: ButtonFieldProps) {

	return (
		<button type='button' value={value}>{value}</button>
	);
}
