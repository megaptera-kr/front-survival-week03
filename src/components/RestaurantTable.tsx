import Restaurant from '../types/Restaurant';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants: Restaurant[];
}

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{
              paddingInline: '2rem',
            }}
            >
              name
            </th>
            <th>
              category
            </th>
            <th>
              Foods
            </th>
          </tr>
        </thead>
        <tbody>
          {
            restaurants.map((restaurant) => (
              <RestaurantRow key={restaurant.id} restaurant={restaurant} />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
