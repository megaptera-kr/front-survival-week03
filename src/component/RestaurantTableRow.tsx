import RestaurantMenu from './RestaurantMenu';

import Restaurant from '../types/RestaurantType';

type RestaurantTableRowProps = {
  restaurant: Restaurant;
};

function RestaurantTableRow({ restaurant }: RestaurantTableRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td style={{ padding: '0.4rem 0.4rem' }}>
        {restaurant.menu.map((menu) => (
          <RestaurantMenu key={menu.id} menu={menu} />
        ))}
      </td>
    </tr>
  );
}

export default RestaurantTableRow;
