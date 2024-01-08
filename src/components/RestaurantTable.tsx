import { Restaurants } from '../types/Restaurants';

import RestaurantInCategory from './RestaurantInCategory';

type RestaurantTableProps = {
  filteredCategories: Restaurants[];
};

function RestaurantTable({ filteredCategories }: RestaurantTableProps) {
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
        {filteredCategories.map((Restaurant) => (
          <RestaurantInCategory key={Restaurant.id} Restaurant={Restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
