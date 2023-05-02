import * as Restaruants from '../restaurants.json';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

import type { RestaurantList } from './types/Restaurant';

export default function App() {
  const restaurants : RestaurantList = Restaruants;

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable data={restaurants} />
    </div>
  );
}
