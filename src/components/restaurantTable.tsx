import ProductContent from './productContent';
import type { Restaurant } from '../types/Restaurant';

export default function RestaurantTable({ products }: { products: Restaurant[] }) {
  return (
    <div>
      <table className="product-table">
        <thead>
          <th>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </thead>
        <tbody>
          {
          // eslint-disable-next-line max-len
            products.map((product) => <ProductContent product={product} key={`product-key-${product.id}`} />)
          }
        </tbody>
      </table>
    </div>
  );
}
