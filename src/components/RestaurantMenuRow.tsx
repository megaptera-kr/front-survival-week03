import Restaurant from '../types/Restaurant';

type RestaurantMenuRowProps = {
    restaurant: Restaurant;
  }

export default function RestaurantMenuRow({ restaurant }: RestaurantMenuRowProps) {
  return (
    <td className="restaurant-menu-row">
      <ul>
        {restaurant.menu.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
            (
            {menuItem.price.toLocaleString()}
            )원
          </li>
        ))}
      </ul>
    </td>
  );
}
