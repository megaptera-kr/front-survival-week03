import { restaurants } from '../restaurants.json';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

import Restaurant from './types/Restaurant';

export default function App() {
  const restaurantsData:Restaurant[] = restaurants;

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurantsData={restaurantsData} />
    </div>
  );
}
