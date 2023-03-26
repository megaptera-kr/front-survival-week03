import FilterableRestaurantTable from './components/FilterableRestaurantTable';
import { restaurants } from '../restaurants.json';

export default function App() {
  return (
    <>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantTable restaurants={restaurants} />
    </>
  );
}
