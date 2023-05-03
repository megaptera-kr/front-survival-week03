import type Restaurant from '../types/Restaurant';
import MenuRow from './MenuRow';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow(
  { restaurant } : RestaurantRowProps,
) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuRow
              key={menu.id}
              menu={menu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
