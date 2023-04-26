import {useRef} from 'react';

export default function CheckBoxField({label}: {
	label: string;
}) {
	const id = useRef(`checkBox-${label}`.replace(/ /g, '-').toLowerCase());

	return (
		<div>
			<input type='checkbox' id={id.current} />
			<label htmlFor={id.current}>{label}</label>
		</div>
	);
}
