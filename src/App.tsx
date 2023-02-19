import data from '../restaurants.json';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

export default function App() {
  const { restaurants } = data;

  return (
    <>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantsTable data={restaurants} />
    </>

  );
}
