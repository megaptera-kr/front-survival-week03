import {useState} from 'react';

type ButtonFieldProps = {
	value: string;
	btnValue: string;
	setBtnValue: (value: string) => void;
};

export default function ButtonField({value, btnValue, setBtnValue}: ButtonFieldProps) {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		setBtnValue(e.target.value);
	};

	return (
		<button type='button' value={value} onClick={handleClick}>{value}</button>
	);
}
