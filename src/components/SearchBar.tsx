import TextField from './TextField';
import CheckBoxField from './CheckBoxField';

type searchBarProps = {
	filterText: string;
	setFilterText: (value: string) => void;
	inStockOnly: boolean;
	setInStockOnly: (value: boolean) => void;
};

export default function SearchBar({ filterText, setFilterText, inStockOnly, setInStockOnly }: searchBarProps) {
	return (
		<div className='filterableProductTable'>
			<div className='searchBar'>
				<TextField
					placeholder="Search..."
					filterText={filterText}
					setFilterText={setFilterText}
				/>
				<CheckBoxField
					label='Only show products in stock'
					inStockOnly={inStockOnly}
					setInStockOnly={setInStockOnly}
				/>
				<CheckBoxField
					label='Only show products over $10'
					inStockOnly={inStockOnly}
					setInStockOnly={setInStockOnly}
				/>
			</div>
		</div>
	);
}
