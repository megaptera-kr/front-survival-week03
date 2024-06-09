import { Restaurant } from '../types/Restaurant';
import Foods from './Foods';

type RestaurantProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        <Foods menu={menu} />
      </td>
    </tr>
  );
}
