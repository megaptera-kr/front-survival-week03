import Restaurant from '../types/restaurant';

import TableRestaurantsRowMenu from './RestaurantsTableRowMenu';

type RestaurantsTableRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantsTableRow({ restaurant }: RestaurantsTableRowProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          { restaurant.menu.map((menu) => (
            <TableRestaurantsRowMenu key={menu.id} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}
