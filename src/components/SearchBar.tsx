import TextField from './TextField';
import ButtonField from './ButtonField';

export default function SearchBar() {
	return (
		<div className='filterableProductTable'>
			<TextField placeholder='식당 이름'/>
			<ButtonField value='전체'/>
			<ButtonField value='중식'/>
			<ButtonField value='한식'/>
			<ButtonField value='일식'/>
		</div>
	);
}
