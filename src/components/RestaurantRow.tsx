import Restaurant from '../types/Restaurant';
import FoodMenu from './FoodMenu';

type RestaurantRowProps = {
  restaurant: Restaurant;
}

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { category, name, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td style={{ textAlign: 'center' }}>{category}</td>
      <td>
        <ul>
          <FoodMenu menu={menu} />
        </ul>
      </td>
    </tr>
  );
}
