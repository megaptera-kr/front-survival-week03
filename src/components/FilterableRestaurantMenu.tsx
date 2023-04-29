import type Restaurant from '../types/Restaurant';
import RestaurantTable from './RestaurantTable';
import FilterContainer from './FilterContainer';

type FilterableRestaurantMenuProps = {
  restaurants : Restaurant[];
}

export default function FilterableRestaurantMenu(
  { restaurants }: FilterableRestaurantMenuProps,
) {
  const categories = restaurants
    .reduce((arr:string[], restaurant:Restaurant) => (
      arr.includes(restaurant.category)
        ? arr
        : [...arr, restaurant.category]
    ), []);

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterContainer categories={categories} />
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}
