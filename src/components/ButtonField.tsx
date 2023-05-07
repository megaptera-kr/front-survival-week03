import { useState } from "react";

type ButtonFieldProps = {
	value: string;
};

export default function ButtonField({ value }: ButtonFieldProps) {
	const [btnValue, setBtnValue] = useState(value);

	const handleClick = (e) => {
		setBtnValue(e.target.value);
		console.log(btnValue);
	}

	return (
		<button type='button' value={btnValue} onClick={handleClick}>{btnValue}</button>
	);
}
