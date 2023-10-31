import RestaurantsMenu from './RestaurantMenu';
import { Restaurants } from '../type/Restaurants';

export default function RestaurantsTable({ restaurants }: { restaurants: Restaurants[] }) {
  return (
    <table className="restaurants-table">
      <thead>
        <tr>
          <th className="category">분류</th>
          <th className="store-name">매장명</th>
          <th className="menu">메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant: Restaurants) => (
          <tr key={`restaurant_${restaurant.id}`}>
            <td>
              {restaurant.category}
            </td>
            <td>
              {restaurant.name}
            </td>
            <td className="menu-list">
              <RestaurantsMenu menus={restaurant.menu} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
