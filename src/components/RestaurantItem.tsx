import { Restaurants } from '../types/Restaurants';
import MenuItem from './MenuItem';

interface RestaurantItemProps {
    restaurant: Restaurants;
}

function RestaurantItem({ restaurant }: RestaurantItemProps) {
  return (
    <tr className="ProductRow" key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        {restaurant.menu.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            menuItem={menuItem}
          />
        ))}
      </td>
    </tr>
  );
}

export default RestaurantItem;
