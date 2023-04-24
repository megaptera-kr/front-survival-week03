import RestaurantItem from './RestaurantItem';

import { RestaurantType } from '../types/RestaurantType';

type RestaurantMenuListProps = {
  restaurants: RestaurantType[];
};

export default function RestaurantMenuList({
  restaurants,
}: RestaurantMenuListProps) {
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
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
