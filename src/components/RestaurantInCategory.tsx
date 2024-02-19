import { Restaurants } from '../types/Restaurants';
import MenuRow from './MenuRow';

type RestaurantInCategoryProps = {
  restaurant: Restaurants
}

function RestaurantInCategory({ restaurant }: RestaurantInCategoryProps) {
  return (
    <tr>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <ul>
          {restaurant.menu.map((menu) => (
            <MenuRow key={menu.id} menu={menu} />
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default RestaurantInCategory;
