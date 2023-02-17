import Menus from './Menus';

import Restaurant from '../types/Restaurant';

type RestaurantInformationProps = {
  restaurant: Restaurant;
}

export default function RestaurantInformation({
  restaurant,
} : RestaurantInformationProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <Menus restaurant={restaurant} />
      </td>
    </tr>
  );
}
