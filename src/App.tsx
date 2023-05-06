import FilterableProductsTable from './components/FilterableProductsTable';

import data from '../restaurants.json';

export default function App() {
  return (
    <div>
      <h1>오늘의 메뉴</h1>
      <FilterableProductsTable restaurants={data.restaurants} />
    </div>

  );
}
