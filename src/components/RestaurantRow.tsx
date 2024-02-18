import Menus from './Menus';

import Restaurant from '../types/Restaurant';

type RestaurantProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td style={{ textAlign: 'center' }}>
        {name}
      </td>
      <td>
        {category}
      </td>
      <td>
        <Menus menus={menu} />
      </td>
    </tr>
  );
}
