import { Restaurants } from '../types/Restaurants';

import RestaurantMenus from './RestaurantMenus';

type RestaurantInCategoryProps = {
  Restaurant: Restaurants;
};

function RestaurantInCategory({ Restaurant }: RestaurantInCategoryProps) {
  return (
    <tr>
      <td>{Restaurant.name}</td>
      <td>{Restaurant.category}</td>
      <td>
        <ul>
          {Restaurant.menu.map((menu) => (
            <RestaurantMenus key={menu.id} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantInCategory;
