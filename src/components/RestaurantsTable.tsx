import { Restaurants } from '../types/Restaurants';
import RestaurantInCategory from './RestaurantInCategory';

type RestaurantsTableProps = {
  restaurants: Restaurants[]
}

function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <th style={{ paddingInline: '2rem' }}>식당 이름</th>
        <th>종류</th>
        <th>메뉴</th>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantInCategory
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantsTable;
