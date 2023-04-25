import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

import Product from './type/Product';

type FilterableProductTableProps = {
  products: Product[];
};

export default function FilterableProductTable({ products }: FilterableProductTableProps) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
