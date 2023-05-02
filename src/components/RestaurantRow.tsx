import MenuItem from './MenuItem';
import { Restaurant } from '../types/types';

type RestaurantRowProps = {
  restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }:RestaurantRowProps) {
  const menus = restaurant.menu.map((menu) => (
    <MenuItem key={menu.id} menu={menu} />
  ));
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {menus}
        </ul>
      </td>
    </tr>
  );
}
