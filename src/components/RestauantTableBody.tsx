import RestaurantNameRow from './RestaurantNameRow';
import RestaurantCategoryRow from './RestaurantCategoryRow';
import RestaurantMenuRow from './RestaurantMenuRow';

import Restaurant from '../types/Restaurant';

type RestaurantTableBodyProps = {
    restaurants: Restaurant[];
  }

export default function RestaurantTableBody({ restaurants }: RestaurantTableBodyProps) {
  return (
    <tbody className="restaurant-table-body">
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <RestaurantNameRow restaurant={restaurant} />
          <RestaurantCategoryRow restaurant={restaurant} />
          <RestaurantMenuRow restaurant={restaurant} />
        </tr>
      ))}
    </tbody>
  );
}
