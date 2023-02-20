import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

import data from '../restaurants.json';

export default function App() {
  const { restaurants } = data;

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      {restaurants.length
        ? <FilterableRestaurantsTable restaurants={restaurants} />
        : <p>Coming soon!</p>}
    </div>
  );
}
