import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import fetchRestaurants from './utils/fetchRestaurants';

export default function App() {
  const restaurants = fetchRestaurants();

  return <FilterableRestaurantTable restaurants={restaurants} />;
}
