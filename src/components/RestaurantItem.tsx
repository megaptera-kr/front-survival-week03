import RestaurantMenus from './RestaurantMenus';

import { RestaurantType } from '../types/RestaurantType';

type RestaurantItenProps = {
  restaurant: RestaurantType;
};

export default function RestaurantItem({ restaurant }: RestaurantItenProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <RestaurantMenus menu={restaurant.menu} />
    </tr>
  );
}
