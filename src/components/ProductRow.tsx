import ProductItem from './ProductItem';
import { restaurants } from '../../restaurants.json';

function ProductRow() {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <ProductItem key={restaurant.name} restaurant={restaurant} />
      ))}
    </tbody>
  );
}

export default ProductRow;
