import MenuRow from './MenuRow';

import { Menu, Restaurant } from '../types/Restaurants';

type RestaurantRowProps = {
    restaurant : Restaurant
}

function RestaurantRow({ restaurant } :RestaurantRowProps) {
  const {
    category, id, menu, name,
  } = restaurant;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((item : Menu) => <MenuRow key={item.id} menu={item} />)}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantRow;
