import { Restaurant } from '../types';
import RestaurantRow from './RestaurantRow';

interface RestaurantsTableProps {
  filteredRestaurants: Restaurant[];
}

export default function RestaurantsTable({ filteredRestaurants }:RestaurantsTableProps) {
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
        {filteredRestaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
