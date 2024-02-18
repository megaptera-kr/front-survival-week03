import RestaurantTableHeader from './RestaurantTableHeader';
import RestaurantRow from './RestaurantRow';

import Restaurant from '../types/Restaurant';

type RestaurantTableProps = {
  restaurants: Restaurant[];
};

export default function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <div>
      <table>
        <RestaurantTableHeader />
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
