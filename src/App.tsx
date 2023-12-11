import restaurants from '../restaurants.json';
import FilterableMenuTable from './components/FilterableMenuTable';

export default function App() {
  const restaurantList: Restaurant[] = restaurants.restaurants;

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <FilterableMenuTable restaurantList={restaurantList} />
    </>
  );
}
