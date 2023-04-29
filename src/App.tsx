import { restaurants } from '../restaurants.json';
import FilterableRestaurantMenu from './components/FilterableRestaurantMenu';

export default function App() {
  return (
    <FilterableRestaurantMenu restaurants={restaurants} />
  );
}
