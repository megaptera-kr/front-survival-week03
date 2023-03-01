import Restaurant from '../types/Restaurant';
import Menu from './Menu';

type RestaurantRowProps = {
    restaurant: Restaurant
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>
        {restaurant.name}
      </td>
      <td>
        {restaurant.category}
      </td>
      <td>
        <ul>
          {restaurant.menus.map((menu) => (
            <Menu
              key={menu.id}
              menu={menu}
            />
          ))}
        </ul>
      </td>
    </tr>
  );
}
