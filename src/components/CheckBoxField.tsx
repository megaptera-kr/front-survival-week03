import {useRef, useState} from 'react';

export default function CheckBoxField({label}: {
	label: string;
}) {
	const id = useRef(`checkBox-${label}`.replace(/ /g, '-').toLowerCase());

	const [inStockOnly, setInStockOnly] = useState<boolean>(false);

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
