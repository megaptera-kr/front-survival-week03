import { Restaurants } from '../types/Restaurants';
import MenuItem from './MenuItem';

function ProductItem({ restaurant }: { restaurant: Restaurants }) {
  return (
    <tr className="ProductRow" key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {restaurant.menu.map((menuItem) => (
          <MenuItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </td>
    </tr>
  );
}

export default ProductItem;
