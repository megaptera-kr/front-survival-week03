import FilterableMenuTableRow from './FilterableMenuTableRow';

import { RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableProps = {
  restaurants: RestaurantItem[];
};

export default function FilterableMenuTableBody({
  restaurants,
}: FilterableMenuTableProps) {
  return (
    <tbody>
      {restaurants.map((restaurant) => (
        <FilterableMenuTableRow key={restaurant.id} restauant={restaurant} />
      ))}
    </tbody>
  );
}
