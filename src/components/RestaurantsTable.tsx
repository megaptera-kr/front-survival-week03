import RestaurantRow from './RestaurantRow';
import { Restaurant } from '../types/types';

type RestaurantsTableProps = {
  restaurants:Restaurant[];
}
export default function RestaurantsTable({
  restaurants,
}:RestaurantsTableProps) {
  const restaurantList = restaurants.map((restaurant) => (
    <RestaurantRow key={restaurant.id} restaurant={restaurant} />
  ));

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
        {restaurantList}
      </tbody>
    </table>
  );
}
