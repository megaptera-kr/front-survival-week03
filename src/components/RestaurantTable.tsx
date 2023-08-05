import RestaurantRow from './RestaurantRow';

import type { Restaurant } from '../types/restaurants';

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: 'left' }}>식당이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
