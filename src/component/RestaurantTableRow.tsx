import RestaurantMenu from './RestaurantMenu';

import Restaurant from '../types/RestaurantType';

type RestaurantTableRowProps = {
  restaurant: Restaurant;
};

function RestaurantTableRow({ restaurant }: RestaurantTableRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>

      <td>
        {restaurant.menu.map((menu) => (
          <RestaurantMenu key={menu.id} menu={menu} />
        ))}
      </td>
    </tr>
  );
}

export default RestaurantTableRow;
