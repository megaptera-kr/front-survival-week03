import RestaurantList from './RestaurantList';

import Restaurant from '../types/restaurant';

type MenuTableProps = {
  filteredRestaurant: Restaurant[]
}

export default function MenuTable({ filteredRestaurant }:MenuTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{ paddingInline: '2rem' }}>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredRestaurant
              .map((restaurant) => (
                <RestaurantList
                  key={restaurant.id}
                  restaurant={restaurant}
                />
              ))
          }
        </tbody>
      </table>
    </div>
  );
}
