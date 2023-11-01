import { RestaurantItem } from '../types/restaurantItemType';
import FilterableMenuTableRow from './FilterableMenuTableRow';

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
