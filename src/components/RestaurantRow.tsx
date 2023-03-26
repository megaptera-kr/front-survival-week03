import Restaurant from '../types/Restaurant';
import Foods from './Foods';

export interface RestaurantRow {
    restaurant: Restaurant;
}

export function RestaurantRow({ restaurant }: RestaurantRow) {
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
