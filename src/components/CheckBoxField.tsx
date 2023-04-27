import {useRef, useState} from 'react';

type CheckBoxFieldProps = {
	label: string;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function CheckBoxField({ label, inStockOnly, setInStockOnly }: CheckBoxFieldProps) {
	const id = useRef(`checkBox-${label}`.replace(/ /g, '-').toLowerCase());

	const handelChange = () => {
		setInStockOnly(!inStockOnly);
	};

	return (
		<div>
			<input type='checkbox' id={id.current} checked={inStockOnly} onChange={handelChange}/>
			<label htmlFor={id.current}>{label}</label>
		</div>
	);
}
