import type Restaurant from '../types/Restaurant';
import RestaurantHeader from './RestaurantHeader';
import RestaurantRow from './RestaurantRow';

type RestaurantTableProps = {
  restaurants : Restaurant[];
}

export default function RestaurantTable(
  { restaurants }: RestaurantTableProps,
) {
  return (
    <table>
      <RestaurantHeader />
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantRow
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </table>
  );
}
