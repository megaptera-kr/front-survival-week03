import { useState } from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import type Product from '../type/Product';

type FilterableProductTableProps = {
	products: Product[];
};

export default function FilterableProductTable({products}: FilterableProductTableProps) {
	const [inStockOnly, setInStockOnly] = useState<boolean>(false);
	const [filterText, setFilterText] = useState<string>('');

	const query = filterText.trim().toLowerCase();
	let filteredProducts = !query.length ? products : products.filter((product) => product.name.toLowerCase().includes(query));

	filteredProducts = !inStockOnly ? filteredProducts : filteredProducts.filter((product) => product.stocked === true)

	return (
		<div>
			<SearchBar
			filterText={filterText}
			setFilterText={setFilterText}
			inStockOnly={inStockOnly}
			setInStockOnly={setInStockOnly}
			/>
			<ProductTable products={filteredProducts} />
		</div>
	);
}
