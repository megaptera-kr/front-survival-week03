import TextField from './TextField';
import ButtonField from './ButtonField';

type SearchBarProps = {
	btnValue: string;
	setBtnValue: (value: string) => void;
	textValue: string;
	setTextValue: (value: string) => void;
};

export default function SearchBar({ btnValue, setBtnValue, textValue, setTextValue }: SearchBarProps) {
	return (
		<div className='filterableProductTable'>
			<TextField 
				placeholder='식당 이름'
				textValue={textValue}
				setTextValue={setTextValue}
			/>
			<ButtonField 
				value='전체' 
				btnValue={btnValue} 
				setBtnValue={setBtnValue} 
			/>
			<ButtonField 
				value='중식' 
				btnValue={btnValue} 
				setBtnValue={setBtnValue} 
			/>
			<ButtonField 
				value='한식' 
				btnValue={btnValue} 
				setBtnValue={setBtnValue} 
			/>
			<ButtonField 
				value='일식' 
				btnValue={btnValue} 
				setBtnValue={setBtnValue} 
			/>
		</div>
	);
}
