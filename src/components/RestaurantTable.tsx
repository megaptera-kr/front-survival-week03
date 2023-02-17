import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
    restaurantsData: Restaurant[]
}

export default function RestaurantTable({ restaurantsData }: RestaurantTableProps) {
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
        {
          restaurantsData.map((restaurant) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))
        }
      </tbody>
    </table>
  );
}
