import Menus from './Menus';

import { IRestaurant } from '../types/restaurant';

type RestaurantProps = {
  restaurant: IRestaurant;
};

function Restaurant({ restaurant }: RestaurantProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menus menus={restaurant.menu} />
      </td>
    </tr>
  );
}

export default Restaurant;
