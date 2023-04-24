import { Restaurant } from '../types/types';
import MenuRow from './MenuRow';

interface RestaurantRowProps{
    restaurant: Restaurant
}

function RestaurantRow({ restaurant } : RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuRow key={menu.id} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
