import restaurants from '../restaurants.json';
import { Restaurant } from './types/Restaurant';

import FilterableRestaurantTable from './components/FilterableRestaurantTable';

const restaurantsData:Restaurant[] = restaurants.restaurants;

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurantsData={restaurantsData} />
    </div>
  );
}
