import { RestaurantItem } from '../types/restaurants';

import priceToLocal from '../utils/priceToLocal';

type RestaurantsItemProps = {
  restaurant: RestaurantItem;
}

export default function RestaurantsItem({ restaurant }: RestaurantsItemProps) {
  const {
    name, category, menu,
  } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <ul>
          {menu.map((menuItem) => (
            <li key={menuItem.name}>
              {`${menuItem.name}(${priceToLocal(menuItem.price)}원)`}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}
