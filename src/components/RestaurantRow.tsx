import RestaurantMenu from './RestaurantMenu';

import { Restaurant } from '../types/restaurants';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((food) => (
            <RestaurantMenu key={food.id} food={food} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
