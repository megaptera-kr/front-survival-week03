import { Restaurant } from '../types/types';
import RestaurantRow from './RestaurantRow';

interface RestaurantTableProps{
    restaurants: Restaurant[]
}

function RestaurantTable({ restaurants } : RestaurantTableProps) {
  return (
    <table style={{ width: 'max-content' }}>
      <thead>
        <tr>
          <th style={{ paddingInline: '30px' }}>식당 이름</th>
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
