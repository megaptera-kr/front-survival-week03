import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

import Product from '../type/Product';

import selectProduct from '../utils/selectProduct';

type ProductsInCategoryProps = {
  category: string;
  products: Product[];
}

export default function ProductsInCategory({ category, products }: ProductsInCategoryProps) {
  const productsInCategory = selectProduct(products, category);

  return (
    <>
      <ProductCategoryRow category={category} />
      {productsInCategory.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </>
  );
}
