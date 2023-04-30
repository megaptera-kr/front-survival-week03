import Restaurant from '../types/restaurant';

import RestaurantsTableRow from './RestaurantsTableRow';

type RestaurantsTableProps = {
  restaurants : Restaurant[];
}

export default function RestaurantsTable({ restaurants }: RestaurantsTableProps) {
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
        { restaurants.map((restaurant) => (
          <RestaurantsTableRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}
