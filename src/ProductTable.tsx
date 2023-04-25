import ProductsInCategory from './components/ProductsInCategory';

import Product from './type/Product';

type ProductTableProps = {
  products: Product[];
};

export default function ProductTable({ products }: ProductTableProps) {
  const categories = products.reduce((acc: string[], product) => (
    acc.includes(product.category) ? acc : [...acc, product.category]
  ), []);

  return (
    <table className="productTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category) => (
          <ProductsInCategory
            key={category}
            category={category}
            products={products}
          />
        ))}
      </tbody>
    </table>
  );
}
