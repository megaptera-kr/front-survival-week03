import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import data from '../restaurants.json';

import { Data } from './types/types';

export default function App() {
  const { restaurants } = data as Data;

  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableRestaurantsTable
        restaurants={restaurants}
      />
    </div>
  );
}
