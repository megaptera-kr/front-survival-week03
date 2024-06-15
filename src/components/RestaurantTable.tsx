import Restaurant from '../type/Restaurant';
import RestarurantRow from './RestaurantRow';

type RestaurantTableProps = {
  filteredRestaurants: Restaurant[];
}

export default function RestarurantTable({
  filteredRestaurants,
}: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th
              style={{
                paddingInline: '2rem',
              }}
            >
              식당 이름
            </th>
            <th>종류</th>
            <th>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {filteredRestaurants.map((restaurant) => (
            <RestarurantRow
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
