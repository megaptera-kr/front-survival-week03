import { Restaurant, RestaurantMenu } from '../types/Restaurant';
import RestaurantMenuList from './RestaurantMenuList';

type RestaurantTableProps = {
  restaurantsData: Restaurant[];
}

export default function RestaurantTable({ restaurantsData }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurantsData.map((restaurant:Restaurant) => (
          <tr key={restaurant.id}>
            <td>{restaurant.name}</td>
            <td>{restaurant.category}</td>
            <td>
              {restaurant.menu.map((restaurantMenu:RestaurantMenu) => (
                <RestaurantMenuList
                  key={restaurantMenu.id}
                  restaurantMenu={restaurantMenu}
                />
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  );
}
