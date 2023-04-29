import { restaurants } from '../restaurants.json';
import FilterableRestaurantMenu from './components/FilterableRestaurantMenu';

// type 적용 하기..

export default function App() {
  return (
    <FilterableRestaurantMenu restaurants={restaurants} />
  );
}
