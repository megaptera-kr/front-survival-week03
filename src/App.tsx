import restaurants from '../restaurants.json';
import FilterableRestaurantTable from './components/FilterableRestaurantTable';

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurants={restaurants.restaurants} />
    </div>
  );
}
