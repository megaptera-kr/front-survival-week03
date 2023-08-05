import { Restaurants } from '../types/restaurants';
import RestaurantsItem from './RestaurantsItem';

type RestaurantsTableProps = {
  restaurants: Restaurants;
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ paddingInline: '2rem' }}>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants?.map((restaurantItem) => (
          <RestaurantsItem key={restaurantItem.id} restaurant={restaurantItem} />
        ))}
      </tbody>
    </table>
  );
}
