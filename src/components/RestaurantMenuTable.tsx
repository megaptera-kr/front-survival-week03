import RestaurantRow from './RestaurantRow';

import Restaurant from '../types/Restaurant';

type RestaurantMenuTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantMenuTable({ restaurants }: RestaurantMenuTableProps) {
  return (
    <div>
      {/* 레스토랑&메뉴 테이블 */}
      <table>
        <colgroup>
          <col width={120} />
          <col width={50} />
          <col width={300} />
        </colgroup>
        <thead>
          <tr>
            <th>식당 이름</th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <RestaurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
