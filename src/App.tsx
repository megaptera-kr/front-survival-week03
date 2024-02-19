import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import restaurantsData from '../restaurants.json';

const { restaurants } = restaurantsData;

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurants={restaurants} />
    </div>
  );
}
