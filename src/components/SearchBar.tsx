import TextField from './TextField';
import CheckBoxField from './CheckBoxField';

export default function SearchBar() {
	return (
		<div className='filterableProductTable'>
			<div className='searchBar'>
				<TextField placeholder="Search..." />
				<CheckBoxField label='Only show products in stock' />
				<CheckBoxField label='Only show products over $10' />
			</div>
		</div>
	);
}
