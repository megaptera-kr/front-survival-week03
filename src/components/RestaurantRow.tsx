import Restaurant from '../types/Restaurant';
import MenuList from './MenuList';

type RestaurantRowProps = {
    restaurant : Restaurant
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuList key={menu.id} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}
