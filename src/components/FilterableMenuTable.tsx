import FilterableMenuTableHead from './FIlterableMenuTableHead';
import FilterableMenuTableBody from './FilterableMenuTableBody';

import { RestaurantItem } from '../types/restaurantItemType';

type FilterableMenuTableProps = {
  restaurants: RestaurantItem[];
};

export default function FilterableMenuTable({
  restaurants,
}: FilterableMenuTableProps) {
  return (
    <div>
      <table>
        <FilterableMenuTableHead />
        <FilterableMenuTableBody restaurants={restaurants} />
      </table>
    </div>
  );
}
